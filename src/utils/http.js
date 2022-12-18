import { onAuthStateChanged } from 'firebase/auth';
import { ref, onValue, set, get, child } from 'firebase/database';
import { auth, database } from './firebase';

export const getMovies = (callbackData, callbackLoading) => {
  onValue(ref(database, 'movies'), (snapshot) => {
    const data = snapshot.val();
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

export const overwiteMovie = (movieID, replaceMovie) => {
  return set(ref(database, `movies/${movieID}`), replaceMovie);
};
