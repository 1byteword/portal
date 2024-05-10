import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/path-to-your-image.jpg" alt="Azhan Khan" className="profile-image"/>
        <h1>Azhan Khan</h1>
        <p>DevOps-focused Software Engineer</p>
        <p>az.eth</p>
      </header>
      <section className="App-about">
        <h2>About</h2>
        <p>I'm Azhan. I revel in crafting dynamic, innovative products from inception to completion. I am committed to creating user-friendly tools that evolve and enhance continually through user feedback. Always improving.</p>
      </section>
      <section className="App-work">
        <h2>Work Experience</h2>
        <div>
          <h3>Senior Frontend Engineer – IYK</h3>
          <p>Building the Whole Wide World *</p>
          <p>Remix • Prisma • Tailwind • Shadcn</p>
        </div>
        <div>
          <h3>Full Stack & Technical Lead – Everpress</h3>
          <p>Led a team of 5 engineers to develop our creator tools and e-commerce app. Collaborated closely...</p>
          <p>React • Redux • Symfony • AWS</p>
        </div>
        <div>
          <h3>Front End Engineer – Freelance</h3>
          <p>Worked with a range of large and small agencies...</p>
          <p>React • Redux • Symfony • AWS</p>
        </div>
      </section>
    </div>
  );
}

export default App;
