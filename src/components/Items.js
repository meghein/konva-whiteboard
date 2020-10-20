import React from 'react';
import { useCanvasItems} from '../context/AppProvider';

export default function Items() {
  const state = useCanvasItems()

  return (
    <div>
      {state && state.images.map((item, index) => {
        return <img src={item.image} alt={item.id} key={index}/>
      })}
    </div>
  )
}
