import React from "react";

function App2() {
  return (
    <div>
      {/* nav */}
      <nav>
        <a href="#hero" class="nav-logo">
          cloudSip
        </a>
        <ul class="nav-links">
          <li>
            <a href="#about">Tentang</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#why">Keunggulan</a>
          </li>
          <li>
            <a href="#testimonials">Review</a>
          </li>
        </ul>
        <a href="#cta" class="nav-cta">
          Order Sekarang 🩷
        </a>
        <button class="nav-hamburger" onclick="toggleMenu()" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* menu */}
      <div class="mobile-menu" id="mobileMenu">
        <a href="#about" onclick="closeMenu()">
          Tentang Kami
        </a>
        <a href="#menu" onclick="closeMenu()">
          Menu
        </a>
        <a href="#why" onclick="closeMenu()">
          Keunggulan
        </a>
        <a href="#testimonials" onclick="closeMenu()">
          Review
        </a>
        <a href="#cta" onclick="closeMenu()">
          Order Sekarang 🩷
        </a>
      </div>

      {/* hero */}

      <section id="hero">
        <div class="hero-blob1"></div>
        <div class="hero-blob2"></div>
        <div class="hero-inner">
          <div class="hero-text">
            <p class="hero-brand">✨ cloudSip</p>
            <h1 class="hero-title">
              Minuman Manis,<span>Moment Manis!</span> 🩷
            </h1>
            <p class="hero-sub">
              Perpaduan soda segar, sirup buah pilihan, dan cotton candy lembut
              yang menciptakan pengalaman minum yang unik, seru, dan pastinya
              instagramable!
            </p>
            <div class="hero-badges">
              <span class="badge pink">🩷 Cotton Candy Drink</span>
              <span class="badge mint">🫧 Soda Segar</span>
              <span class="badge blue">✨ Tanpa Pengawet</span>
            </div>
            <div class="hero-actions">
              <a href="#menu" class="btn-primary">
                Lihat Menu 🧋
              </a>
              <a href="#about" class="btn-outline">
                Tentang Kami
              </a>
            </div>
          </div>
          <div class="hero-visual">
            <div class="drink-card">
              <span class="drink-pill">NEW! 🩷</span>
              <span class="drink-emoji">🧋</span>
              <div class="drink-name">CloudSip</div>
              <div class="drink-tagline">Cotton Candy Soda</div>
            </div>
          </div>
        </div>
      </section>

      {/* about */}

      <section id="about">
        <div class="container">
          <div class="about-grid">
            <div class="about-image-wrap reveal">
              <div class="about-card">
                <div class="about-icon">🫧☁️🩷</div>
                <div class="about-quote">
                  "Setiap tegukan adalah petualangan rasa yang nggak
                  terlupakan!"
                </div>
                <div class="about-quote-sub">— CloudSip Team</div>
              </div>
              <div class="about-stat top">
                <div class="stat-num">500+</div>
                <div class="stat-label">Pelanggan Puas</div>
              </div>
              <div class="about-stat bot">
                <div class="stat-num">10+</div>
                <div class="stat-label">Varian Rasa</div>
              </div>
            </div>
            <div class="reveal">
              <span class="section-label">Tentang Kami</span>
              <h2 class="section-title">
                Kami Hadir untuk <span>Momen Manismu</span>
              </h2>
              <p class="section-desc" style="margin-bottom:28px;">
                CloudSip lahir dari cinta terhadap minuman yang nggak biasa.
                Kami percaya setiap momen berhak ditemani minuman yang seenak
                kelihatannya.
              </p>
              <ul class="about-list">
                <li>
                  <div class="about-list-icon">🍓</div>
                  <div>
                    <strong>Bahan Berkualitas</strong>Kami pilih bahan-bahan
                    segar setiap harinya tanpa bahan pengawet tambahan.
                  </div>
                </li>
                <li>
                  <div class="about-list-icon">☁️</div>
                  <div>
                    <strong>Cotton Candy Signature</strong>Topping cotton candy
                    lembut yang jadi ciri khas unik setiap minuman CloudSip.
                  </div>
                </li>
                <li>
                  <div class="about-list-icon">📸</div>
                  <div>
                    <strong>Instagramable Banget</strong>Cantik di foto, lebih
                    enak di lidah — dijamin feed-mu makin kece!
                  </div>
                </li>
                <li>
                  <div class="about-list-icon">💖</div>
                  <div>
                    <strong>Dibuat dengan Cinta</strong>Setiap pesanan kami buat
                    dengan penuh perhatian dan ketulusan.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* cta */}

      <section id="cta">
        <div class="container" style="text-align:center;">
          <span class="cta-emoji">🧋</span>
          <h2 class="cta-title">Siap Rasakan Momen Manismu?</h2>
          <p class="cta-sub">
            Pesan sekarang dan dapatkan minuman segar yang instagramable
            langsung di tanganmu!
          </p>
          <a
            href="https://wa.me/6281234567890?text=Halo%20CloudSip!%20Saya%20mau%20order%20🩷"
            class="cta-btn"
          >
            Order via WhatsApp 🩷
          </a>
        </div>
      </section>

      {/* why */}

      <section id="why">
        <div class="container">
          <div class="section-header reveal" style="text-align:center;">
            <span class="section-label">Kenapa CloudSip?</span>
            <h2 class="section-title">
              Yang Bikin Kami <span>Beda</span>
            </h2>
          </div>
          <div class="why-grid">
            <div class="why-card reveal">
              <div class="why-icon">🌿</div>
              <div class="why-title">100% Bahan Segar</div>
              <div class="why-text">
                Tanpa pengawet, tanpa pewarna buatan. Cuma bahan-bahan pilihan
                terbaik setiap harinya.
              </div>
            </div>
            <div class="why-card reveal">
              <div class="why-icon">☁️</div>
              <div class="why-title">Cotton Candy Original</div>
              <div class="why-text">
                Topping cotton candy asli yang dibuat fresh — bukan tiruan,
                bukan import!
              </div>
            </div>
            <div class="why-card reveal">
              <div class="why-icon">📸</div>
              <div class="why-title">Super Instagramable</div>
              <div class="why-text">
                Didesain bukan cuma enak di mulut, tapi juga indah di kamera.
                Perfect untuk konten!
              </div>
            </div>
            <div class="why-card reveal">
              <div class="why-icon">💸</div>
              <div class="why-title">Harga Terjangkau</div>
              <div class="why-text">
                Kualitas premium dengan harga yang ramah di kantong. Momen manis
                untuk semua!
              </div>
            </div>
            <div class="why-card reveal">
              <div class="why-icon">⚡</div>
              <div class="why-title">Proses Cepat</div>
              <div class="why-text">
                Dibuat dalam hitungan menit — segar langsung di tangan, nggak
                bikin nunggu lama.
              </div>
            </div>
            <div class="why-card reveal">
              <div class="why-icon">💖</div>
              <div class="why-title">Penuh Cinta</div>
              <div class="why-text">
                Setiap pesanan kami buat dengan sepenuh hati. Karena kamu layak
                dapat yang terbaik!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* foot */}

      <footer>
        <div class="footer-logo">cloudSip</div>
        <div class="footer-tagline">Minuman Manis, Moment Manis! 🩷</div>
        <div class="footer-socials">
          <div class="social-btn">📸</div>
          <div class="social-btn">🐦</div>
          <div class="social-btn">💬</div>
        </div>
        <div class="footer-links">
          <a href="#hero">Home</a>
          <a href="#about">Tentang</a>
          <a href="#menu">Menu</a>
          <a href="#why">Keunggulan</a>
          <a href="#testimonials">Review</a>
        </div>
        <div class="footer-copy">
          © 2026 CloudSip. All rights reserved. Dibuat dengan 💖
        </div>
      </footer>
    </div>
  );
}

export default App2;
