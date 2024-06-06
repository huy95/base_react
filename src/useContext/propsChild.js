

function Paragraph({ theme }) {
    console.log(theme);
    return (
        <p style={{ backgroundColor: theme }}>
            context provides a way to pass data throught
        </p>
    )
}

export default Paragraph