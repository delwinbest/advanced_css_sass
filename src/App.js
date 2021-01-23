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
        <section className="sectionAbout">
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
        </section>

        <section className="sectionFeatures">
          <div className="gridRow">
            <div className="gridRow_Col__1_of_4">
              <div className="featureBox">
                <i className="featureBox__Icon icon-basic-world"></i>
                <h3 className="headingTertiary u_marginBottom__small">Expore the world</h3>
                <p className="featureBox__Text">
                  Lorem ipsum dolor sit amet adipisicing elit. Culpa, quaerat ea ipsa nulla. Fuga, adipisci dolor. Totam facere in quam atque.
                </p>
              </div>
            </div>
            <div className="gridRow_Col__1_of_4">
              <div className="featureBox">
                <i className="featureBox__Icon icon-basic-map"></i>
                <h3 className="headingTertiary u_marginBottom__small">Meet Nature</h3>
                <p className="featureBox__Text">
                  Lorem ipsum dolor sit amet adipisicing elit. Culpa, quaerat ea ipsa nulla. Fuga, adipisci dolor. Totam facere in quam atque.
                </p>
              </div>
            </div>
            <div className="gridRow_Col__1_of_4">
              <div className="featureBox">
                <i className="featureBox__Icon icon-basic-compass"></i>
                <h3 className="headingTertiary u_marginBottom__small">Find you way</h3>
                <p className="featureBox__Text">
                  Lorem ipsum dolor sit amet adipisicing elit. Culpa, quaerat ea ipsa nulla. Fuga, adipisci dolor. Totam facere in quam atque.
                </p>
              </div>
            </div>
            <div className="gridRow_Col__1_of_4">
              <div className="featureBox">
                <i className="featureBox__Icon icon-basic-heart"></i>
                <h3 className="headingTertiary u_marginBottom__small">Live a Healthier Life</h3>
                <p className="featureBox__Text">
                  Lorem ipsum dolor sit amet adipisicing elit. Culpa, quaerat ea ipsa nulla. Fuga, adipisci dolor. Totam facere in quam atque.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="sectionTours">
          <div className="u_centerText">
            <h2 className="headingSecondary u_marginBottom__big">Most popular tours</h2>
          </div>
          <div className="gridRow">
          <div className="gridRow_Col__1_of_3">
            <div className="card">
              <div className="card_Side__Front">
                <div className="cardPicture__1">
                </div>
                <h4 className="cardHeading">
                  <span className="cardHeading_Span__1">The Sea Explorer</span>
                </h4>
                <div className="cardDetails">
                  Details
                </div>
              </div>
              <div className="card_Side__Back__1">
                BACK
              </div>
            </div>
          </div>
          <div className="gridRow_Col__1_of_3">
            <div className="card">
            <div className="card_Side__Front">
                <div className="cardPicture__2">

                </div>
                <h4 className="cardHeading">
                  <span className="cardHeading_Span__2">The Forest Hiker</span>
                </h4>
                <div className="cardDetails">
                  Details
                </div>
              </div>
              <div className="card_Side__Back__2">
                BACK
              </div>
            </div>
          </div>
          <div className="gridRow_Col__1_of_3">
            <div className="card">
            <div className="card_Side__Front">
                <div className="cardPicture__3">

                </div>
                <h4 className="cardHeading">
                  <span className="cardHeading_Span__3">The Snow Adventurer</span>
                </h4>
                <div className="cardDetails">
                  Details
                </div>
              </div>
              <div className="card_Side__Back__3">
                BACK
              </div>
            </div> 
          </div>
          </div>
        </section>
      </main>

      {/* <section className={gridTest}>
        <div className={gridRow}>
          <div className={gridRow_Col__1_of_2}>
            Col 1 of 2  
          </div>
          <div className={gridRow_Col__1_of_2}>
            Col 1 of 2  
          </div>
        </div>
        <div className={gridRow}>
          <div className={gridRow_Col__1_of_3}>
            Col 1 of 3  
          </div>
          <div className={gridRow_Col__1_of_3}>
            Col 1 of 3  
          </div>
          <div className={gridRow_Col__1_of_3}>
            Col 1 of 3  
          </div>
        </div>
        <div className={gridRow}>
          <div className={gridRow_Col__1_of_3}>
            Col 1 of 3  
          </div>
          <div className={gridRow_Col__2_of_3}>
            Col 2 of 3  
          </div>
        </div>
        <div className={gridRow}>
          <div className={gridRow_Col__1_of_4}>
            Col 1 of 4  
          </div>
          <div className={gridRow_Col__1_of_4}>
            Col 1 of 4  
          </div>
          <div className={gridRow_Col__1_of_4}>
            Col 1 of 4  
          </div>
          <div className={gridRow_Col__1_of_4}>
            Col 1 of 4  
          </div>
        </div>
        <div className={gridRow}>
          <div className={gridRow_Col__1_of_4}>
            Col 1 of 4  
          </div>
          <div className={gridRow_Col__1_of_4}>
            Col 1 of 4  
          </div>
          <div className={gridRow_Col__2_of_4}>
            Col 2 of 4  
          </div>
        </div>
        <div className={gridRow}>
          <div className={gridRow_Col__1_of_4}>
            Col 1 of 4  
          </div>
          <div className={gridRow_Col__3_of_4}>
            Col 3 of 4  
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default App;
