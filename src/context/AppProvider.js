import React, { useContext, useState } from 'react';
const AppContext = React.createContext();
const UpdateImageArray = React.createContext();

export function useCanvasItems () {
  return useContext(AppContext)
}
export function useUpload () {
  return useContext(UpdateImageArray)
}

export default function AppProvider({children}) {
  const [state, setState] = useState({
    images: [],
    text: [],
    circles: [],
    rectangles: [],
    draw: [],
  })

  function uploadImage(image) {
    const tempImages = [...state.images];
    tempImages.push({id: Date.now(), image: image});
    setState({images: tempImages})
  }

  return (
    <AppContext.Provider value={state}>
      <UpdateImageArray.Provider value={uploadImage}>
        {children}
      </UpdateImageArray.Provider>
    </AppContext.Provider>
  )
}
