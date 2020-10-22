import React, { useRef, useEffect } from 'react';
import { Image, Transformer } from 'react-konva';
import useImage from 'use-image';
import { useCanvas, useChange, useNewAttrs } from '../Canvas';

export default function NewImage({image, index, isSelected}) {
  const state = useCanvas();
  const addCanvasItem = useChange();
  const changeCanvasItem = useNewAttrs();
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
        onDragEnd={e => {
          changeCanvasItem('images', index, {
            ...image,
            x: e.target.x(),
            y: e.target.y(),
          })
        }}
        onTransformEnd={e => {
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          node.scaleX(1);
          node.scaleY(1);
          changeCanvasItem('images', index, {
            ...image,
            x: node.x(),
            y: node.y(),
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY)
          });
        }}
        draggable
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  )
};
