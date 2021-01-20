import logo from './img/logo-white.png';
import * as classes from './App.module.scss';

function App() {
  return (
    <div className={classes.App}>
      <header className={classes.header}>
        <div className={classes.logoBox}>
          <img src={logo} alt="Logo" className={classes.logo}/>
        </div>
        <div className={classes.textBox}> 
          <h1 className={classes.headingPrimary}>
            <span className={classes.headingPrimaryMain}>Outdoors</span>
            <span className={classes.headingPrimarySub}>is where life happens</span>
          </h1>
        </div>

      </header>
    </div>
  );
}

export default App;
