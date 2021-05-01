import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs'
import Projects from './components/Projects/Projects'
import CoverLetter from './components/CoverLetter/CoverLetter'
import Contact from './components/Contact/Contact'
import ProjectDetails from './components/Projects/ProjectDetails/ProjectDetails'
function App() {
  return (
    <div className="App">
     <Router>
        <Switch>
          <Route path='/home'>
            <Home/>
          </Route> 
          <Route path='/blogs'>
            <Blogs/>
          </Route> 
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/projectsDetails/:id'>
            <ProjectDetails />
           </Route> 
          <Route path='/coverLetter'>
            <CoverLetter /> 
          </Route> 
          <Route path='/contact'>
            <Contact /> 
          </Route> 
          <Route exact path='/'>
            <Home /> 
          </Route> 
         </Switch> 
      </Router> 
    </div>
  );
}

export default App;
