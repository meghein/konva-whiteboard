import React, { useState } from 'react';
import Header from './Header'
import Toolbar from './toolbar'
import Canvas from './Canvas'
import Footer from './Footer'
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