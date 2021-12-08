// import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage/HomePage';



function App() {
  return (
    <div className="App">
      <HomePage itemsPerPage={10} />
    </div>

  );
}

export default App;
