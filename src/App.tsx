import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div id="home" className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
