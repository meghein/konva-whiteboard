import React from 'react';
import Items from './canvas-items/Items';
import { Layer, Stage } from 'react-konva';
import useDragDrop from '../hooks/useDragDrop';
import './Canvas.scss';

export default function Canvas() {
  const { onDrop, onDragOver } = useDragDrop;
  
  return (
    <div className='background'>
      <div id='canvas' className='canvas'>
        <Stage
          container='canvas'
          // ref={stageRef}
          // onMouseDown={props.checkDeselect}
          // onTouchStart={props.checkDeselect}
          onDrop={onDrop}
          onDragOver={onDragOver}
        >
          <Layer>
            <Items/>
          </Layer>
        </Stage>
      </div>
    </div>
  )
}
