import React from 'react';
import Header from './components/Header'
import Toolbar from './components/Toolbar'
import Canvas from './components/Canvas'
import Footer from './components/Footer'
import './App.scss';

export default function App() {
  return (
    <div className="App">
      <Header/>
        <Toolbar/>
      <main>
        <Canvas/>
      </main>
      <Footer/>
    </div>
  );
}
