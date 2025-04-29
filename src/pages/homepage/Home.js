import { Footer, Navbar } from "../../components";
import About from "./About/About";
import Hero from "./Hero/Hero";
import Highlights from "./Highlights/Highlights";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
};

export default Home;
