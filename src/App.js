// import logo from './logo.svg';
import './sass/main.scss';

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
          <div className="feature">feature 1</div>
          <div className="feature">feature 2</div>
          <div className="feature">feature 3</div>
          <div className="feature">feature 4</div>
          <div className="feature">feature 5</div>
          <div className="feature">feature 6</div>
        </section>

        <div className="story__pictures">
          Pictures
        </div>

        <div className="story__content">
          Story Content
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
