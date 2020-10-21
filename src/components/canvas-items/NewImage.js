import React, { useEffect } from 'react';
import { Image } from 'react-konva';
// import useImage from 'use-image';
import { useCanvas } from '../Canvas';

export default function NewImage(image) {
  const state = useCanvas();
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
