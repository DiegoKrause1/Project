import { auth } from "./firebase";

export function login(email: string, password: string) {
  return new Promise<void>((resolve, reject) => {
    auth.signInWithEmailAndPassword(email, password).then(() => {
      resolve();
    }).catch(err => {
      reject(err);
    })
  })
}