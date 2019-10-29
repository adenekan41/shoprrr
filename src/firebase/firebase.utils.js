import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBa2JJOBa3erbU_49rOlHF5PM8KDE1PfHk",
    authDomain: "crwn-db-57198.firebaseapp.com",
    databaseURL: "https://crwn-db-57198.firebaseio.com",
    projectId: "crwn-db-57198",
    storageBucket: "crwn-db-57198.appspot.com",
    messagingSenderId: "643389196095",
    appId: "1:643389196095:web:fe2227a33b9d454c16358a"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get() 

    if(!snapShot.exists){
        const {displayName , email} = userAuth    
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email, 
                createdAt,
                ...additionalData
            })
        } catch(err){
            console.log('error creating user')
        }

    }
    return userRef;
}
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase