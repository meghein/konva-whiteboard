import React from 'react';
import { useCanvasItems} from '../context/AppProvider';
import './Imports.scss';

export default function Items() {
  const state = useCanvasItems()

  return (
    <div className='imports-drawer'>
      {state && state.images.map((item, index) => {
        return (
          <img
            src={item.image}
            alt={item.id}
            key={index}
            style={{maxWidth: '100px', maxHeight: '100px'}}
          />
        )
      })}
    </div>
  )
};
