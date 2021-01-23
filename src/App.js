import logo from './img/logo-white.png';
// import * as classes from './sass/App.module.scss';
import './sass/App.scss';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo__Box">
          <img   src={logo} alt="Logo" className="logo"/>
        </div>
        <div className="header_textBox"> 
          <h1 className="header_textBox_headingPrimary">
            <span className="header_textBox_headingPrimary__Main">Outdoors</span>
            <span className="header_textBox_headingPrimary__Sub">is where life happens</span>
          </h1>
          <a href="/#" className="ButtonWhite">Discover our tours</a>
        </div>
      </header>

      <main>
        <div className="sectionAbout">
          <div className="u_centerText">
            <h2 className="headingSecondary u_marginBotom__8">Exciting tours for adventurous people</h2>
          </div>
          <div className="gridTest_Col__1_of_2">
            Col 1 of 2  
          </div>
          <div className="gridTest_Col__1_of_2">
            Col 1 of 2  
          </div>
        </div>
      </main>

      {/* <section className={gridTest}>
        <div className={gridTest_Row}>
          <div className={gridTest_Col__1_of_2}>
            Col 1 of 2  
          </div>
          <div className={gridTest_Col__1_of_2}>
            Col 1 of 2  
          </div>
        </div>
        <div className={gridTest_Row}>
          <div className={gridTest_Col__1_of_3}>
            Col 1 of 3  
          </div>
          <div className={gridTest_Col__1_of_3}>
            Col 1 of 3  
          </div>
          <div className={gridTest_Col__1_of_3}>
            Col 1 of 3  
          </div>
        </div>
        <div className={gridTest_Row}>
          <div className={gridTest_Col__1_of_3}>
            Col 1 of 3  
          </div>
          <div className={gridTest_Col__2_of_3}>
            Col 2 of 3  
          </div>
        </div>
        <div className={gridTest_Row}>
          <div className={gridTest_Col__1_of_4}>
            Col 1 of 4  
          </div>
          <div className={gridTest_Col__1_of_4}>
            Col 1 of 4  
          </div>
          <div className={gridTest_Col__1_of_4}>
            Col 1 of 4  
          </div>
          <div className={gridTest_Col__1_of_4}>
            Col 1 of 4  
          </div>
        </div>
        <div className={gridTest_Row}>
          <div className={gridTest_Col__1_of_4}>
            Col 1 of 4  
          </div>
          <div className={gridTest_Col__1_of_4}>
            Col 1 of 4  
          </div>
          <div className={gridTest_Col__2_of_4}>
            Col 2 of 4  
          </div>
        </div>
        <div className={gridTest_Row}>
          <div className={gridTest_Col__1_of_4}>
            Col 1 of 4  
          </div>
          <div className={gridTest_Col__3_of_4}>
            Col 3 of 4  
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default App;
