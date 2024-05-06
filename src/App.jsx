import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Guides from "./components/Guides";
import Testimonials from "./components/Testimionals";
import Trending from "./components/Trending";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="w-[1600px] bg-white border border-red-600 m-auto">
        <Navbar />
        <Hero />
        <Feature />
        <Guides />
        <Testimonials />
        <Trending />
        <Footer/>
      </div>
    </>
  );
}

export default App;
