import React, { useRef, useEffect } from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';
import { useCanvas, useChange } from '../Canvas';

export default function NewImage({image, isSelected}) {
  const state = useCanvas();
  const addCanvasItem = useChange();
  const shapeRef = useRef();
  const trRef = useRef();
  const [img] = useImage(image.src);

  useEffect(() => {
    if (isSelected) {
      trRef.current.setNode(shapeRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  function onSelect() {
    addCanvasItem('targetShape', image.id)
  }

  function onChange(newAttrs){
    const temp = [...state]
    temp[image.id] = newAttrs;
    state.setCanvasItems(temp);
  }

  

  return (
    <>
      <Image
        id={image.id}
        image={img}
        ref={shapeRef}
        x={image.x}
        y={image.y}
        onClick={onSelect}
        onTap={onSelect}

        // onChange={}

        draggable
      />
    </>
  )
};
