import React, { useState } from 'react';
import Header from './components/Header'
import Toolbar from './components/toolbar'
import Canvas from './components/Canvas'
import Footer from './components/Footer'
import './App.scss';

export default function App() {
  const [targetShape, setTargetShape] = useState('')
  return (
    <div className="App">
      <Header/>
        <Toolbar/>
      <main>
        <Canvas
          setTargetShape = {setTargetShape}
        />
      </main>
      <Footer/>
    </div>
  );
}