import "./App.css";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function App() {
  const aboutRef = useRef();

  useEffect(() => {
    gsap
      .timeline()
      .from(".tlt", {
        stagger: 0.2,
        y: 100,
        ease: "power1.out",
        opacity: 0,
        duration: 0.2,
      })
      .from(".tlt-des", {
        opacity: 0,
        y: 100,
        ease: "power1.out",
        duration: 0.2,
      })
      .from(".hero-btns", { opacity: 0, duration: 1 })
      .from(".new", {
        scale: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
      })
      .to(
        ".new",
        {
          y: -15,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        },
        ">=1",
      );

    gsap.from(".about-text", {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "power1.out",

      scrollTrigger: {
        trigger: ".about",
        start: "top 70%",
        markers: true,
      },
    });

    gsap.from(".product-img-container", {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "power1.out",

      scrollTrigger: {
        trigger: ".product-img-container",
        start: "top 70%",
        markers: true,
      },
    });
  }, []);
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
          <span className="tlt" style={{ color: "#41a3e0 " }}>
            C
          </span>
          <span className="tlt" style={{ color: "#de3fcc " }}>
            A
          </span>
          <span className="tlt" style={{ color: "#db40a3 " }}>
            N
          </span>
          <span className="tlt" style={{ color: "#41a3e0 " }}>
            D
          </span>
          <span className="tlt" style={{ color: "#de3fcc " }}>
            Y
          </span>
          <br />
          <span className="tlt" style={{ color: "#db40a3 " }}>
            C
          </span>
          <span className="tlt" style={{ color: "#41a3e0 " }}>
            L
          </span>
          <span className="tlt" style={{ color: "#de3fcc " }}>
            O
          </span>
          <span className="tlt" style={{ color: "#db40a3 " }}>
            U
          </span>
          <span className="tlt" style={{ color: "#41a3e0 " }}>
            D
          </span>
          <span className="tlt" style={{ color: "#de3fcc " }}>
            Y
          </span>
          <span> </span>
          <span className="tlt" style={{ color: "#db40a3 " }}>
            C
          </span>
          <span className="tlt" style={{ color: "#41a3e0 " }}>
            U
          </span>
          <span className="tlt" style={{ color: "#de3fcc " }}>
            P
          </span>
        </h1>

        <p className="tlt-des">
          ✨Manisnya awan, Segarnya minuman! Bahagianya kamu!🩷
        </p>

        <div className="hero-btns">
          <button>Explore Flavors</button>
          <button className="outline">Order Now</button>
        </div>

        <div className="new">
          <img src="/new.png" className="new-img"></img>
        </div>

        <div className="stars">
          <img src="/bintang.png" className="star s1" />
          <img src="/bintang.png" className="star s2" />
          <img src="/bintang.png" className="star s3" />
          <img src="/bintang.png" className="star s4" />
          <img src="/bintang.png" className="star s5" />
          <img src="/bintang.png" className="star s6" />
          <img src="/bintang.png" className="star s7" />
          <img src="/bintang.png" className="star s8" />
        </div>
      </section>

      <section ref={aboutRef} id="about" className="about fredoka-font">
        <div className="about-content">
          <div className="about-text">
            <div className="about-text-tlt">
              <h2>Minuman Manis ❤️</h2>
              <h2>Moment Manis!</h2>
            </div>

            <p>
              Perpaduan soda segar, sirup buah pilihan, dan cotton candy lembut
              yang menciptakan pengalaman minum yang unik, seru, dan pastinya{" "}
              <span>Instagramable!!</span>.
            </p>
          </div>
          <div className="product-img-container">
            <img
              src="/triProduct.png"
              alt="product"
              className="triproduct-img"
            ></img>
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
