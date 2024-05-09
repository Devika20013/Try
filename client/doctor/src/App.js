// import {useState} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import Signup from './Register.jsx'
// import Login from './Login.jsx'
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Self from './Self.jsx'
// import Notfound from './Notfound.jsx'
// import Symptoms from './Symptoms.jsx'
// import Knowmedici from './Knowmedici.jsx'
// import Knowsymp from './Knowsymp.jsx'
// import See from './See.jsx'
// function App(){
//   return (
//     <BrowserRouter>
//        <Routes>
//          <Route path='/register' element={<Signup/>}></Route>
//          <Route path='/login' element={<Login/>}></Route>
//          <Route path='/Symptoms' element={<Symptoms/>}></Route>
//          <Route path='/Notfound' element={<Notfound/>}></Route>
//          <Route path='/Knowmedici' element={<Knowmedici/>}></Route>
//          <Route path='/Knowsymp' element={<Knowsymp/>}></Route>
//          <Route path='/See' element={<See data ={data}/>}></Route>
//        </Routes>
//     </BrowserRouter>
//   )
// }

// export default App;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Register.jsx';
import Login from './Login.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Self from './Self.jsx';
import Notfound from './Notfound.jsx';
import Symptoms from './Symptoms.jsx';
import Knowmedici from './Knowmedici.jsx';
import Knowsymp from './Knowsymp.jsx';
import Saw from './Saw.jsx';
import Med from './Med.jsx';
function App() {
  const [data, setData] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Symptoms' element={<Symptoms />} />
        <Route path='/Notfound' element={<Notfound />} />
        <Route path='/Knowsymp' element={<Knowsymp />} />
        <Route path='/Knowmedici' element={<Knowmedici/>} />
        <Route path='/Self' element={<Self/>} />
        <Route path="/Saw" element={<Saw data ={data}/>} /> 
        <Route path="/Med" element={<Med data ={data}/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
