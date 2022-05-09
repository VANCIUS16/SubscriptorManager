import * as React from 'react';
import Test from './front/Test';
import Home from './front/vistas/Home';
import UserTest from './front/UserTest';
import Login from './front/vistas/Login';
import NavBar from './front/common/NavBar';
import Welcome from './front/vistas/Welcome';
import PageNotFound from './back/PageNotFound';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Config from './front/settings/Config';
import ProtectedRoutes from './back/ProtectedRoutes';
import Inicio from './front/vistas/Inicio';

export default function App() {
  return (
    <Router>
      <CssBaseline />
      <NavBar main={
        <Routes>
          {<Route path='/login'    element={<Login/>}/>}
          <Route                    element={<ProtectedRoutes/>}>
            <Route path='/'         element={<Welcome/>}/>
            <Route path='/inicio'   element={<Inicio/>}/>
            <Route path='/test'     element={<Test/>}/>
            <Route path='/config'   element={<Config/>}/>
            <Route path='/home'     element={<Home/>}/>
            <Route path='/home/:id' element={<UserTest/>}/>
            <Route path='*'         element={<PageNotFound/>}/>
          </Route>
        </Routes>
      }/>
    </Router>
  );
}