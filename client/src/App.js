import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route
} from "react-router-dom"

import Home from './components/home'
import About from "./components/about"
import NotFound from "./components/notFound"
import Newsletter from './components/newsletterForm'
import VacationForm from './components/vacation-contest'
import Vacations from './components/vacations';

function App() {
  return (
   <Router> 
    <header className="navbar">
      <h1>Meadow lark & Co.</h1>
    </header>
    <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/newsletter' exact element={<Newsletter/>}/>
        <Route path='/vacation-contest' exact element={<VacationForm/>}/>
        <Route path='/vacations' exact element={<Vacations/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
    </Router>
  );
}

export default App;
