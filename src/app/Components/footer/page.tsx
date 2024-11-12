"use client"
import React from 'react';
import Image from 'next/image';
import Logo from '../../img/foto.png';
import EmailIcon from '../../img/gmail.png';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container w-full">
      {/* Bagian Kanan - Logo */}
      <div className="footer-right">
        <Image src={Logo} alt="Logo" className="logo" width={150} height={150} />
      </div>
      
      {/* Bagian Tengah - Tautan */}
      <div className="footer-center">
        <ul className="footer-links">
          <li><a href="/Components">Tentang Kami</a></li>
          <li><a href="/Components/pengaduan">Layanan Pengaduan</a></li>
          <li><a href="Components/produk">Produk</a></li>
          <li><a href="/berita">Berita</a></li>
          <li><a href="/Components/faq">FAQ</a></li>
        </ul>
      </div>

      {/* Bagian Kiri - Alamat dan Kontak */}
      <div className="footer-left">
        <a
          href="https://maps.app.goo.gl/BpjSqw86cHFvsDpg9"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-text"
        >
          <p>Jl. Jember No.04 Kabat, Kabupaten Banyuwangi, Jawa Timur</p>
        </a>
        <div className="contact-icons">
          {/* Email */}
          <a href="mailto:admin@emvitrust.id" className="contact-item hover-text">
            <Image src={EmailIcon} alt="Email" width={20} height={20} />
            <span>admin@gps.id</span>
          </a>
        </div>
      </div>

      {/* Styling */}
      <style jsx>{`
        .footer-container {
          display: flex;
          justify-content: space-between;
          padding: 20px;
          background-color: #2d4e73;
          color: #fff;
        }
        .footer-left, .footer-center, .footer-right {
          display: flex;
          flex-direction: column;
        }
        .footer-left {
          max-width: 300px;
        }
        .footer-center .footer-links {
          list-style: none;
          padding: 0;
        }
        .footer-center .footer-links li {
          position: relative;
          padding-left: 15px;
          margin-bottom: 10px;
        }
        .footer-center .footer-links li::before {
          content: "•";
          position: absolute;
          left: 0;
          color: #fff;
          font-size: 1.2em;
        }
        .footer-center .footer-links li a {
          text-decoration: none;
          color: #fff;
          transition: color 0.3s;
        }
        .footer-center .footer-links li a:hover {
          color: #16a34a; /* Green-600 */
        }
        .footer-right .logo {
          width: 150px;
        }
        .contact-icons {
          display: flex;
          flex-direction: column;
          margin-top: 10px;
        }
        .contact-item {
          display: flex;
          align-items: center;
          color: #fff;
          text-decoration: none;
          margin-top: 5px;
          transition: color 0.3s;
        }
        .contact-item span {
          margin-left: 5px;
        }
        .hover-text:hover {
          color: #16a34a; /* Green-600 */
        }
      `}</style>
    </footer>
  );
};

export default Footer;
