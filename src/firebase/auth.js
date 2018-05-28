import { auth, googleProvider } from './firestore'

export function loginWithGoogle() {
  return auth.signInWithPopup(googleProvider)
}

export function logout() {
  return auth.signOut()
}

export function onAuthChange() {
  return auth.onAuthStateChanged(function(user) {
    if (user) {
      return {
        name: user.displayName,
        id: user.uid
      }
    }
  })
}
