function Tugma({ text, onClick }) {
    return (
        <button onClick={onClick} style={{ padding: "10px 20px", cursor: "pointer" }}>
            {text}
        </button>
    );
}

export default Tugma;