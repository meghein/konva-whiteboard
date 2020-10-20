import React, { useState, useEffect } from 'react';
import { useCanvasItems} from '../context/AppProvider';
import './Imports.scss';

export default function Items() {
  const state = useCanvasItems()
  const [toggle, setToggle] = useState(false)
  
  function toggleButton() {
    toggle ? setToggle(false) : setToggle(true)
  }

  useEffect(() => {
    setToggle(false)
  }, [state.imports])

  return (
    <div className='imports'>
      {toggle && 
        <button onClick={toggleButton}>Imports</button>
      }
      {state.imports.length !== 0 && !toggle &&
        <button onClick={toggleButton}>Close</button>
      }
      {!toggle &&
        state.imports.map((item, index) => {
          return (
            <img
              src={item.image}
              alt={item.id}
              key={index}
            />
          )
        })
      }
    </div>
  )
};
