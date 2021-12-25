import firebase from 'firebase/app'
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs(true)
import 'firebase/auth'
 

const firebaseConfig = {
apiKey: "AIzaSyDqtbQcVzj16Jd1uFlNwu2qi0LrTVKa6Fg",
authDomain: "photofeed-b119b.firebaseapp.com",
databaseURL: "https://photofeed-b119b-default-rtdb.firebaseio.com",
projectId: "photofeed-b119b",
storageBucket: "photofeed-b119b.appspot.com",
messagingSenderId: "657831769893",
appId: "1:657831769893:web:aa9c33da2e08ca33ca4ccc",
measurementId: "G-QBDGFGLS78"
}

try {
  firebase.initializeApp(firebaseConfig)
} catch (err) {
  console.log(err)
}

export const logoutUser = () => {
  
 firebase.auth().signOut().then(function() {
  console.log('Signed Out');
}, function(error) {
  console.error('Sign Out Error', error);
})
return null
}



export const signUpUser = async ({ name, email, password }) => {
  try {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
    firebase.auth().currentUser.updateProfile({
      displayName: name,
    })


    let userID = user.user.uid
    firebase.database().ref('users/' + userID).set({
      name: name,
     // password: password,
      username: '@username',
      email: email,
      avatar:"https://gravatar.com/avatar"

    })
    await user.user.sendEmailVerification()
    //alert("Email Verfification has been sent. Please Verify")
    return { user }
  } catch (error) {
    return {
      error: error.message,
    }
  }
}

export const loginUser = async ({ email, password }) => {
  try {
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
    
    return { user }
  } catch (error) {
    return {
      error: error.message,
    }
  }
}

export const sendEmailWithPassword = async (email) => {
  try {
    await firebase.auth().sendPasswordResetEmail(email)
    return {}
  } catch (error) {
    return {
      error: error.message,
    }
  }
}
