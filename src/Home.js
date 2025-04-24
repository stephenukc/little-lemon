import { Navbar } from "./components";
import { About, Footer, Hero, Highlights, Testimonials } from "./containers";
import "./App.css";

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
