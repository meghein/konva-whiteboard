import React, { createContext, useContext } from 'react';
import Items from './canvas-items/Items';
import { Layer, Stage } from 'react-konva';
import useDragDrop from '../hooks/useDragDrop';
import './Canvas.scss';
import { useCanvasItems, useChangeItems } from '../context/AppProvider';

// "bridged" context by creating a Provider as a child of the Stage
const CanvasItems = createContext();
const UpdateCanvasItems = createContext();

export function useCanvas() {
  return useContext(CanvasItems)
}
export function useChange() {
  return useContext(UpdateCanvasItems)
}
// ********************

export default function Canvas() {
  const { onDrop, onDragOver } = useDragDrop;
  const state = useCanvasItems();
  const addCanvasItem = useChangeItems();

  
  return (
    <div className='background'>
      <div id='canvas' className='canvas'>
        <Stage
          container='canvas'
          width='window.innerWidth'
          height='window.innerHeight'
          onDrop={onDrop}
          onDragOver={onDragOver}
        >
          <UpdateCanvasItems.Provider value={addCanvasItem}>
            <CanvasItems.Provider value={state}>
              <Layer>
                <Items/>
              </Layer>
            </CanvasItems.Provider>
          </UpdateCanvasItems.Provider> 
        </Stage>
      </div>
    </div>
  )
}
