
'use client';

import React, { useState, useEffect } from 'react';
import type { FirebaseApp } from 'firebase/app';
import type { Auth } from 'firebase/auth';
import type { Firestore } from 'firebase/firestore';
import { initializeFirebase } from '.'; // Assuming barrel file export
import { FirebaseProvider } from './provider';

interface FirebaseInstances {
  app: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
}

export function FirebaseClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [instances, setInstances] = useState<FirebaseInstances | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Initialize Firebase on the client side
    try {
      const firebaseInstances = initializeFirebase();
      setInstances(firebaseInstances);
    } catch (e: any) {
      console.error(e);
      setError(e.message);
    }
  }, []);

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="max-w-2xl p-8 m-4 space-y-4 rounded-lg shadow-lg bg-card border border-destructive">
          <h2 className="text-2xl font-bold text-destructive-foreground">Firebase Configuration Error</h2>
          <p className="text-muted-foreground">
            There was an issue initializing Firebase. This usually happens when the
            Firebase environment variables are missing or incorrect.
          </p>
          <p className="text-muted-foreground">
            Please ensure your <code>.env</code> file is set up correctly with your
            actual Firebase project credentials. You can find these in your
            Firebase project settings.
          </p>
          <pre className="p-4 mt-2 text-sm rounded-md bg-muted text-destructive overflow-auto">
            {error}
          </pre>
        </div>
      </div>
    );
  }

  if (!instances) {
    // You can return a loader here, or null to avoid layout shifts.
    return null;
  }

  return <FirebaseProvider value={instances}>{children}</FirebaseProvider>;
}
