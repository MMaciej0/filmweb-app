import { ref, onValue } from 'firebase/database';
import { database } from './firebase';

export const getMovies = (callbackFn) => {
  onValue(ref(database, 'movies/movies'), (snapshot) => {
    const data = snapshot.val();
    callbackFn(data);
  });
};
