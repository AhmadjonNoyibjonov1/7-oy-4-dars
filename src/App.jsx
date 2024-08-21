import React, { createContext, useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ErrorPages from "./pages/ErrorPages";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Orders from "./pages/Orders";
import Register from "./pages/Register";
import MainLayout from "./layouts/MainLayout";
import Products from './pages/Products';

export const TokenContext = createContext('');
export const UserContext = createContext('');
export const ThemeContext = createContext('');

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState({});
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <TokenContext.Provider value={{ token, setToken }}>
          <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Routes>
              <Route path='/' element={<MainLayout><Home /></MainLayout>}></Route>
              <Route path='/about' element={<MainLayout><About /></MainLayout>}></Route>
              <Route path='/cart' element={<MainLayout><Cart /></MainLayout>}></Route>
              <Route path='/product/:id' element={<MainLayout><Product /></MainLayout>}></Route>
              <Route path='/products' element={<MainLayout><Products /></MainLayout>}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/register' element={<Register />}></Route>
              {token && <>
                <Route path='/orders' element={<MainLayout><Orders /></MainLayout>}></Route>
                <Route path='/checkout' element={<MainLayout><Checkout /></MainLayout>}></Route>
              </>}
              <Route path='*' element={<ErrorPages />}></Route>
            </Routes>
          </ThemeContext.Provider>
        </TokenContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;