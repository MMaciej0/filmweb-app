import React, { createContext, useContext, useState, useEffect } from 'react';
import { getMovies, getUser } from 'utils/http';
import Loader from 'components/atoms/Loader/Loader';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [moviesLoading, setMoviesLoading] = useState(true);

  useEffect(() => {
    getMovies(setMovies, setMoviesLoading);
    getUser(setUser, setUserLoading);
  }, []);

  if (userLoading || moviesLoading) return <Loader />;

  return (
    <GlobalContext.Provider value={{ user, movies, userLoading }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
