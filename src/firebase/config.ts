const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// a function that returns the config and checks if all env vars are set
export function getFirebaseConfig() {
    if (
        !firebaseConfig.apiKey ||
        !firebaseConfig.authDomain ||
        !firebaseConfig.projectId ||
        !firebaseConfig.storageBucket ||
        !firebaseConfig.messagingSenderId ||
        !firebaseConfig.appId
    ) {
        // When running in a server-side context, this error will be helpful.
        // In the browser, the client-provider will catch and log this.
        throw new Error(
        'Firebase config is not set. Please make sure you have a .env file with all the required Firebase config variables.'
        );
    }
    return firebaseConfig;
}
