
import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Tugma from "../components/Tugma";

export function Home() {
    return (
        <div>
            <Header />

            <Section
                title="Bosh sahifa"
                text="Bu Home sahifa"
            />

            <Tugma text="Bos" onClick={() => alert("Bosildi!")} />

            <Footer />
        </div>
    )
}