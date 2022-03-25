import { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavComponent from './NavComponent';
import AddContact from './AddContact';
import Contacts from './Contacts';
import HomePage from './HomePage';
import About from './About';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [contact, setContact] = useState({
    firstName: 'abdullah',
    lastName: 'siam',
    email: 'example@gmail.com',
    dob: new Date(),
    gender: 'male',
  });
  return (
    <>
      <BrowserRouter>
        <NavComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddContact contact={contact} />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
