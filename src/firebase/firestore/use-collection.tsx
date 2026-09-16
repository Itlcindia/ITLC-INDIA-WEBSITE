'use client';

import { useState, useEffect } from 'react';
import {
  onSnapshot,
  query,
  collection,
  type Query,
  type DocumentData,
  type FirestoreError,
  CollectionReference,
} from 'firebase/firestore';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

interface UseCollectionOptions {
  // You can add options like filters, sorting, etc. later
}

export function useCollection<T = DocumentData>(
  ref: CollectionReference<T> | Query<T> | null,
  options?: UseCollectionOptions
) {
  const [data, setData] = useState<T[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<FirestoreError | null>(null);

  useEffect(() => {
    if (!ref) {
      setData(null);
      setLoading(false);
      return;
    }

    setLoading(true);

    const unsubscribe = onSnapshot(
      ref,
      (snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as T[];
        setData(docs);
        setLoading(false);
        setError(null);
      },
      (err) => {
        const permissionError = new FirestorePermissionError({
          path: ref instanceof CollectionReference ? ref.path : 'query',
          operation: 'list',
        });
        errorEmitter.emit('permission-error', permissionError);

        setError(err);
        setLoading(false);
        setData(null);
      }
    );

    return () => unsubscribe();
  }, [ref]); // The hook re-runs when the reference changes

  return { data, loading, error };
}
