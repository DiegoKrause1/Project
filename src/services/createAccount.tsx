import { auth } from './firebase';
import { useToast } from 'native-base';
import { setLanguage, getTranslation } from 'firebase-error-translator'

setLanguage('pt');

export function createAccount(email: string, senha:string) {
  return new Promise<void>((resolve, reject) => {
    auth.createUserWithEmailAndPassword(email, senha).then(suc => {
      resolve();
    }).catch(err => {
      reject(err);
    })
  })
}