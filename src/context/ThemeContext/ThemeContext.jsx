import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()



function ThemeContextProvider(props) {
    // eslint-disable-next-line
    const [theme, setTheme] = useState({
        type: 'dark',
        primary: '#f56539',
        primary400: '#ff764d',
        primary600: '#fa5624',
        primary80: '#f56539cc',
        primary50: '#f5653980',
        primary30: '#f565394d',
        secondary: '#212121',
        secondary70: '#212121b3',
        secondary50: '#21212180',
        tertiary: '#eaeaea',
        tertiary80: '#eaeaeacc',
        tertiary70: '#eaeaeab3',
        tertiary50: '#eaeaea80',
    })
    const [drawerOpen, setDrawerOpen] = useState(false)

    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }



    const value = { theme, drawerOpen, setHandleDrawer }
    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    )
}


export default ThemeContextProvider