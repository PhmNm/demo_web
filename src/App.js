import './App.css';
import logo from './logo_khtn_remake.png';
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
      <header className="nav-menu">
        <h1>ENGLISH - VIETNAMESE PARALLEL CORPUS</h1>
        <nav>
          <ul>
            <li><NavLink to="/home" activeClassName="active">HOME</NavLink></li>
            <li><NavLink to="/statistics">STATISTICS</NavLink></li>
            <li><NavLink to="/search">SEARCH</NavLink></li>
            <li><NavLink to="/about">ABOUT </NavLink></li>
          </ul>
        </nav>
      </header>
      <div className="page-container">
        <div className="content-wrap">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/home" component={HomePage} />
            <Route path="/about" component={About} />
            <Route path="/search" component={Search} />
            <Route path="/statistics" component={Statistic} />
          </Switch>
        </div>
        <footer className="group-info">
          <div className="footer-row">
            <div className="footer-col">
              <ul className="list-info">
                <h2>Developers</h2>
                <li>Ngô Nguyễn Nhật Hạ (19120...@student.hcmus.edu.vn)</li>
                <li>Phạm Văn Nam (19120...@student.hcmus.edu.vn)</li>
                <li>Bùi Nguyên Nghĩa (19120...@student.hcmus.edu.vn)</li>
              </ul>
            </div>
            <div className="footer-col">
              <ul className="list-info">
                <h2>Contact</h2>
                <li>Ho Chi Minh University of Science</li>
                <li>227 Nguyen Van Cu, District 5, Ho Chi Minh City, Vietnam.</li>
                <li>(Tel): (84) 286 2884-499 - (84) 287 3089 899</li>

              </ul>
            </div>
            <div className="footer-col">
              <ul className="list-info">
                <h2>Contributer & Supervisor </h2>
                <li>Thầy Đinh Điền</li>
                <li>Thầy Lương An Vinh</li>
                <li>Thầy Nguyễn Hồng Bửu Long</li>
              </ul>
            </div>
            <img src={logo} alt="logo" width="150" height="150" className='logo-col' />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
