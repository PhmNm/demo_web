import './App.css';
import logo from './clc_logo.png';
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
                <h2>Contributers & Supervisors </h2>
                <li>Thầy Đinh Điền</li>
                <li>Thầy Lương An Vinh</li>
                <li>Thầy Nguyễn Hồng Bửu Long</li>
              </ul>
            </div>
            <div className="footer-col">
              <ul className="list-info">
                <h2>Contact</h2>
                <li>TRUNG TÂM NGÔN NGỮ HỌC TÍNH TOÁN</li>
                <li>Phòng C44, tòa nhà C,
                  227 Nguyễn Văn Cừ, Quận 5,
                  Tp Hồ Chí Minh, Việt Nam.</li>
                <li>Website: www.clc.hcmus.edu.vn</li>
                <li>Email: clc@hcmus.edu.vn</li>
                <li>Điện thoại: (028) 66 849 856</li>
              </ul>
            </div>
            <img src={logo} alt="logo" width="190" height="100" className='logo-col' />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
