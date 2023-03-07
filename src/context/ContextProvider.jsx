import React, {createContext, useState} from 'react'

export const StateContext =createContext()

const ContextProvider =({children}) =>{
    const [sidebar, setSidebar] = useState(false)
    const [seletedroute,setSelectedRoute] = useState('home')

    return (
        <StateContext.Provider value={{sidebar, setSidebar, seletedroute, setSelectedRoute}}>
          {children}
        </StateContext.Provider>
    )
}
export default ContextProvider