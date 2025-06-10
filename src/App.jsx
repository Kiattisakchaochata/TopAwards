import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './index.css';

import logo from './assets/topawardslogo.png';

// Banner
import banner1 from './assets/banner1.jpg';
import banner2 from './assets/banner2.jpg';
import banner3 from './assets/banner3.jpg';
import banner4 from './assets/banner4.jpg';
import rassapoomNew from './assets/1_RASSAPOOMCLINIC_0.jpg';
import smithpriveNew from './assets/2_SMITHPRIVEEASTHETIQUECLINIC_0.jpg';
import michikoNew from './assets/3_MICHIKOCLINIC_0.jpg';


// Card Images
import img1 from './assets/1_RASSAPOOMCLINIC_0.jpg';
import img2 from './assets/2_SMITHPRIVEEASTHETIQUECLINIC_0.jpg';
import img3 from './assets/3_MICHIKOCLINIC_0.jpg';
import img4 from './assets/4_DOCTORJOBCLINIC_0.jpg';
import img5 from './assets/5_THEKLASSCLINIC.jpg';
import img6 from './assets/6_NAPASSAREECLINIC.jpg';
import img7 from './assets/DOCTORGRACECLINIC_0.jpg';
import img8 from './assets/FIORACLINIC.jpg';
import img9 from './assets/VDREAMCLINIC.jpg';
import img10 from './assets/topawardslogo.png';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <header className="site-header">
        <div className="container header-container">
          <div className="logo">
            <img src={logo} alt="Top Awards" className="logo-img" />
            <span>รวม10รีวิว</span>
          </div>
          <nav>
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
            <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
              {[
                { label: 'ความงาม', id: 'beauty' },
                { label: 'ที่เที่ยว', id: 'travel' },
                { label: 'ช่องทาง', id: 'footer' },
              ].map(({ label, id }) => (
                <li key={id}>
                  <a href={`#${id}`} onClick={(e) => handleNavClick(e, id)}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-container">
          <Swiper
  modules={[Autoplay, Navigation, Pagination]}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  loop
>
  {[banner1, banner2, banner3, banner4, rassapoomNew, smithpriveNew, michikoNew, img10].map((src, idx) => (
    <SwiperSlide key={idx}>
      <img src={src} alt={`Banner ${idx + 1}`} className="hero-image" />
    </SwiperSlide>
  ))}
</Swiper>
        </div>
      </section>

      <section id="beauty" className="section beauty-section">
        <h2>รวม 10 บิวตี้และความงาม</h2>
        <p>รีวิวสินค้าความงาม สปา และบริการต่างๆ</p>
        <div className="beauty-cards">
          {[
            { name: 'RASSAPOOM CLINIC', image: img1 },
            { name: 'Smith Prive\' Aesthetique', image: img2 },
            { name: 'MICHIKO CLINIC', image: img3 },
            { name: 'Doctorjob Clinic', image: img4 },
            { name: 'The Klass Clinic', image: img5 },
            { name: 'NAPASSAREE CLINIC', image: img6 },
            { name: 'DOCTORGRACE CLINIC', image: img7 },
            { name: 'FIORA CLINIC', image: img8 },
            { name: 'V-DREAM CLINIC', image: img9 },
            { name: 'TOPAWARD LOGO', image: img10 },
          ].map((clinic, idx) => (
            <div className="beauty-card" key={idx}>
              <img src={clinic.image} alt={clinic.name} />
              <h3>{clinic.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="travel" className="section">
        <h2>รวม 10 ที่เที่ยว</h2>
        <p>รีวิวที่เที่ยวในประเทศและต่างประเทศ</p>
      </section>

      <footer id="footer" className="site-footer">
        <p>⭐ รวม10รีวิว © 2025 All rights reserved.</p>
        <div className="footer-logo"><img src={logo} alt="Top Awards" /></div>
        <div className="social-icons">
          {[
            { href: '#', icon: 'fab fa-facebook-f' },
            { href: '#', icon: 'fab fa-instagram' },
            { href: '#', icon: 'fab fa-tiktok' },
            { href: '#', icon: 'fab fa-youtube' },
            { href: '#', icon: 'fab fa-line' },
          ].map((social, idx) => (
            <a href={social.href} key={idx} target="_blank" rel="noopener noreferrer">
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}