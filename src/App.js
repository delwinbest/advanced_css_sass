import logo from './img/logo-white.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo-box">
          <img src={logo} alt="Logo" className="logo"/>
        </div>
      </header>
    </div>
  );
}

export default App;
