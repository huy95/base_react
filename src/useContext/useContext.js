// truyền dữ liệu từ cha xuống con có 2 cách :

// 1. sử dụng thằng props
// 2. sử dụng hook context

// ví dụ: có màn A => màn B => màn C 


import { createContext, useState } from "react";
import ParagraphUseContext from "./useContextChild";


export const ThemeContext = createContext()
function AppUseContext(){
    const [theme, setTheme] = useState('blue')

    const toggleTheme = () => {
        setTheme(theme === 'yellow' ? 'blue': 'yellow');
    }

    return (
        <ThemeContext.Provider value={theme}>        <div>
            <button style={{padding: 20}} onClick={toggleTheme}>
                Toggle theme
            </button>
            <ParagraphUseContext/>
        </div>
        </ThemeContext.Provider>

    )
}

export default AppUseContext