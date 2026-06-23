"use client";
import { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import ExperienceTimeline from "../components/ExperienceTimeline";

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main>

      {/* HERO */}
    <section className="hero">
  <img src="/profile.jpg" className="profile" alt="Varun" />

  <h1 className="hero-title">
    Hi, I’m <span>Varun</span>
  </h1>

  <p>Aspiring Software Developer | Web • Backend • Android</p>

  <a href="#projects" className="btn">View My Work</a>
</section>


      {/* ABOUT */}
    <section className="section gray" id="about">
  <h2>About Me</h2>

  <div className="project-card">
    <p>
      I am Varun, an aspiring Software Developer passionate about building
      modern web and mobile applications. I enjoy solving real-world
      problems using clean, efficient code.
    </p>
    <p>
      Currently pursuing a Bachelor’s degree in Information Technology,
      I actively work on projects involving Web Development, Android,
      and Backend technologies.
    </p>
  </div>
</section>


 <section className="section" id="education">
  <h2>Education</h2>

  <div className="project-card">
    <h3>Bachelor’s Degree in Information Technology</h3>
    <span>Vignans Foundation For Science Technology and Research | 2022 – 2026</span>
    <p>
      Focused on software development, data structures, databases, and
      real-world application development through academic projects.
    </p>
  </div>
</section>



      {/* SKILLS */}
      <section className="section gray">
        <h2>Skills</h2>
        <div className="skills">
          <span>HTML</span><span>CSS</span><span>JavaScript</span>
          <span>Python</span><span>Java</span><span>C++</span>
          <span>React</span><span>PHP</span>
          <span>MySQL</span><span>MongoDB</span>
          <span>Git</span><span>AWS</span>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <ProjectCard
          title="Login Store Web App"
          description="Secure credential management system handling 50+ records per user, improving access efficiency by 30%."
          tech="PHP, MySQL, HTML, CSS, JavaScript"
        />

        <ProjectCard
          title="Goat Disease Identification"
          description="CNN-based deep learning model achieving 85% accuracy in disease classification."
          tech="Python, Deep Learning, CNN"
        />
      </section>

      {/* EXPERIENCE */}
      <ExperienceTimeline />
      <section className="section" id="achievements">
  <h2>Achievements</h2>

  <ul className="list">
    <li>✔ Built multiple full-stack and mobile applications independently</li>
    <li>✔ Participated in technical projects across Web, Android, and IoT domains</li>
    <li>✔ Strong problem-solving skills with continuous practice in algorithms</li>
    <li>✔ Actively preparing for placement exams and technical interviews</li>
  </ul>
</section>

<section className="section gray" id="value">
  <h2>What I Bring to the Table</h2>

  <div className="stats">
    <div className="stat-card">
      <h3>10+</h3>
      <p>Projects Built</p>
    </div>
    <div className="stat-card">
      <h3>15+</h3>
      <p>Technical Skills</p>
    </div>
    <div className="stat-card">
      <h3>2+</h3>
      <p>Years of Learning</p>
    </div>
  </div>

  <div className="project-card value-card">
    
       <ul>
      <li>💻 Strong foundation in <strong>HTML, CSS, JavaScript, Java</strong> and backend development</li>
      <li>⚙️ Hands-on experience with <strong>Spring Boot, MySQL, REST APIs</strong></li>
      <li>📱 Built Android applications using <strong>Java & XML</strong></li>
      <li>🧠 Strong <strong>problem-solving</strong> mindset with DSA practice</li>
      <li>🚀 Quick learner, adaptable, and eager to grow in real-world environments</li>
      <li>🤝 Good communication skills and team collaboration</li>
    </ul>
  

    <a href="/resume.pdf" className="btn" download>Download Resume</a>
  </div>
</section>



<section className="section gray" id="certifications">
  <h2>Courses & Certifications</h2>

  <div className="grid">
    <div className="badge-card">Web Development (HTML, CSS, JavaScript)</div>
    <div className="badge-card">Java & Spring Boot Fundamentals</div>
    <div className="badge-card">Android Development (Java, XML)</div>
    <div className="badge-card">Database Management Systems (MySQL)</div>
    <div className="badge-card">Cloud & DevOps Basics</div>
    <div className="badge-card">Cyber Security Fundamentals</div>
  </div>
</section>
<section className="section" id="tools">
  <h2>Tools & Technologies</h2>

  <div className="skills">
    <span>HTML</span>
    <span>CSS</span>
    <span>JavaScript</span>
    <span>Java</span>
    <span>Spring Boot</span>
    <span>MySQL</span>
    <span>React</span>
    <span>Android Studio</span>
    <span>Git & GitHub</span>
  </div>
</section>


      {/* CONTACT */}
      <section className="section gray">
        <h2>Contact Me</h2>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message"></textarea>
          <button className="btn">Send Message</button>
        </form>
      </section>

    </main>
  );
}
