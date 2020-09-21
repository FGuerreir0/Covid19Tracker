import React from 'react';
import './App.scss';

//IMPORT COMPONENTS
import Home from './Components/Home';
import Footer from './Components/Footer';

export default function App() {
  return (
    <>
      <div className='app'>
        <Home />
        <Footer />
      </div>
    </>
  );
}
