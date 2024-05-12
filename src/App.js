import React from 'react';
import './App.css';
import profileImage from './icons/Eagle_50x50.ico';  // Update the path as needed

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profileImage} alt="Azhan Khan" className="profile-image"/>
        <h1 className="name">Azhan Khan</h1>
        <p>DevOps-focused Software Engineer</p>
        <p>1byteword@gmail.com</p>
      </header>
      <div className="content">
        <section className="App-about">
          <h2>About</h2>
          <p>I'm Azhan. I revel in crafting dynamic, innovative products from inception to completion. I am committed to creating user-friendly tools that evolve and enhance continually through user feedback. 🚀</p>
        </section>
        <section className="App-education">
          <h2>Education</h2>
              <div>
                <h3>Georgia Institute of Technology</h3>
                <p>Bachelor of Science - Computer Science</p>
                <p>Took heavy coursework in Intelligence and Modeling/Simulation. Competed in ACM ICPC as a representative of Georgia Tech.</p>
                <p>Computer Vision • Deep Learning • Systems and Networks • Computational Modeling Algorithms</p>
              </div>
        </section>
        <section className="App-work">
          
          <h2>Work Experience</h2>
          <div>
            <h3>Senior Frontend Engineer – IYK</h3>
            <p>Building the Whole Wide World *</p>
            <p>Remix • Prisma • Tailwind • Shadcn</p>
          </div>
          <div>
            <h3>Software Engineer - Rivian Automotive</h3>
            <p>Palo Alto, CA</p>
            <p>TypeScript • AWS • Python • Terraform</p>
            <p>Built end-to-end Anomaly Detection System using advanced ML techniques and cracked Grafana.</p>
          </div>
          <div>
            <h3>Front End Engineer – Freelance</h3>
            <p>Worked with a range of large and small agencies...</p>
            <p>React • Redux • Symfony • AWS</p>
          </div>
        </section>
        <section className="App-projects">
          <h2>Projects</h2>
          <div>
            <h3>Eagle Eye</h3>
            <p>Generative art project around the offline era. Only collectible in person.</p>
            <p>Solidity • P5.js • fully onchain</p>
          </div>
        </section>
      </div>
      <footer>© 2024 Azhan Khan</footer>
    </div>
  );
}

export default App;
