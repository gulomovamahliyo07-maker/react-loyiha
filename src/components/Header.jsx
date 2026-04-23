import { Link } from "react-router-dom";

function Header() {
    return (
        <header style={{ background: "#333", color: "#fff", padding: "15px" }}>
            <h1>MySite</h1>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
            </nav>
        </header>
    );
}

export default Header;              