import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const DataProvide = createContext();

export function DataProvider({children}) {

    const [data,setData] = useState([]);
    

    return (
        <DataProvide.Provider value={{data,setData}}>
            {children}
        </DataProvide.Provider>
    )
}
