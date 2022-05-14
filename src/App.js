import * as React from 'react';
import Child from './Child';
import Test from './front/Test';
import Home from './front/vistas/Home';
import UserTest from './front/UserTest';
import Login from './front/vistas/Login';
import NavBar from './front/common/NavBar';
import Inicio from './front/vistas/Inicio';
import Inicio2 from './front/vistas/Inicio2';
import Config from './front/settings/Config';
import Welcome from './front/vistas/Welcome';
import PageNotFound from './back/PageNotFound';
import CssBaseline from '@mui/material/CssBaseline';
import ProtectedRoutes from './back/ProtectedRoutes';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//sessionStorage.setItem('backgroundColor','#e8e8e8')
//document.body.style = `background: ${sessionStorage.getItem('backgroundColor')}` ;
// #e8e8e8 
// #FF5733

export default function App() {

  const [color, setColor] = React.useState('#e8e8e8')
  document.body.style = `background: ${color}`;

  return (
    <div>
      
      <Router>
        
        <CssBaseline />
        <NavBar main={
          <Routes>
            {<Route path='/login'    element={<Login/>}/>}
              <Route                    element={<ProtectedRoutes/>}>
                <Route path='/'         element={<Welcome/>}/>
                <Route path='/inicio'   element={<Inicio/>}/>
                <Route path='/inicio2'   element={<Inicio2/>}/>
                <Route path='/test'     element={<Test/>}/>
                <Route path='/config'   element={<Config title={<Child changeColor = {color => setColor(color)}/>}/>}/>
                <Route path='/home'     element={<Home/>}/>
                <Route path='/home/:id' element={<UserTest/>}/>
                <Route path='*'         element={<PageNotFound/>}/>
              </Route>
          </Routes>
        }/>
      </Router>
    </div>
  );
}