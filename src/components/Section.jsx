function Section({ title, text }) {
    return (
        <section style={{ padding: "20px" }}>
            <h2>{title}</h2>
            <p>{text}</p>
        </section>
    );
}

export default Section;