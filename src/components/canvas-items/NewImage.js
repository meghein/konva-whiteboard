import React, { useEffect } from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

export default function NewImage({image}) {
  const [img] = useImage(image.src)

  useEffect(() => {
    console.log(img)
  }, [img])

  return (
    <Image
      id={image.id}
      image={img}
      x={image.x}
      y={image.y}
    />
  )
};
