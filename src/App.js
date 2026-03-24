import React from 'react';
import './App.css';
import profilePhoto from './assets/photo-2.jpeg';
function App() {
  return (
    <div className="portfolio-root">
      {/* NAVBAR */}
      <nav className="container navbar">
        <div className="logo">Snekha<span>.V</span></div>
        <div className="nav-wrapper">
          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#internship">Internship</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
          </div>
          <div className="contact-dock">
            {/* Email */}
            <a href="mailto:snekhaofficial1011@gmail.com" title="Email" className="dock-icon email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>

            {/* EXACT WhatsApp Logo */}
            <a href="https://wa.me/919840420523" target="_blank" rel="noreferrer" title="WhatsApp" className="dock-icon whatsapp">
              <svg viewBox="0 0 448 512" fill="currentColor">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l114.1-29.9c32.7 17.8 69.4 27.2 106.7 27.2h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.4-11.3 2.5-2.4 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.6-9.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
            </a>

            {/* Call */}
            <a href="tel:+919840420523" title="Call" className="dock-icon call">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn" className="dock-icon linkedin">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero container">
        <div className="hero-content">
          <div className="badge">Software Developer</div>
          <h1>Crafting UI with <br /><span>Precision & Purpose</span></h1>
          <p>
            With 1+ years of experience, I build responsive and performance-optimized
            web applications. My focus is on writing clean, maintainable code
            that drives user engagement.
          </p>
          <div className="hero-stats">
            <div className="stat-card"><h3>80%</h3><p>Efficiency Gain</p></div>
            <div className="stat-card"><h3>30%</h3><p>Engagement Boost</p></div>
            <div className="stat-card"><h3>40%</h3><p>Faster Updates</p></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="glass-card">
            {/* <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile" /> */}
            <img src={profilePhoto} alt="Snekha V Profile" />
            <div className="floating-tag">Frontend | UI developer</div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="container section">
        <h2 className="section-title">Professional Projects</h2>
        <div className="project-grid">
          <div className="p-card">
            <div className="p-icon">📊</div>
            <h3>School Mark Management</h3>
            <p>Designed interactive dashboards and visual reports for tracking student performance.</p>
            <div className="p-tags"><span>React</span><span>JS</span><span>CSS3</span></div>
          </div>
          <div className="p-card">
            <div className="p-icon">🛡️</div>
            <h3>Admin Support System</h3>
            <p>Developed UI modules for role management and workflow control with form validation.</p>
            <div className="p-tags"><span>Modular UI</span><span>Validation</span></div>
          </div>
          <div className="p-card">
            <div className="p-icon">📈</div>
            <h3>Student Registration</h3>
            <p>Engineered real-time dashboards that boosted enquiry conversions and engagement.</p>
            <div className="p-tags"><span>Real-time</span><span>UX Flow</span></div>
          </div>
        </div>
      </section>

      {/* INTERNSHIP */}
      <section id="internship" className="container section">
        <h2 className="section-title">Internship Experience</h2>

        <div className="project-grid">
          <div className="p-card">
            <div className="p-icon">⚡</div>
            <h3>EV Smart Charging & Reservation System</h3>

            <p>
              Developed during MCA, this project focuses on smart EV charging
              with real-time slot booking and dashboard insights.
            </p>

            <ul style={{ marginTop: "12px", paddingLeft: "18px", color: "#94a3b8", fontSize: "14px" }}>
              <li>Designed UI using Figma</li>
              <li>Built responsive frontend using React, HTML, CSS</li>
              <li>Implemented backend with Java & MySQL</li>
              <li>Developed features like slot booking and dashboard view</li>
            </ul>

            <div className="p-tags">
              <span>React</span>
              <span>Figma</span>
              <span>Java</span>
              <span>MySQL</span>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="container section">
        <h2 className="section-title">Technical Skills</h2>

        <div className="project-grid">

          {/* Frontend */}
          <div className="p-card">
            <div className="p-icon">💻</div>
            <h3>Frontend</h3>
            <p>Core technologies used to build responsive UI.</p>

            <div className="p-tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Tailwind</span>
            </div>
          </div>

          {/* Tools */}
          <div className="p-card">
            <div className="p-icon">🛠️</div>
            <h3>Tools</h3>
            <p>Development and debugging tools.</p>

            <div className="p-tags">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>Postman</span>
              <span>Figma</span>
            </div>
          </div>

          {/* Concepts */}
          <div className="p-card">
            <div className="p-icon">⚙️</div>
            <h3>Concepts</h3>
            <p>Development practices and architecture.</p>

            <div className="p-tags">
              <span>REST API</span>
              <span>Responsive UI</span>
              <span>Performance</span>
              <span>Debugging</span>
              <span>Agile</span>
            </div>
          </div>

        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="container section">
        <h2 className="section-title">Education</h2>
        <div className="edu-list">

          {/* MCA - Priority 1 */}
          <div className="edu-item">
            <div className="edu-info">
              <h4>Master of Computer Applications (MCA)</h4>
              <p>DG Vaishnav College | University of Madras</p>
              <span className="edu-date">2021 — 2023</span>
            </div>
            <div className="cgpa-badge">
              <span className="label">CGPA</span>
              <span className="value">8.4</span>
            </div>
          </div>

          {/* B.Sc CS - Priority 2 */}
          <div className="edu-item">
            <div className="edu-info">
              <h4>Bachelor of Computer Science (B.Sc CS)</h4>
              <p>Alpha Arts and Science College | University of Madras</p>
              <span className="edu-date">2018 — 2021</span>
            </div>
            <div className="cgpa-badge">
              <span className="label">CGPA</span>
              <span className="value">8.2</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default App;