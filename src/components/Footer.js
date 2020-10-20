import React from 'react'
import { useCanvasItems} from '../context/AppProvider';
import './Footer.scss'

export default function Items() {
  const state = useCanvasItems()

  return (
    <footer>
      {state && state.images.map((item, index) => {
        return <img src={item.image} alt={item.id} key={index}/>
      })}
    </footer>
  )
}