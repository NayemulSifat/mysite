import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Social from "./Components/Social/Social";


function App() {
  return (
    <>
    <Social />
    <div className="container">
      
      <Navbar />
        <Router>
          <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/skills" component={Skills} />
          </Switch>
        </Router>
    </div> </>
  );
}

export default App;
