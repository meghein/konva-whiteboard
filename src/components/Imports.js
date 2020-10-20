import React, { useState } from 'react';
import { useCanvasItems} from '../context/AppProvider';
import './Imports.scss';

export default function Items() {
  const state = useCanvasItems()
  const [toggle, setToggle] = useState(false)
  
  function toggleButton() {
    toggle ? setToggle(false) : setToggle(true)
    console.log(state.images)
  }

  return (
    <div className='imports'>
      {toggle && 
        <button onClick={toggleButton}>Imports</button>
      }
      {state.images.length !== 0 && !toggle &&
        <button onClick={toggleButton}>Close</button>
      }
      {!toggle &&
        state.images.map((item, index) => {
          return (
            <img
              src={item.image}
              alt={item.id}
              key={index}
              style={{maxWidth: '200px', maxHeight: '150px'}}
            />
          )
        })
      }
    </div>
  )
};
