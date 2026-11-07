import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import '../styles/portfolio.css';

const portfolioData = [
  {
    id: 1,
    role: "Software Developer",
    project: "Website Royal Florist",
    category: "Project Based Learning",
    period: "Oct 2026 – Sekarang",
    bullets: [
      "Merancang dan membangun program perangkat lunak bagian backend dan API.",
      "Membangun fitur transaksi serta integrasi alur pemesanan produk.",
      "Mengembangkan arsitektur aplikasi menggunakan framework Laravel yang efisien dan terstruktur."
    ],
    tech: ["Laravel", "PHP", "MySQL", "REST API", "Tailwind CSS"]
  },
  {
    id: 2,
    role: "Game Developer",
    project: "Game SAUJANA",
    category: "KMIPN",
    period: "Jul 2026",
    bullets: [
      "Merancang dan mengembangkan aplikasi permainan BETA dan PETA berbasis Android.",
      "Menentukan alur permainan (gameplay), tipe permainan, sound effect, serta visual game.",
      "Mengarahkan dan mengintegrasikan estetika bentuk game menjadi sesuai dengan konsep yang diinginkan.",
      "Membangun source code fungsional untuk logika game menggunakan Bahasa Pemrograman C# dan software Unity."
    ],
    tech: ["Unity", "C#", "Android", "Game Development", "Sound Effect"]
  },
  {
    id: 3,
    role: "Software Developer",
    project: "Aplikasi Seblak Say Café",
    category: "Project Based Learning",
    period: "Apr 2026 – Jun 2026",
    bullets: [
      "Merancang struktur dan relasi basis data menggunakan MySQL.",
      "Merancang dan membangun program perangkat lunak bagian backend dan API menggunakan Framework Laravel.",
      "Membangun antarmuka katalog produk interaktif dan fitur transaksi pada aplikasi mobile menggunakan Framework Flutter."
    ],
    tech: ["Flutter", "Dart", "Laravel", "PHP", "MySQL", "REST API"]
  },
  {
    id: 4,
    role: "Software Developer",
    project: "Website Seblak Say Café",
    category: "Project Based Learning",
    period: "Sep 2025 – Des 2025",
    bullets: [
      "Menganalisis kebutuhan pengguna untuk pengembangan platform Website UMKM Seblak Say Cafe.",
      "Merancang basis data relasional menggunakan MySQL.",
      "Merancang dan membangun program perangkat lunak backend, Landing Page interaktif, fitur transaksi, serta fitur manajemen admin.",
      "Mengembangkan seluruh fungsi sistem secara terintegrasi menggunakan Bahasa Pemrograman PHP."
    ],
    tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Admin Dashboard"]
  }
];

export default function Portfolio() {
  return (
    <div className="portfolio-timeline">
      {portfolioData.map((item) => (
        <div key={item.id} className="timeline-item">
          {/* Timeline Tracker (Line + Node) */}
          <div className="timeline-track">
            <div className="timeline-line" />
            <div className="timeline-node" />
          </div>

          {/* Portfolio Card */}
          <article className="portfolio-card">
            {/* Header: Title, Project/Org, Badge, Date */}
            <header className="card-header">
              <div className="header-left">
                <h3 className="card-title">{item.role}</h3>
                <div className="card-meta">
                  <span className="project-name">
                    <MapPin size={15} />
                    {item.project}
                  </span>
                  <span className="category-badge">{item.category}</span>
                </div>
              </div>

              <div className="card-date">
                <Calendar size={15} />
                <span>{item.period}</span>
              </div>
            </header>

            {/* Bullets List */}
            <ul className="card-bullets">
              {item.bullets.map((bullet, idx) => (
                <li key={idx} className="bullet-item">
                  <span className="bullet-dot" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Tech Tags */}
            <footer className="card-tags">
              {item.tech.map((tag, idx) => (
                <span key={idx} className="tag-item">
                  {tag}
                </span>
              ))}
            </footer>
          </article>
        </div>
      ))}
    </div>
  );
}
