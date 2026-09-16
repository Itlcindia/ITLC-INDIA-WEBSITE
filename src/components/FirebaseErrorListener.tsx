'use client';

import React, { useEffect } from 'react';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

export function FirebaseErrorListener() {
  useEffect(() => {
    const handlePermissionError = (error: FirestorePermissionError) => {
      // In a real app, you might use a toast notification library
      // or a more sophisticated error reporting service.
      // For development, we'll throw it to get the Next.js overlay.
      if (process.env.NODE_ENV === 'development') {
        throw error;
      } else {
        console.error(error); // Log to console in production
      }
    };

    errorEmitter.on('permission-error', handlePermissionError);

    // No cleanup function needed if EventEmitter persists for app lifetime
  }, []);

  return null; // This component does not render anything
}
