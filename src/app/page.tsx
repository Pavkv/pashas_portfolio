import Header from "@/app/components/Header";
import Intro from "@/app/components/Intro";
import About from "@/app/components/About";
import Projects from "@/app/components/Projects";
import Expertises from "@/app/components/Expertises";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";


export default function Home() {
  return (
    <div>
        <Header />
        <main>
            <Intro />
            <Expertises />
            <Projects />
            <About />
            <Contact />
        </main>
        <Footer />
    </div>
  );
}
