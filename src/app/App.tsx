import React from 'react';
import './App.css';
import Login from "./components/login/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";

const App = () => {

  return ( <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="*" element={<Navigate to="/login" replace />}
    />
  </Routes>);
}

export default App;
