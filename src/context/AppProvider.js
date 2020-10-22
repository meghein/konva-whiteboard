import React, { useState, createContext, useContext } from 'react';
const CanvasItems = createContext();
const UpdateCanvasItems = createContext();

export function useCanvasItems() {
  return useContext(CanvasItems)
}
export function useChangeItems() {
  return useContext(UpdateCanvasItems)
}

export default function AppProvider({children}) {
  const [state, setState] = useState({
    imports: [],
    images: [],
    text: [],
    circles: [],
    rectangles: [],
    draw: [],
    targetShape: null,
  })

  // function pushes new items in to state object
  function addCanvasItem(type, source) {
    if (type === 'targetShape') {
      setState({...state, targetShape: source})

    } else if (type === 'import') {
      const tempState = [...state.imports];
      tempState.push({id: Date.now(), image: source});
      setState({...state, imports: tempState})

    } else if (type === 'image') {
      const tempState =  [...state.images];
      tempState.push({
        id: Date.now(),
        src: source.src,
        x: window.innerWidth * Math.random(),
        y: window.innerHeight * Math.random(),
      })
      setState({...state, images: tempState})
    }
    console.log("state after new item added:", state)
  }

  return (
    <UpdateCanvasItems.Provider value={addCanvasItem}>
      <CanvasItems.Provider value={state}>
          {children}
      </CanvasItems.Provider>
    </UpdateCanvasItems.Provider>
  )
}
