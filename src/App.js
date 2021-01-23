import logo from './img/logo-white.png';
import about_image_1 from './img/nat-1-large.jpg';
import about_image_2 from './img/nat-2-large.jpg';
import about_image_3 from './img/nat-3-large.jpg';
// import * as classes from './sass/App.module.scss';
import './sass/App.scss';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo__Box">
          <img src={logo} alt="Logo" className="logo"/>
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
            <h2 className="headingSecondary u_marginBottom__big">Exciting tours for adventurous people</h2>
          </div>
          <div className="gridRow_Col__1_of_2">
            <h3 className="headingTertiary u_marginBottom__small">You're going to fall in love with nature</h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati inventore quam ex esse eveniet eos molestias iusto excepturi assumenda, neque ab! Beatae, dolor.
            </p>
            <h3 className="headingTertiary u_marginBottom__small">Live adventures like you never have before</h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quas consequatur magni, culpa explicabo doloribus nostrum dolorem? Unde harum amet dicta, itaque asperiores.
            </p>
            <a href="/#" className="buttonText">Learn more {String.fromCharCode(0x2192)}</a>
          </div>
          <div className="gridRow_Col__1_of_2">
            <div className="composition">
              <img src={about_image_1} alt="" className="composition_Photo composition_Photo__p1"/>
              <img src={about_image_2} alt="" className="composition_Photo composition_Photo__p2"/>
              <img src={about_image_3} alt="" className="composition_Photo composition_Photo__p3"/>
            </div>
          </div>
        </div>

        <section className="sectionFeatures">
          <i className="icon-basic-world"></i>
        </section>

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
