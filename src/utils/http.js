import { onAuthStateChanged } from 'firebase/auth';
import { ref, onValue } from 'firebase/database';
import { auth, database } from './firebase';

export const getMovies = (callbackData, callbackLoading) => {
  onValue(ref(database, 'movies/movies'), (snapshot) => {
    const data = snapshot.toJSON();
    callbackData(Object.values(data));
    callbackLoading(false);
  });
};

export const getUser = (callbackUser, callbackLoading) => {
  onAuthStateChanged(auth, (user) => {
    callbackUser(user);
    callbackLoading(false);
  });
};
