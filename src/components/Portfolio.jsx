
import React, { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import '../styles/portfolio.css';

const portfolioData = [
  {
    id: 1,
    role: "Software Developer",
    project: "Royal Florist Website",
    category: "Project-Based Learning",
    period: "Oct 2026 – Present",
    bullets: [
      "Designed and developed the backend system and REST APIs.",
      "Built transaction features and integrated the product ordering workflow.",
      "Developed an efficient and well-structured application architecture using the Laravel framework."
    ],
    tech: ["Laravel", "PHP", "MySQL", "REST API", "Tailwind CSS"]
  },
  {
    id: 2,
    role: "Game Developer",
    project: "SAUJANA Game",
    category: "KMIPN",
    period: "Jul 2026",
    bullets: [
      "Designed and developed the BETA and PETA Android-based game applications.",
      "Defined the gameplay flow, game types, sound effects, and visual concepts.",
      "Directed and integrated the game's visual elements to align with the intended concept.",
      "Developed functional source code for game logic using C# and Unity."
    ],
    tech: ["Unity", "C#", "Android", "Game Development", "Sound Effects"]
  },
  {
    id: 3,
    role: "Software Developer",
    project: "Seblak Say Café Mobile App",
    category: "Project-Based Learning",
    period: "Apr 2026 – Jun 2026",
    bullets: [
      "Designed the database structure and relationships using MySQL.",
      "Designed and developed the backend system and REST APIs using the Laravel framework.",
      "Built an interactive product catalog and transaction features for the mobile application using Flutter."
    ],
    tech: ["Flutter", "Dart", "Laravel", "PHP", "MySQL", "REST API"]
  },
  {
    id: 4,
    role: "Software Developer",
    project: "Seblak Say Café Website",
    category: "Project-Based Learning",
    period: "Sep 2025 – Dec 2025",
    bullets: [
      "Analyzed user requirements for the development of the Seblak Say Café SME website.",
      "Designed a relational database using MySQL.",
      "Designed and developed the backend system, interactive landing page, transaction features, and admin management dashboard.",
      "Integrated all system functionalities using PHP."
    ],
    tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Admin Dashboard"]
  }
];

export default function Portfolio() {
  const [headingRevealed, setHeadingRevealed] = useState(false);
  const [revealedItems, setRevealedItems] = useState(new Set());
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headingRef.current) {
              setHeadingRevealed(true);
              observer.unobserve(entry.target);
            } else {
              const id = entry.target.getAttribute('data-id');
              if (id) {
                setRevealedItems((prev) => new Set([...prev, id]));
                observer.unobserve(entry.target);
              }
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="portfolio-section">
      {/* Section Heading */}
      <div
        ref={headingRef}
        className={`portfolio-heading ${headingRevealed ? 'is-revealed' : ''}`}
      >
        <h2>Portfolio</h2>
        <p>
          Project experience and software development work that I have built.
        </p>
      </div>

      <div className="portfolio-timeline">
        {portfolioData.map((item, index) => {
          const isRevealed = revealedItems.has(String(item.id));
          return (
            <div
              key={item.id}
              ref={(el) => (cardRefs.current[index] = el)}
              data-id={item.id}
              className={`timeline-item ${isRevealed ? 'is-revealed' : ''}`}
              style={{ '--card-delay': `${index * 120}ms` }}
            >
              {/* Timeline Tracker */}
              <div className="timeline-track">
                <div className="timeline-line" />
                <div className="timeline-node" />
              </div>

              {/* Portfolio Card */}
              <article className="portfolio-card">
                {/* Card Header */}
                <header className="card-header">
                  <div className="header-left">
                    <h3 className="card-title">{item.role}</h3>

                    <div className="card-meta">
                      <span className="project-name">
                        <MapPin size={15} />
                        {item.project}
                      </span>

                      <span className="category-badge">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="card-date">
                    <Calendar size={15} />
                    <span>{item.period}</span>
                  </div>
                </header>

                {/* Project Description */}
                <ul className="card-bullets">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="bullet-item">
                      <span className="bullet-dot" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Technology Tags */}
                <footer className="card-tags">
                  {item.tech.map((tag, idx) => (
                    <span key={idx} className="tag-item">
                      {tag}
                    </span>
                  ))}
                </footer>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}