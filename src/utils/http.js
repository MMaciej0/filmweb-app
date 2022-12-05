import { ref, onValue } from 'firebase/database';
import { database } from './firebase';

export const getMovies = (callbackData, callbackLoading) => {
  onValue(ref(database, 'movies/movies'), (snapshot) => {
    const data = snapshot.val();
    callbackData(data);
    callbackLoading(false);
  });
};
