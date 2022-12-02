import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAx2ig5VetgCpzmR9mVSlidossbC8KY29g',
  authDomain: 'my-film-2de07.firebaseapp.com',
  databaseURL:
    'https://my-film-2de07-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'my-film-2de07',
  storageBucket: 'my-film-2de07.appspot.com',
  messagingSenderId: '171371714614',
  appId: '1:171371714614:web:fba196aa610b3886716097',
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
