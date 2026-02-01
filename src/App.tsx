import Navbar from './components/navbar/page';
import Hero from './components/hero/page';
import Features from './components/features/page';
import Expertise from './components/expertise/page';
import Footer from './components/footer/page';

function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Expertise />
      </main>
      <Footer />
    </div>
  );
}

export default App;
