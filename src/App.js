

import NavB from './components/NavB';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Service from './components/Service';
import {SwitchProvider} from './context/SwitchContext'
import './App.css';
import Banner from './components/Banner';
import ThreeShow from './components/ThreeShow';





function App() {
  
  const dispositivo = navigator.userAgent || navigator.vendor || window.opera;
  
  return (
     <SwitchProvider>
     
      <NavB/>
       
      <Banner/>
      <Service/>
      { !/android/i.test(dispositivo) &&  <ThreeShow/>}
      
      <About/>
      <Project/>
      <Contact/>
 
      </SwitchProvider>
   
  );
}

export default App;
