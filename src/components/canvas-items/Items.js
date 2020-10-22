import React from 'react';
import NewImage from './NewImage';
import { useCanvas } from '../Canvas';

export default function Items() {
  const state = useCanvas();

  return (
    <>
      {state && state.images.map(image => {
          return <NewImage key={image.id} image={image} />
      })}
    </>
  )
};

