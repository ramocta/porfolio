import React, { useState, useEffect, useRef } from 'react';
import '../styles/about.css';
import { FileText } from 'lucide-react';

export default function About() {
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.setProperty('--x', `${x}px`);
    e.currentTarget.style.setProperty('--y', `${y}px`);
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.setProperty('--x', '-200px');
    e.currentTarget.style.setProperty('--y', '-200px');
  };

  return (
    <section ref={sectionRef} className={`about-section ${revealed ? 'is-revealed' : ''}`}>

      <div className="about-container">

        {/* Bagian Foto */}
        <div
          className="about-image-wrapper"
          onPointerMove={handleMouseMove}
          onPointerLeave={handleMouseLeave}
        >

          <img
            src="/about-main.png"
            alt="Foto profil Ahmad Okta Ramadhan"
            className="about-image-main"
          />

          <img
            src="/about-hover.png"
            alt=""
            aria-hidden="true"
            className="about-image-hover"
          />

          <span className="about-image-hint">
            Move your cursor
          </span>

        </div>

        {/* Bagian Informasi */}
        <div className="about-content">

          <span className="about-label">
            ABOUT ME
          </span>

          <h2>
            Get to Know Me
          </h2>

          <p>
            Hello! I'm Ahmad Okta Ramadhan, an Informatics Engineering
            student at the State Polytechnic of Jember.
            I'm passionate about Flutter development and web
            technologies, and I enjoy building applications
            that provide meaningful solutions.
          </p>

            <a
            href="/cv-ahmad-okta.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="about-cv-button"
            >
  <FileText size={18} />
  <span>View My CV</span>
</a>

        </div>

      </div>

    </section>
  );
}