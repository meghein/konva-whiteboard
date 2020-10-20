import React from 'react';
import useDragDrop from '../hooks/useDragDrop'
import { Layer, Stage } from 'react-konva';
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
          </Layer>
        </Stage>
      </div>
    </div>
  )
}
