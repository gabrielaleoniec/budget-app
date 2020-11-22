import {firebase, googleAuthProvider} from '../firebase/firebase';

export const login = ({uid, displayName, email}) => ({
    type: 'LOGIN',
    uid, 
    displayName, 
    email
});

export const logout = () => ({
    type: 'LOGOUT'
})


export const startLogIn = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

export const startLogOut = () => {
    return () => {
        return firebase.auth().signOut();
    }
}