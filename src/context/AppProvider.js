import React, { useContext, useState } from 'react';
const CanvasItems = React.createContext();
const UpdateImageArray = React.createContext();
const UpdateCanvasItems = React.createContext();

export function useCanvasItems () {
  return useContext(CanvasItems)
}
export function useUpload () {
  return useContext(UpdateImageArray)
}
export function useChangeItems () {
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
  })

  function uploadImage(image) {
    const tempImports = [...state.imports];
    tempImports.push({id: Date.now(), image: image});
    setState({imports: tempImports})
  }

  return (
    <CanvasItems.Provider value={state}>
      <UpdateImageArray.Provider value={uploadImage}>
        <UpdateCanvasItems.Provider value={setState}>
          {children}
        </UpdateCanvasItems.Provider>
      </UpdateImageArray.Provider>
    </CanvasItems.Provider>
  )
}
