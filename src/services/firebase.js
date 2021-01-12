import firebase, { firestore } from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB1vH1FZ7Z3gtmPEBE5sxRSgHBvr9ZTZMo",
    authDomain: "web-fighting-1.firebaseapp.com",
    projectId: "web-fighting-1",
    storageBucket: "web-fighting-1.appspot.com",
    messagingSenderId: "465768115839",
    appId: "1:465768115839:web:229111cae0ab565152d94a",
    measurementId: "G-GS698H08XT"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
}; 


export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = database.collection('users').doc(`/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
}

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await database.collection('users').doc(`/${uid}`).get();
    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};


export const auth = firebase.auth();
export const database = firebaseApp.firestore();