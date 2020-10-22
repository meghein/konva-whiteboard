import React from 'react';
import NewImage from './NewImage';
import { useCanvas, useChange } from '../Canvas';

export default function Items() {
  const state = useCanvas();
  const addCanvasItem = useChange();

  return (
    <>
      {state && state.images.map(image => {
          return (
            <NewImage
              key={image.id}
              image={image}
              isSelected={image.id === state.targetShape}
              // onChange={newAttrs => {
              //   const temp = [...state]
              //   temp[image.id] = newAttrs;
              //   state.setCanvasItems(temp);
              // }}
              setTargetShape={state.setTargetShape}
            />
          )
      })}
    </>
  )
};

