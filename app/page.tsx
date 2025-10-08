import About from "./components/About";
import Blog from "./components/Blog";
import Certifications from "./components/Certifications";
import ContactUs2 from "./components/ContactUs";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import FluidCursor from "./components/fluid-cursor";
import Hero from "./components/Hero";
import Languages from "./components/Languages";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { ScrollProgress } from "./components/scroll-progress";
import ThreeScene from "./components/ThreeScene";

export default function Home() {
	return (
		<main className="bg-slate-950 min-h-screen">
			{/*<FluidCursor />*/}
			<ScrollProgress />
			<ThreeScene />
			<Hero />
			<About />
			<Experience />
			<Skills />
			<Education />
			<Certifications />
			<Projects />
			<Blog />
			<Languages />
			<ContactUs2 />
			<Footer />
		</main>
	);
}
