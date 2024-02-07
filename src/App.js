
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Menu from './components/menu';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      
    <Navbar/>
    <Home/>
    <About></About>
    <Menu/>
    <Contact/>
    </div>
  );
}

export default App;
