import "./App.css";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function App() {
  const aboutRef = useRef();
  const sectionRef = useRef();

  useEffect(() => {
    gsap
      .timeline()
      .to(".star", {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      })
      .from(
        ".tlt",
        {
          stagger: 0.2,
          y: 100,
          ease: "power1.out",
          opacity: 0,
          duration: 0.2,
        },
        "<",
      )
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
      },
    });

    gsap.from(".card", {
      stagger: 0.2,
      opacity: 0,
      scrollTrigger: {
        trigger: ".card",
        start: "20% bottom",
      },
    });

    gsap.from(".berry-img", {
      opacity: 0,
      x: -100,
      ease: "power1.out",
      duration: 1,
      scrollTrigger: {
        trigger: ".berry-img",
        start: "top 70%",
      },
    });

    gsap.from(".ocean-img", {
      opacity: 0,
      x: 100,
      ease: "power1.out",
      duration: 1,
      scrollTrigger: {
        trigger: ".ocean-img",
        start: "top 70%",
      },
    });

    gsap.from(".lemon-img", {
      opacity: 0,
      x: -100,
      ease: "power1.out",
      duration: 1,
      scrollTrigger: {
        trigger: ".lemon-img",
        start: "top 70%",
      },
    });

    gsap.from(".peach-img", {
      opacity: 0,
      x: 100,
      ease: "power1.out",
      duration: 1,
      scrollTrigger: {
        trigger: ".peach-img",
        start: "top 70%",
      },
    });

    gsap.from(".segment-grid", {
      stagger: 0.2,
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".segment-grid",
        start: "top 60%",
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
            <a href="#segment">Segment</a>
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
              <h2>
                Minuman Manis ❤️ <br />
                Moment Manis!
              </h2>
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

      <section
        ref={sectionRef}
        className="flavors-section fredoka-font"
        id="flavors"
      >
        <div className="flavors-header">
          <h2>🍭 Pilihan Rasa CloudSip</h2>
          <p>
            Temukan rasa favoritmu dan nikmati sensasi cotton candy yang meleleh
            di setiap tegukan.
          </p>
        </div>

        <div className="flavors-timeline">
          <div className="flavor-showcase">
            <div className="flavor-image berry-img">
              <img src="/berryBlast.png" alt="Berry Blast" />
            </div>

            <div className="timeline-dot"></div>

            <div className="flavor-info">
              <span>01</span>
              <h3>Berry Blast</h3>
              <p>
                Ledakan rasa berry yang manis dan segar untuk menemani setiap
                momen spesialmu.
              </p>
            </div>
          </div>

          <div className="flavor-showcase reverse">
            <div className="flavor-info">
              <span>02</span>
              <h3>Blue Ocean</h3>
              <p>
                Sensasi segar yang terinspirasi dari birunya lautan dan langit
                yang menenangkan.
              </p>
            </div>

            <div className="timeline-dot"></div>

            <div className="flavor-image ocean-img">
              <img src="/blueOcean.png" alt="Blue Ocean" />
            </div>
          </div>

          <div className="flavor-showcase">
            <div className="flavor-image lemon-img">
              <img src="/lemonFrizz.png" alt="Lemon Frizz" />
            </div>

            <div className="timeline-dot"></div>

            <div className="flavor-info">
              <span>03</span>
              <h3>Lemon Frizz</h3>
              <p>
                Perpaduan rasa lemon yang cerah dengan sentuhan cotton candy
                yang unik dan menyegarkan.
              </p>
            </div>
          </div>

          <div className="flavor-showcase reverse">
            <div className="flavor-info">
              <span>04</span>
              <h3>Peach Plush</h3>
              <p>
                Rasa peach yang lembut dan manis seperti awan yang meleleh di
                mulut.
              </p>
            </div>

            <div className="timeline-dot"></div>

            <div className="flavor-image peach-img">
              <img src="/peachBlush.png" alt="Peach Plush" />
            </div>
          </div>
        </div>
      </section>

      <section id="segment" className="segment-section fredoka-font">
        <div className="segment-header">
          <h2>Made for Sweet Moments</h2>
          <p>
            Baik saat belajar, berkumpul bersama teman, atau mengabadikan momen
            spesial, CloudSip siap menambahkan sentuhan manis di setiap
            kesempatan.
          </p>
        </div>

        <div className="segment-grid">
          <div className="segment-card">
            <h3>📚 Teman Belajar</h3>
            <p>
              Menemani sesi belajar dan waktu istirahat dengan rasa yang
              menyenangkan.
            </p>
          </div>

          <div className="segment-card">
            <h3>🎉 Nongkrong Bareng</h3>
            <p>
              Membuat momen bersama teman jadi lebih seru, berwarna, dan
              berkesan.
            </p>
          </div>

          <div className="segment-card">
            <h3>📸 Pecinta Konten</h3>
            <p>
              Tampilan estetik dan unik yang siap mempercantik foto maupun
              video.
            </p>
          </div>

          <div className="segment-card">
            <h3>🍭 Pencinta Manis</h3>
            <p>
              Pilihan sempurna untuk kamu yang menyukai camilan dan minuman
              manis.
            </p>
          </div>
        </div>
      </section>

      <footer id="footer" className="footer fredoka-font">
        <div className="footer-content">
          <h2>☁️ Yuk Coba CloudSip Sekarang!</h2>

          <p>
            Rasakan sensasi manis cotton candy yang meleleh di setiap tegukan.
            Cocok untuk menemani belajar, nongkrong, maupun momen spesialmu.
          </p>

          <p className="footer-tagline">Satu tegukan, sejuta momen manis. 💖</p>

          <div className="social-links">
            <a href="#">
              <span style={{ color: "#ffd5ea" }}>Insta</span> @Candy.C
            </a>
            <a href="#">
              <span style={{ color: "#ffd5ea" }}>Tiktok</span> @Cup.candy
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 CloudSip. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
