import Navbar from './components/navbar/page';
import Hero from './components/hero/page';
import Features from './components/features/page';
import Expertise from './components/expertise/page';
import Footer from './components/footer/page';
import Services from './components/services/page';
import Portfolio from './components/portfolio/page';
import Process from './components/process/page';
import About from './components/about/page';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <Expertise />
              </>
            }
          />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/process" element={<Process />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
