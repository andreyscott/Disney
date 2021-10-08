import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/login.js";
import Header from "./components/Header/header.js";

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/about" component={Login} />
          {/* <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} /> */}

        </Switch>
      </Router>
    </div>
  );
}

export default App;
