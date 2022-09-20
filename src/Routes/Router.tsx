import { Component, ReactNode, useContext, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { Dashboard } from '../pages/Dasboard';
import Login from '../pages/login';
import { Produtos } from '../pages/Produtos';

export function Router() {
  const { isAuthenticated } = useContext(AuthContext);

  const PrivateRoute = ({ children }: any) => {
    return isAuthenticated ? children : <Navigate to='/login' />;
  };
  const LoginRoute = ({ children }: any) => {
    return !isAuthenticated ? children : <Navigate to='/' />;
  };

  return (
    <Routes>
      <Route
        path='/login'
        element={
            <Login />
        }
      />
      <Route
        path='/'
        element={
          <PrivateRoute>
            <DefaultLayout />
          </PrivateRoute>
        }
      >
        <Route path='/' element={<Dashboard />} />
        <Route path='/produtos' element={<Produtos />} />
      </Route>
    </Routes>
  );
}
