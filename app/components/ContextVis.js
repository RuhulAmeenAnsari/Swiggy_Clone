"use client"
import React, { useState } from 'react'
import { MyContext } from '../context/Context'


export default function ContextVis({ children }) {
    const [Visible, setVisible] = useState(false)
    return (
        <>
            <MyContext.Provider value={{ Visible, setVisible }}>
                {children}
            </MyContext.Provider>
        </>
    )
}
