// import React, { forwardRef, useState } from 'react';
// import './Canvas.scss';

// export default forwardRef(function Canvas(props) {

//   const checkDeselect = e => {
//     if (e.target === e.target.getStage() || e.target.hasName("container")) {
//       props.setTargetShape(null);
//     }
//   };

//   const shapeProps = {
//     name: 'container',
//     fill: props.boxColour,
//     shadowColor: 'gray',
//     stroke:'black',
//     strokeWidth:4,
//     cornerRadius:10,
//   }
//   return (
//     <div
//         className='canvas' 
//         id='canvas'
//         onDrop={props.onDrop}
//         onDragOver={props.onDragOver}
//         // style={{backgroundColor: props.canvasColour}}
//     >
      
//     </div>
//   )
// })

import React from 'react'

export default function Canvas() {
  return (
    <div>
      
    </div>
  )
}
