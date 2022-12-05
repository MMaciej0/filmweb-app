import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from 'components/pages/HomePage/HomePage';
import MainLayout from 'components/layouts/MainLayout/MainLayout';
import AddMoviePage from 'components/pages/AddMoviePage/AddMoviePage';
import LoginPage from 'components/pages/LoginPage/LoginPage';
import RegisterPage from 'components/pages/RegisterPage/RegisterPage';

const App = () => {
  const [user, setUser] = useState(null);

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout user={user} />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'add',
          element: <AddMoviePage />,
        },
        {
          path: 'login',
          element: <LoginPage setUser={setUser} />,
        },
        {
          path: 'register',
          element: <RegisterPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default App;
