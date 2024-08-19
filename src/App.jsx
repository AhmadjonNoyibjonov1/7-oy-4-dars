import React, { createContext, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import ErrorPages from "./pages/ErrorPages"
import Login from "./pages/Login"
import Product from "./pages/Product"
import Orders from "./pages/Orders"
import Register from "./pages/Register"
import MainLayout from "./layouts/MainLayout"

export const TokenContext = createContext('');
export const UserContext = createContext('');

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [user, setUser] = useState({});

  return (
    <div>
      <UserContext.Provider value={{user, setUser}}>
        <TokenContext.Provider value={{token,setToken}}>
          <Routes>
            <Route path='/' element={<MainLayout><Home></Home></MainLayout>}></Route>
            <Route path='/about' element={<MainLayout><About></About></MainLayout>}></Route>
            <Route path='/cart' element={<MainLayout><Cart></Cart></MainLayout>}></Route>
            <Route path='/product/:id' element={<MainLayout><Product></Product></MainLayout>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            {
              token && <>
                  <Route path='/orders' element={<MainLayout><Orders></Orders></MainLayout>}></Route>
                <Route path='/checkout' element={<MainLayout><Checkout></Checkout></MainLayout>}></Route>
              </>
            }

            <Route path='*' element={<ErrorPages></ErrorPages>}></Route>
          </Routes>

        </TokenContext.Provider>
      </UserContext.Provider>


    </div>
  );
}

export default App;
