
import Lanyard from '../styles/lanyard/Lanyard';
const Github = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Instagram = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">
    <h1>Ahmad Okta Ramadhan</h1>

    <h2>Flutter & Web Developer</h2>

    <p className="hero-description">
       Third-semester Informatics Engineering student at the State Polytechnic of Jember.
        Enthusiastic about contributing to industry-scale software projects, learning through professional work practices, and making a positive impact on the team.
    </p>

    <div className="hero-social-container">
        <p>Find Me:</p>

        <div className="hero-social">
            <a href="https://github.com/ahmadokta">
                <Github />
            </a>

            <a href="https://www.linkedin.com/in/ahmadokta">
                <Linkedin />
            </a>

            <a href="https://instagram.com/USERNAME">
                <Instagram />
            </a>
        </div>
    </div>
</div>


      <div className="hero-lanyard">

        <Lanyard
          frontImage="/picture.jpeg"
          backImage="/card-back.png"
          strapImage="/band.png"
          imageFit="cover"
          cardColor="#d3d3d3"
          orientation="portrait"
          finish="matte"
          cornerRadius={0.3}
          size={0.6}
          anchor="center"
          strapLength={0.5}
          strapColor="#d3d3d3"
          strapWidth={0.9}
          metal="silver"
          gravity={1}
          damping={0.5}
          elasticity={0.5}
          breeze={0.5}
          interactive
          intro
        />

      </div>

    </section>
  );
}