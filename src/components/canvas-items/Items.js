import React from 'react';
import NewImage from './NewImage';
import { useCanvasItems } from '../../context/AppProvider';


export default function Items() {
  const state = useCanvasItems();

  return (
    <>
      {state && state.images.map(image => {
          return (
            <NewImage
              image={image.image}
              id={image.id}
            />
          )
      })}
    </>
  )
};

