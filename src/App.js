import * as React from 'react';
import Login from './front/Login';
import NavBar from './front/NavBar';
import Welcome from './front/Welcome';
import PageNotFound from './back/PageNotFound';
import CssBaseline from '@mui/material/CssBaseline';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Test from './front/Test';
import Home from './front/Home';

export default function App() {
  return (
    <Router>
      <CssBaseline />
      <NavBar main={
        <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      }/>
    </Router>
  );
}