import logo from './logo.svg';
import './App.css';
import Login from './auth/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Dashboard from './auth/dashboard';

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
