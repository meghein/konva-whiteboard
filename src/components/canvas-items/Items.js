import React, { useEffect } from 'react';
import NewImage from './NewImage';
import { useCanvas } from '../Canvas';

export default function Items() {
  const state = useCanvas();

  useEffect(() => {
    console.log("state in items", state)
  }, [state])

  return (
    <>
      {state && state.images.map(image => {
          return <NewImage image={image} />
      })}
    </>
  )
};

