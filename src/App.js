
import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Home from './pages/home/Home';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';
import Login from './component/login/Login';
import Register from './component/register/Register';
import Booking from './component/Booking/Booking';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/hotels' element={<List/>}/>
      <Route path='/hotels/:id' element={<Hotel/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/booking' element={<Booking/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
