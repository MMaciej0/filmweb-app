import { ref, onValue } from 'firebase/database';
import { database } from './firebase';

export const getMovies = (callbackFn) => {
  onValue(ref(database, 'movies/movies'), (snapshot) => {
    const data = snapshot.val();
    const dataSlice = data.slice(0, 10);
    callbackFn(dataSlice);
  });
};
