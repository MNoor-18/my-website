import './App.css';
import { About, Contact, Home, Projects, Services } from './pages';
import { Footer, TheHeader } from './components';

function App() {

  document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById('navbar');
    window.addEventListener("scroll", () => {
        if(window.scrollY > 100){
            navbar.classList.remove("trasparent");
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
            navbar.classList.add("trasparent");
        }
    });
  });
  
  return (
    <div className='overflow-hidden website-bg'>
      <TheHeader/>
      <main>
        <Home />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
export default App;