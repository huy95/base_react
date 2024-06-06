import { useContext } from "react";
import { ThemeContext } from "./useContext";

function ParagraphUseContext() {
    const theme = useContext(ThemeContext);
    console.log(theme);

    return (
        <p style={{ backgroundColor: theme }}>
            context provides a way to pass data throught
        </p>
    )
}

export default ParagraphUseContext