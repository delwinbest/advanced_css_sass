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

      <main>
        <div className={classes.sectionAbout}>
          <div className={classes.u_centerText}>
            <h2 className={classes.headingSecondary}>Exciting tours for adventurous people</h2>
          </div>
        </div>
      </main>

      {/* <section className={classes.gridTest}>
        <div className={classes.gridTest_Row}>
          <div className={classes.gridTest_Col__1_of_2}>
            Col 1 of 2  
          </div>
          <div className={classes.gridTest_Col__1_of_2}>
            Col 1 of 2  
          </div>
        </div>
        <div className={classes.gridTest_Row}>
          <div className={classes.gridTest_Col__1_of_3}>
            Col 1 of 3  
          </div>
          <div className={classes.gridTest_Col__1_of_3}>
            Col 1 of 3  
          </div>
          <div className={classes.gridTest_Col__1_of_3}>
            Col 1 of 3  
          </div>
        </div>
        <div className={classes.gridTest_Row}>
          <div className={classes.gridTest_Col__1_of_3}>
            Col 1 of 3  
          </div>
          <div className={classes.gridTest_Col__2_of_3}>
            Col 2 of 3  
          </div>
        </div>
        <div className={classes.gridTest_Row}>
          <div className={classes.gridTest_Col__1_of_4}>
            Col 1 of 4  
          </div>
          <div className={classes.gridTest_Col__1_of_4}>
            Col 1 of 4  
          </div>
          <div className={classes.gridTest_Col__1_of_4}>
            Col 1 of 4  
          </div>
          <div className={classes.gridTest_Col__1_of_4}>
            Col 1 of 4  
          </div>
        </div>
        <div className={classes.gridTest_Row}>
          <div className={classes.gridTest_Col__1_of_4}>
            Col 1 of 4  
          </div>
          <div className={classes.gridTest_Col__1_of_4}>
            Col 1 of 4  
          </div>
          <div className={classes.gridTest_Col__2_of_4}>
            Col 2 of 4  
          </div>
        </div>
        <div className={classes.gridTest_Row}>
          <div className={classes.gridTest_Col__1_of_4}>
            Col 1 of 4  
          </div>
          <div className={classes.gridTest_Col__3_of_4}>
            Col 3 of 4  
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default App;
