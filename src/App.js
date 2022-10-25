
import Landing from './components/Landing';
import NavB from './components/NavB';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Service from './components/Service';
import {SwitchProvider} from './context/SwitchContext'
import './App.css';




function App() {
 
  
  return (
     <SwitchProvider>
     
      <NavB/>
     
      <Landing/>
      <Service/>
     
      <About/>
      <Project/>
      <Contact/>
      </SwitchProvider>
   
  );
}

export default App;
