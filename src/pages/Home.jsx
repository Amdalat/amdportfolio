import About from "../components/about";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Work from "../components/work";

function Home() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Work/>
            <About/>
            <Footer/>
        </>
    );
}

export default Home;