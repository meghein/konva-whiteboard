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

const ChangeItems = createContext();
export function useNewAttrs() {
  return useContext(ChangeItems)
}

export default function Canvas() {
  const { onDrop, onDragOver } = useDragDrop;
  const state = useCanvasItems();
  const addCanvasItem = useChangeItems();

  function changeCanvasItem(key, index, newAttrs) {
      const temp = [...state[key]]
      temp[index] = newAttrs;
      addCanvasItem(temp);
  }

  
  return (
    <div className='background'>
      <div id='canvas'>
        <Stage
          container='canvas'
          width={842}
          height={1191}
          onDrop={onDrop}
          onDragOver={onDragOver}
        >
          <UpdateCanvasItems.Provider value={addCanvasItem}>
            <CanvasItems.Provider value={state}>
              <ChangeItems.Provider value={changeCanvasItem}>
                <Layer>
                  <Items/>
                </Layer>
              </ChangeItems.Provider>
            </CanvasItems.Provider>
          </UpdateCanvasItems.Provider> 
        </Stage>
      </div>
    </div>
  )
}
