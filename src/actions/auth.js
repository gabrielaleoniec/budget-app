import {firebase, googleAuthProvider, gitHubAuthProvider} from '../firebase/firebase';

export const login = ({uid, displayName, email}) => ({
    type: 'LOGIN',
    uid, 
    displayName, 
    email
});

export const logout = () => ({
    type: 'LOGOUT'
})


export const startLogInGoogle = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

export const startLogInGitHub = () => {
    return () => {
        return firebase.auth().signInWithPopup(gitHubAuthProvider);
    }
}

export const startLogOut = () => {
    return () => {
        return firebase.auth().signOut();
    }
}