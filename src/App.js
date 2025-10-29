import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Services from './components/services/Services';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import About from './components/about/About';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Services />
        <Contact />
      </main>
    </>
  );
}

export default App;
