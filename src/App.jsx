import './App.css';
import { About, Contact, Home, Projects, Services } from './pages';
import { Footer, TheHeader } from './components';

function App() {
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