import React from 'react';
import { Layer, Stage } from 'react-konva'
import './Canvas.scss';

export default function Canvas() {
  


  return (
    <div className='background'>
      <div id='canvas' className='canvas'>
        <Stage>
          <Layer>
          </Layer>
        </Stage>
      </div>
    </div>
  )
}
