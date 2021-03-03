// import logo from './logo.svg';
import './sass/main.scss';
import imgSprite from './img/sprite.svg';
import imgStory1 from './img/story-1.jpeg';
import imgStory2 from './img/story-2.jpeg';

function App() {
  return (
    <div className="container">
        <div className="sidebar">
          Sidebar
        </div>

        <header className="header">
          Header
        </header>

        <div className="realtors">
          Top 3 Realtors
        </div>

        <section className="features">
          <div className="feature">
            <svg className="feature__icon">
              <use xlinkHref={imgSprite + '#icon-global'} />
            </svg>
            <h4 className="heading-4 heading-4--dark">World's best luxury homes</h4>
            <p className="feature__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.
            </p>
          </div>
          <div className="feature">
            <svg className="feature__icon">
              <use xlinkHref={imgSprite + '#icon-trophy'} />
            </svg>
            <h4 className="heading-4 heading-4--dark">Only the best properties</h4>
            <p className="feature__text">
              Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.
            </p>
          </div>
          <div className="feature">
            <svg className="feature__icon">
              <use xlinkHref={imgSprite + '#icon-map-pin'} />
            </svg>
            <h4 className="heading-4 heading-4--dark">All homes in top locations</h4>
            <p className="feature__text">
              Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.
            </p>
          </div>
          <div className="feature">
            <svg className="feature__icon">
              <use xlinkHref={imgSprite + '#icon-key'} />
            </svg>
            <h4 className="heading-4 heading-4--dark">Your home in one week</h4>
            <p className="feature__text">
              Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="feature">
            <svg className="feature__icon">
              <use xlinkHref={imgSprite + '#icon-presentation'} />
            </svg>
            <h4 className="heading-4 heading-4--dark">Top 1% realtors</h4>
            <p className="feature__text">
              Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.
            </p>
          </div>
          <div className="feature">
            <svg className="feature__icon">
              <use xlinkHref={imgSprite + '#icon-lock'} />
            </svg>
            <h4 className="heading-4 heading-4--dark">Secure payments on nexter</h4>
            <p className="feature__text">
              Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.
            </p>
          </div>
        </section>

        <div className="story__pictures">
          <img src={imgStory1} alt="Couple with new house" className="story__img--1"/>
          <img src={imgStory2} alt="New house" className="story__img--2"/>
        </div>

        <div className="story__content">
          <h3 className="heading-3 mb-sm">Happy Customers</h3>
          <h2 className="heading-2 heading-2--dark mb-md">&ldquo;The best decision of our lives&rdquo;</h2>
          <p className="story__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus. Quidem consequatur harum volupta!
          </p>
          <button className="btn">Find your own home</button>
        </div>

        <section className="homes">
          Homes
        </section>

        <section className="gallery">
          Gallery
        </section>

        <footer className="footer">
          Footer
        </footer>
    </div>
  );
}

export default App;
