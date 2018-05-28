import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyBbRICDrSEno58bN6XIfk0wxYx_VpCg7eQ',
  authDomain: 'wdiadt.firebaseapp.com',
  projectId: 'wdiadt'
})

export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()

firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase
  .firestore()
  .enablePersistence()
  .then(() => firebase.firestore())
  .catch(error => firebase.firestore())
