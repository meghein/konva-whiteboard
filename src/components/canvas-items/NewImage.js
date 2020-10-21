import React, { useEffect } from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

export default function NewImage(image, id) {
  const [img] = useImage(image)
  useEffect(() => {
    console.log(img)
    console.log(image)
  }, [image])

  return (
    <Image
      id={id}
      image={img}
    />
  )
};
