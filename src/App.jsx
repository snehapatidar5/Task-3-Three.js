import './App.css'
import {BrowserRouter} from 'react-router-dom';
import About from './components/About.jsx'
import Exp from './components/Exp.jsx'
import House from './components/canvas/House.jsx'

function App() {

  return (
    <BrowserRouter>
        <House/>
        <About/>
        <Exp/>
    </BrowserRouter>
  ) 
}

export default App
