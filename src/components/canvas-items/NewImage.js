import React, { useEffect } from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';
import { useCanvasItems } from '../../context/AppProvider';

export default function NewImage(image) {
  const state = useCanvasItems();
  useEffect(() => {
    console.log("imag", state)
  }, [state])

  return (
    <Image
      // id={id}
      // image={img}
    />
  )
};
