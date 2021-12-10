// import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import About from './components/About/About';
import Search from './components/Search/Search';
// import { Link } from 'react-router-dom';
// import { Redirect, Route, Switch } from 'react-router';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div>
        <header className="header">
          <h2>English-VietNamese Parallel Corpus</h2>
        </header>
        <div className="nav-menu">
          <Link to="/about">ABOUT </Link>
          <Link to='/search'>SEARCH</Link>
          {/* <a href="statistic.html">STATISTICS</a> */}
          <Link to="/">HOME </Link>
        </div>
      </div>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={About} />
        <Route path="/search" component={Search} />
      </Switch>
    </div>
  );
}

export default App;
