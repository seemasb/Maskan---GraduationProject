import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, BrowserRouter, Switch, Redirect, Routes, NavLink } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Contact from './Pages/Home/Contact';
import Properities from './Pages/Home/Properities';
import Sell from './Pages/Home/Sell';


function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <main>
        {/* <Routes>
          <Route path="/Home" element={<Home />} />
        </Routes> */}

        <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route path="/Home" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Properities" element={<Properities />} />
          <Route path="/Sell" element={<Sell />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
