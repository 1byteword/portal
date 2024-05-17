import React from 'react';
import './App.css';
import profileImage from './icons/profile.jpg';  // Update the path as needed

function App() {
  return (
    <div className="App">
      <div className="bg-pan-right" />
      <header className="App-header">
        <img src={profileImage} alt="Azhan Khan" className="profile-image"/>
        <h1 className="name title">Azhan Khan</h1>
        <p className="body-text">DevOps-focused Software Engineer</p>
        <p className="body-text"><a href="mailto:1byteword@gmail.com">1byteword@gmail.com</a></p>
      </header>
      <div className="content">
        <section className="App-about">
          <h2 className="title">About</h2>
          <p className="body-text">I'm Azhan. I revel in crafting dynamic, innovative products from inception to completion. I am committed to creating user-friendly tools that evolve and enhance continually through user feedback. Always shipping. 🚀</p>
        </section>
        <section className="App-education">
          <h2 className="title">Education</h2>
          <div>
            <h3 className="title">Georgia Institute of Technology</h3>
            <p className="body-text location">Bachelor of Science in Computer Science</p>
            <p className="body-text">Took heavy coursework in Intelligence and Modeling/Simulation. Competed in ACM ICPC as a representative of Georgia Tech.</p>
            <p className="skills">Computer Vision • Deep Learning • Systems and Networks • Computational Modeling Algorithms</p>
          </div>
        </section>
        <section className="App-work">
          <h2 className="title">Work Experience</h2>
          <div>
            <h3 className="title">DevOps Engineer - Financial Services Client</h3>
            <p className="body-text location">Remote</p>
            <p className="body-text">Azure/AWS, AKS/EKS, CI/CD pipelines setup from scratch. Built and maintain pipelines with integration of Github Actions runners, built and deployed microservices to Azure/AWS Public Cloud and Azure/AWS Gov cloud.</p>
            <p className="skills">Vault • CI/CD • AWS • Kubernetes</p>
          </div>
          <div>
            <h3 className="title">Software Engineer - Rivian Automotive</h3>
            <p className="body-text location">Palo Alto, CA</p>
            <p className="body-text">Built end-to-end Anomaly Detection System using advanced ML techniques. Saved the company a metric fuckton on Grafana Cloud licenses by engineering a workaround.</p>
            <p className="skills">TypeScript • AWS • Python • Terraform</p>
          </div>
          <div>
            <h3 className="title">DevOps Engineer – Marriott International</h3>
            <p className="body-text location">Remote</p>
            <p className="body-text">Built CI/CD pipelines for application and microservices using Github Actions and deployed applications in AKS and EKS.</p>
            <p className="skills">Vault • CI/CD • AWS • Docker</p>
          </div>
        </section>
        <section className="App-projects">
          <h2 className="title">Misc.</h2>
          <div>
            <h3 className="title">PROJECT NITEMRE</h3>
            <p className="body-text">pronounced "nightmare"</p>
            <p className="body-text">Working with the National Security Innovation Network and the MIT AI Accelerator to create AI applications for the US Air Force's Joint All-Domain Operations.</p>
            <p className="body-text">https://www.nsin.mil/  https://aia.mit.edu/</p>
            <p className="skills">PyTorch • Endpoint Governance • TypeScript • Docker • CI/CD</p>
          </div>
        </section>
      </div>
      <footer className="body-text">© 2024 Azhan Khan</footer>
    </div>
  );
}

export default App;
