import React from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {App} from './App'

import {AuthPage} from './AuthPage';
import { DashboardPage } from './DashboardPage';

import "./index.css";

const router = createBrowserRouter([
  {path: '/auth', element: <AuthPage/>},
  {path: '/', element: <DashboardPage/>}

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App> 
      <RouterProvider router={router}/>
    </App>
  </React.StrictMode>,
)
