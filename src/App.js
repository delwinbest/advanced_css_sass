import logo from './img/logo-white.png';
import * as classes from './sass/App.module.scss';

function App() {
  return (
    <div className={classes.App}>
      <header className={classes.header}>
        <div className={classes.logo__Box}>
          <img   src={logo} alt="Logo" className={classes.logo}/>
        </div>
        <div className={classes.header__textBox}> 
          <h1 className={classes.headingPrimary}>
            <span className={classes.headingPrimary__Main}>Outdoors</span>
            <span className={classes.headingPrimary__Sub}>is where life happens</span>
          </h1>
          <a href="/#" className={classes.ButtonWhite}>Discover our tours</a>
        </div>

      </header>
    </div>
  );
}

export default App;
