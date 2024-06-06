import { useState } from "react";
import Paragraph from "./propsChild";


function AppProps(){
    const [theme, setTheme] = useState('blue')

    const toggleTheme = () => {
        setTheme(theme === 'yellow' ? 'blue': 'yellow');
    }

    return (
        <div>
            <button style={{padding: 20}} onClick={toggleTheme}>
                Toggle theme
            </button>
            <Paragraph theme={theme}/>
        </div>
    )
}

export default AppProps