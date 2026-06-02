import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar fredoka-font">
        <div className="logo">CloudSip</div>

        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#flavors">Flavors</a>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </nav>

      <section id="home" className="hero fredoka-font">
        <h1>
          <span style={{ color: "#41a3e0 " }}>C</span>
          <span style={{ color: "#de3fcc " }}>A</span>
          <span style={{ color: "#db40a3 " }}>N</span>
          <span style={{ color: "#41a3e0 " }}>D</span>
          <span style={{ color: "#de3fcc " }}>Y</span>
          <br />
          <span style={{ color: "#db40a3 " }}>C</span>
          <span style={{ color: "#41a3e0 " }}>L</span>
          <span style={{ color: "#de3fcc " }}>O</span>
          <span style={{ color: "#db40a3 " }}>U</span>
          <span style={{ color: "#41a3e0 " }}>D</span>
          <span style={{ color: "#de3fcc " }}>Y</span>
          <span> </span>
          <span style={{ color: "#db40a3 " }}>C</span>
          <span style={{ color: "#41a3e0 " }}>U</span>
          <span style={{ color: "#de3fcc " }}>P</span>
        </h1>

        <p>✨Manisnya awan, Segarnya minuman! Bahagianya kamu!🩷</p>

        <div className="hero-btns">
          <button>Explore Flavors</button>
          <button className="outline">Order Now</button>
        </div>

        <div class="stars">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>

      <section id="about" className="about fredoka-font">
        <div className="about-content">
          <div className="about-text">
            <h2>Minuman Manis ❤️</h2>
            <h2>Moment Manis!</h2>

            <p>
              Perpaduan soda segar, sirup buah pilihan, dan cotton candy lembut
              yang menciptakan pengalaman minum yang unik, seru, dan pastinya
              <span>Instagramanle!!</span>.
            </p>
          </div>
          <div className="product-img-container">
            <img src="/bubble.png" alt="bubble" className="bubble-img"></img>
            <img
              src="/product.png"
              alt="Candy Cloud Cup"
              className="product-img"
            />
          </div>
        </div>
      </section>

      <section id="flavors" className="flavors">
        <h2>Favorite Flavors</h2>

        <div className="flavor-grid">
          <div className="card berry">
            <h3>Berry Blast</h3>
          </div>

          <div className="card ocean">
            <h3>Blue Ocean</h3>
          </div>

          <div className="card lemon">
            <h3>Lemon Frizz</h3>
          </div>

          <div className="card peach">
            <h3>Peach Blush</h3>
          </div>
        </div>
      </section>

      <footer id="footer">
        <h3>Candy Cloud Cup</h3>
        <p>Drink The Sweetest Cloud ☁️</p>
        <p>@candy.cup</p>
        <p>© 2026 Candy Cloud Cup</p>
      </footer>
    </>
  );
}

export default App;
