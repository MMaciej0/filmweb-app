import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import HomePage from 'components/pages/HomePage/HomePage';
import MainLayout from 'components/layouts/MainLayout/MainLayout';
import AddMoviePage from 'components/pages/AddMoviePage/AddMoviePage';
import LoginPage from 'components/pages/LoginPage/LoginPage';
import RegisterPage from 'components/pages/RegisterPage/RegisterPage';
import Dashboard from 'components/pages/Dashboard/Dashboard';

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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
