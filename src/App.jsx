import './App.css'
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter';
import ServiceCard from './components/ServiceCard'

function App() {
    const navbarLinks= [
        { path: "/", label: "Home" },
        { path: "#about", label: "About" },
        { path: "#services", label: "Services" },
        { path: "#contact", label: "Contact" }
    ];
  return (
    <div className='min-h-screen'>
      <Navbar links={navbarLinks}/>
      <Hero/>
      <About/>
      <ServiceCard/>
      <Newsletter/>
      <Footer/>
    </div>
  ); 
}

export default App
