import React, {useEffect} from 'react'
import { Image } from 'react-konva';
import useImage from 'use-image';

export default function NewImage(image, key) {
  const [img] = useImage(image.src);

  useEffect(() => {
    console.log(image)
  }, [image])


  return (
    <Image
      // id={id}
      image={img}
      key={key}
    />
  )
};
