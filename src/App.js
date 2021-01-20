import logo from './img/logo-white.png';
import * as classes from './App.module.scss';

function App() {
  return (
    <div className={classes.App}>
      <header className={classes.header}>
        <div className={classes.logoBox}>
          <img src={logo} alt="Logo" className={classes.logo}/>
        </div>
        <h1 className={classes.headingPrimary}></h1>
      </header>
    </div>
  );
}

export default App;
