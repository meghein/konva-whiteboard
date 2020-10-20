import React from 'react';
import { Stage } from 'react-konva'
import { useCanvasItems } from '../context/AppProvider'
import './Canvas.scss';

export default function Canvas() {
  const state = useCanvasItems()


  return (
    <div className='background'>
      <div
        id='canvas'
        className='canvas'
      >
        <Stage></Stage>

      </div>
    </div>
  )
}
