import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";

import Login from '../Login/Login';
import Register from '../Login/Register';
import Dashboard from '../Dashboard/Dashboard';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);



  return (
    <>
      {isAuthenticated ? (
        <Dashboard setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <Routes>
              <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
             
              <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} />} />
          </Routes>
        
      )}
    </>
  );
};

export default App;
