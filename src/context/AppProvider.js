import React, { useContext, useState } from 'react';

const AppContext = React.createContext()

export default function AppProvider({children}) {
  const [state, setState] = useState({
    images: []
  })

  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  )
}
