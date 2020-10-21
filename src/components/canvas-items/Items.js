import React, { useEffect } from 'react';
import NewImage from './NewImage';
import { useCanvasItems } from '../../context/AppProvider';

export default function Items() {
  const state = useCanvasItems();

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

