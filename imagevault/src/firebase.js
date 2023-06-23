import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyC2LLUNDXKJvXkOe_1ILw1uQ3LvSIeWOQM",
  authDomain: "imagevault-15782.firebaseapp.com",
  projectId: "imagevault-15782",
  storageBucket: "imagevault-15782.appspot.com",
  messagingSenderId: "27632296485",
  appId: "1:27632296485:web:7c2d538090ad6e0050d5cc",
  measurementId: "G-6SK561WFC0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const signIn = e =>
{
  e.preventDefault()

  chrome.identity.getAuthToken({ interactive: true }, token =>
  {
    if ( chrome.runtime.lastError || ! token ) {
      alert(`SSO ended with an error: ${JSON.stringify(chrome.runtime.lastError)}`)
      return
    }

    signInWithCredential(auth, GoogleAuthProvider.credential(null, token))
      .then(res =>
      {
        console.log('Signed in!')
      })
      .catch(err =>
      {
        alert(`SSO ended with an error: ${err}`)
      })
  })
}