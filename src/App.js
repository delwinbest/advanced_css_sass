import logo from './img/logo-white.png';
import * as classes from './sass/App.module.scss';

function App() {
  return (
    <div className={classes.App}>
      <header className={classes.header}>
        <div className={classes.logo__Box}>
          <img   src={logo} alt="Logo" className={classes.logo}/>
        </div>
        <div className={classes.header_textBox}> 
          <h1 className={classes.header_textBox_headingPrimary}>
            <span className={classes.header_textBox_headingPrimary__Main}>Outdoors</span>
            <span className={classes.header_textBox_headingPrimary__Sub}>is where life happens</span>
          </h1>
          <a href="/#" className={classes.ButtonWhite}>Discover our tours</a>
        </div>

      </header>
    </div>
  );
}

export default App;
