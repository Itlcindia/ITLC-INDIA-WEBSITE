'use client';
import { addDoc, collection, doc, setDoc, deleteDoc, serverTimestamp, type Firestore } from 'firebase/firestore';
import { errorEmitter } from '../error-emitter';
import { FirestorePermissionError } from '../errors';

// A generic function to add a document to a collection
export function addDocument(db: Firestore, collectionPath: string, data: any) {
  const collRef = collection(db, collectionPath);
  addDoc(collRef, {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  }).catch(async (serverError) => {
    const permissionError = new FirestorePermissionError({
      path: collRef.path,
      operation: 'create',
      requestResourceData: data,
    });
    errorEmitter.emit('permission-error', permissionError);
  });
}

// A generic function to set (create or overwrite) a document
export function setDocument(db: Firestore, collectionPath: string, docId: string, data: any) {
  const docRef = doc(db, collectionPath, docId);
  setDoc(docRef, {
    ...data,
    updatedAt: serverTimestamp(),
  }, { merge: true }).catch(async (serverError) => {
    const permissionError = new FirestorePermissionError({
      path: docRef.path,
      operation: 'update',
      requestResourceData: data,
    });
    errorEmitter.emit('permission-error', permissionError);
  });
}

// A generic function to delete a document
export function deleteDocument(db: Firestore, collectionPath: string, docId: string) {
    const docRef = doc(db, collectionPath, docId);
    deleteDoc(docRef).catch(async (serverError) => {
        const permissionError = new FirestorePermissionError({
            path: docRef.path,
            operation: 'delete',
        });
        errorEmitter.emit('permission-error', permissionError);
    });
}
