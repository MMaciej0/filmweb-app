import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalProvider } from 'contexts/global';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import HomePage from 'components/pages/HomePage/HomePage';
import MainLayout from 'components/layouts/MainLayout/MainLayout';
import AddMoviePage from 'components/pages/AddMoviePage/AddMoviePage';
import LoginPage from 'components/pages/LoginPage/LoginPage';
import RegisterPage from 'components/pages/RegisterPage/RegisterPage';
import Dashboard from 'components/pages/Dashboard/Dashboard';
import SingleMoviePage from 'components/pages/SingleMoviePage/SingleMoviePage';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
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
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'movies/:id',
        element: <SingleMoviePage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={routes} />
    </GlobalProvider>
  </React.StrictMode>
);
