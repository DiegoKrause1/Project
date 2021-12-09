import { auth } from "./firebase";

export function Logout() {
  return new Promise<void>((resolve, reject) => {
    auth.signOut().then(() => {
      resolve();
    }).catch(err => {
      reject(err);
    })
  })
}