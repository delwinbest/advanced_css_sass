import React, { Component } from 'react';
import logo from './img/logo-white.png';
import logo_green_1x from './img/logo-green-1x.png';
import logo_green_2x from './img/logo-green-2x.png';
import about_image_1 from './img/nat-1-large.jpg';
import about_image_2 from './img/nat-2-large.jpg';
import about_image_3 from './img/nat-3-large.jpg';
import person_image_1 from './img/nat-8.jpg';
import person_image_2 from './img/nat-9.jpg';
import popup_image_1 from './img/nat-8.jpg';
import popup_image_2 from './img/nat-9.jpg';
import background_video_mp4 from './img/video.mp4';
import background_video_webm from './img/video.webm';
// import * as classes from './sass/App.module.scss';
import './sass/App.scss';

class App extends Component {
  state = {
    menuActive: false
  }

  toggleMenu = () => {
    this.setState( {
      ...this.state,
      menuActive: !this.state.menuActive 
    });
  }
  
  render () {
    return (
      <div className="body">

        <div className="navigation">
          <input type="checkbox" className="navigation_Checkbox" id="navi-toggle" checked={this.state.menuActive} readOnly/>
          <label htmlFor="navi-toggle" className="navigation_Button" onClick={this.toggleMenu}><span className="navigation__icon">&nbsp;</span></label>
          <div className="navigation__background">&nbsp;</div>

          <nav className="navigation__nav">
            <ul className="navigation_List">
              <li className="navigation_List_Item"><a href="#section-about" className="navigation__link" onClick={this.toggleMenu}><span>01</span>About Natours</a></li>
              <li className="navigation_List_Item"><a href="#section-features" className="navigation__link" onClick={this.toggleMenu}><span>02</span>Your benefits</a></li>
              <li className="navigation_List_Item"><a href="#section-tours" className="navigation__link" onClick={this.toggleMenu}><span>03</span>Popular tours</a></li>
              <li className="navigation_List_Item"><a href="#section-stories" className="navigation__link" onClick={this.toggleMenu}><span>04</span>Stories</a></li>
              <li className="navigation_List_Item"><a href="#section-booking" className="navigation__link" onClick={this.toggleMenu}><span>05</span>Book now</a></li>
            </ul>
          </nav>
        </div>

        <header className="header">
          <div className="logo__Box">
            <img src={logo} alt="Logo" className="logo"/>
          </div>
          <div className="header_textBox"> 
            <h1 className="header_textBox_headingPrimary">
              <span className="header_textBox_headingPrimary__Main">Outdoors</span>
              <span className="header_textBox_headingPrimary__Sub">is where life happens</span>
            </h1>
            <a href="#section-tours" className="ButtonWhite">Discover our tours</a>
          </div>
        </header>

        <main>
          <section className="sectionAbout" id="section-about">
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
          <section className="sectionFeatures" id="section-features">
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
          <section className="sectionTours" id="section-tours">
            <div className="u_centerText">
              <h2 className="headingSecondary u_marginBottom__big">Most popular tours</h2>
            </div>
            <div className="gridRow">
            <div className="gridRow_Col__1_of_3">
              <div className="card">
                <div className="card_Side card_Side__Front">
                  <div className="cardPicture cardPicture__1">
                  </div>
                  <h4 className="cardHeading">
                    <span className="cardHeading_Span cardHeading_Span__1">The Sea Explorer</span>
                  </h4>
                  <div className="cardDetails">
                    <ul>
                      <li>3 day tour</li>
                      <li>Up to 30 people</li>
                      <li>2 tour guides</li>
                      <li>Sleep in cozy hotels</li>
                      <li>Difficulty: Easy</li>
                    </ul>
                  </div>
                </div>
                <div className="card_Side card_Side__Back card_Side__Back__1">
                  <div className="card_CTA">
                    <div className="card_PriceBox">
                      <p className="card_Pricebox__priceOnly">Only</p>
                      <p className="card_PriceBox__priceValue">$297</p>
                    </div>
                    <a href="#popup" className="ButtonWhite">Book Now!</a>
                  </div>  
                </div>
              </div>
            </div>
            <div className="gridRow_Col__1_of_3">
              <div className="card">
              <div className="card_Side card_Side__Front">
                  <div className="cardPicture cardPicture__2">

                  </div>
                  <h4 className="cardHeading">
                    <span className="cardHeading_Span cardHeading_Span__2">The Forest Hiker</span>
                  </h4>
                  <div className="cardDetails">
                    <ul>
                    <li>7 day tours</li>
                    <li>Up to 40 people</li>
                    <li>6 tour guides</li>
                    <li>Sleep in provided tents</li>
                    <li>Difficulty: Medium</li>
                    </ul>
                  </div>
                </div>
                <div className="card_Side card_Side__Back card_Side__Back__2">
                  <div className="card_CTA">
                    <div className="card_PriceBox">
                      <p className="card_Pricebox__priceOnly">Only</p>
                      <p className="card_PriceBox__priceValue">$497</p>
                    </div>
                    <a href="#popup" className="ButtonWhite">Book Now!</a>
                  </div>  
                </div>
              </div>
            </div>
            <div className="gridRow_Col__1_of_3">
              <div className="card">
              <div className="card_Side card_Side__Front">
                  <div className="cardPicture cardPicture__3">

                  </div>
                  <h4 className="cardHeading">
                    <span className="cardHeading_Span cardHeading_Span__3">The Snow Adventurer</span>
                  </h4>
                  <div className="cardDetails">
                    <ul>
                    <li>5 day tours</li>
                    <li>Up to 15 people</li>
                    <li>3 tour guides</li>
                    <li>Sleep in provided tents</li>
                    <li>Difficulty: Hard</li>
                    </ul>
                  </div>
                </div>
                <div className="card_Side card_Side__Back card_Side__Back__3">
                  <div className="card_CTA">
                    <div className="card_PriceBox">
                      <p className="card_Pricebox__priceOnly">Only</p>
                      <p className="card_PriceBox__priceValue">$895</p>
                    </div>
                    <a href="#popup" className="ButtonWhite">Book Now!</a>
                  </div>  
                </div>
              </div> 
            </div>
            </div>
              <div className="u_centerText u_marginTop__huge">
                <a href="/#" className="ButtonGreen">Discover all tours</a>
              </div>
          </section>
          <section className="sectionStories" id="section-stories">
            <div className="bg_Video">
              <video className="bg_Content" autoPlay muted loop preload>
                <source src={background_video_mp4} type="video/mp4" />
                <source src={background_video_webm} type="video/webm" />
                Your browser is not supported!
              </video>
            </div>
            <div className="u_centerText u_marginBottom__big">
              <h2 className="headingSecondary">We make people genuinely happy</h2>
            </div>

            <div className="gridRow">
              <div className="story ">
                <figure className="story_Shape">
                  <img className="story_Image" src={person_image_1} alt="Person on a tour"/>
                  <figcaption className="story_Caption">Mary Smith</figcaption>
                </figure>
                <div className="story_Text">
                  <h3 className="headingTertiary u_marginBottom__small">I had the best week ever with my family</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit, sit amet consectetur adipisicing elit, samet consectetur adipisicing elit, sit amet consectetur adipisicing. Consequuntur soluta unde minima qui delectus eos deserunt. . In eos exercitationem consequatur.
                  </p>
                </div>
              </div>
            </div>
            <div className="gridRow">
              <div className="story ">
                <figure className="story_Shape">
                  <img className="story_Image" src={person_image_2} alt="Person on a tour"/>
                  <figcaption className="story_Caption">Jack Wilson</figcaption>
                </figure>
                <div className="story_Text">
                  <h3 className="headingTertiary u_marginBottom__small">WOW! My life is completely different now</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit, sit amet consectetur adipisicing elit, samet consectetur adipisicing elit, sit amet consectetur adipisicing. Consequuntur soluta unde minima qui delectus eos deserunt. . In eos exercitationem consequatur.
                  </p>
                </div>
              </div>
            </div>

            <div className="u_centerText u_marginTop_huge">
              <a href="/#" className="buttonText">Read all stories {String.fromCharCode(0x2192)}</a>
            </div>
          </section>
          <section className="sectionBooking" id="section-booking">
            <div className="gridRow">
              <div className="sectionBooking_Container">
                <div className="sectionBooking_Form">
                  <form action="/#" className="form">
                    <h2 className="headingSecondary u_marginBottom__medium">Start booking now</h2>
                    <div className="form_Group">
                      <input type="text" className="form_Input" placeholder="Full name" id="name" required/>
                      <label htmlFor="name" className="form_Input__Label">Full name</label>
                    </div>
                    <div className="form_Group">
                      <input type="email" className="form_Input" placeholder="Email address" id="email" required/>
                      <label htmlFor="email" className="form_Input__Label">Email address</label>
                    </div>
                    <div className="form_Group u_marginBottom__medium ">
                      <div className="form_RadioGroup">
                        <input type="radio" className="form_RadioInput" id="small" name="groupsize"/>
                        <label htmlFor="small" className="form_RadioInput__Label">
                          <span className="form__RadioButton"></span>
                          Small tour group</label>
                      </div>
                      <div className="form_RadioGroup">
                        <input type="radio" className="form_RadioInput" id="large" name="groupsize"/>
                        <label htmlFor="large" className="form_RadioInput__Label">
                        <span className="form__RadioButton"></span>
                          Large tour group</label>
                      </div>
                    </div>
                    <div className="form_Group">
                      <button className="ButtonGreen">Next Step {String.fromCharCode(0x2192)}</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="footer_LogoBox">
            <img srcSet={`${logo_green_2x} 2x, ${logo_green_1x} 1x`} alt="Full Logo" className="footer_Logo"/>
          </div>
          <div className="gridRow">
            <div className="gridRow_Col__1_of_2">
              <div className="footer_Navigation">
                <ul className="footer__List">
                  <li className="footer__ListItem"><a href="/#" className="footer__Link">Company</a></li>
                  <li className="footer__ListItem"><a href="/#" className="footer__Link">Contact us</a></li>
                  <li className="footer__ListItem"><a href="/#" className="footer__Link">Careers</a></li>
                  <li className="footer__ListItem"><a href="/#" className="footer__Link">Privacy</a></li>
                  <li className="footer__ListItem"><a href="/#" className="footer__Link">Terms</a></li>
                </ul>
              </div>
            </div>
            <div className="gridRow_Col__1_of_2">
              <p className="footer__Copyright">
                Built by <a href="/#" className="footer__Link">Delwin Best</a> for his personal studies. 
                Copyright &copy; by Delwin Best. You are 100% allowed to use this webpage for both personal and commercial use, but NOT to claim it as your own design.
                Design by Jonas Schedtmann.
              </p>
            </div>
          </div>
        </footer>
        
        
        <div className="popup" id="popup">   
          <div className="popup_Content">
            <div className="popup__left">
              <img src={popup_image_1} alt="Tour" className="popup__img"/>
              <img src={popup_image_2} alt="Tour" className="popup__img"/>
            </div>
            <div className="popup__right">
              <a href="#section-tours" className="popup__close">&times;</a>
              <h2 className="headingSecondary u_marginBottom__small">Start booking now</h2>
              <h3 className="headingTertiary u_marginBottom__small">Important - Please read these terms before booking</h3>
              <p className="popup__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Sed sed risus pretium quam. Aliquam sem et tortor consequat id. Volutpat odio facilisis mauris sit
                  amet massa vitae. Mi bibendum neque egestas congue. Placerat orci nulla pellentesque dignissim enim
                  sit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Malesuada pellentesque elit eget
                  gravida cum sociis natoque penatibus et. Proin fermentum leo vel orci porta non pulvinar neque laoreet.
                  Gravida neque convallis a cras semper. Molestie at elementum eu facilisis sed odio morbi quis. Faucibus
                  vitae aliquet nec ullamcorper sit amet risus nullam eget. Nam libero justo laoreet sit. Amet massa
                  vitae tortor condimentum lacinia quis vel eros donec. Sit amet facilisis magna etiam. Imperdiet sed
                  euismod nisi porta.
              </p>
              <a href="#section-booking" className="ButtonGreen">Book now</a>
            </div>
          </div>
        </div>
        
        
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
  };
}

export default App;
