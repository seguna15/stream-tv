import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {App} from './App'

import {AuthPage} from './AuthPage';
import { DashboardPage } from './DashboardPage';

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App>
      <Routes>
        <Route path='/auth' element={<AuthPage />} />
        <Route path="/*" element={<DashboardPage/>} />
      </Routes>
    </App>
  </BrowserRouter>
);
