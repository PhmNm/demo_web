import './App.css';
import HomePage from './components/HomePage/HomePage';
import About from './components/About/About';
import Search from './components/Search/Search';
import Statistic from './components/Statistics/Statistics';
import {
  Switch,
  Route,
  NavLink
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div class="nav-menu">
        <h1>ENGLISH - VIETNAMESE PARALLEL CORPUS</h1>
        <nav>
          <ul>
            <li><NavLink to="/home" activeClassName="active">HOME</NavLink></li>
            <li><NavLink to="/statistics">STATISTICS</NavLink></li>
            <li><NavLink to="/search">SEARCH</NavLink></li>
            <li><NavLink to="/about">ABOUT </NavLink></li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/home" component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/search" component={Search} />
        <Route path="/statistics" component={Statistic} />
      </Switch>
    </div>
  );
}

export default App;
