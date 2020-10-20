import React from 'react';
import { Layer, Stage } from 'react-konva'
import Items from './Items'
import './Canvas.scss';

export default function Canvas() {
  


  return (
    <div className='background'>
      <div id='canvas' className='canvas'>
        {/* <Stage>
          <Layer> */}
            <Items/>
          {/* </Layer>
        </Stage> */}
      </div>
    </div>
  )
}
