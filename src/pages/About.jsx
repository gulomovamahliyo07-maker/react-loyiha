import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Tugma from "../components/Tugma";

export function About() {
    return (
        <div>
            <Header />

            <Section
                title="Biz haqimizda"
                text="Bu sahifada loyiha yoki kompaniya haqida ma'lumot beriladi."
            />

            <Tugma text="Bog'lanish" onClick={() => alert("Aloqa!")} />

            <Footer />
        </div>
    )
}