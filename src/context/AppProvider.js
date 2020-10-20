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
    images: []
  })

  function uploadImage(image) {
    setState({...state, images: {id: Date.now(), image: image}})
    console.log('THE IMAGE:', image)
    console.log(state)
  }

  return (
    <AppContext.Provider value={state}>
      <UpdateImageArray.Provider value={uploadImage}>
        {children}
      </UpdateImageArray.Provider>
    </AppContext.Provider>
  )
}
