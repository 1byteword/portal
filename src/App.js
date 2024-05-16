import React from 'react';
import './App.css';
import profileImage from './icons/profile.jpg';  // Update the path as needed
import backgroundImage from './images/background.jpg'; 

function App() {
  return (
    <div className="App">
      <div 
        className="background-image"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
        }}
      />
      <header className="App-header">
        <img src={profileImage} alt="Azhan Khan" className="profile-image"/>
        <h1 className="name">Azhan Khan</h1>
        <p>DevOps-focused Software Engineer</p>
        <p>1byteword@gmail.com</p>
      </header>
      <div className="content">
        <section className="App-about">
          <h2>About</h2>
          <p>I'm Azhan. I revel in crafting dynamic, innovative products from inception to completion. I am committed to creating user-friendly tools that evolve and enhance continually through user feedback. Always shipping. 🚀</p>
        </section>
        <section className="App-education">
          <h2>Education</h2>
              <div>
                <h3>Georgia Institute of Technology</h3>
                <p>Bachelor of Science in Computer Science</p>
                <p>Took heavy coursework in Intelligence and Modeling/Simulation. Competed in ACM ICPC as a representative of Georgia Tech.</p>
                <p>Computer Vision • Deep Learning • Systems and Networks • Computational Modeling Algorithms</p>
              </div>
        </section>
        <section className="App-work">
          
          <h2>Work Experience</h2>
          <div>
            <h3>DevOps Engineer - Financial Services Client</h3>
            <p>Remote</p>
            <p>Azure/AWS, AKS/EKS, CI/CD pipelines setup from scratch. Built and maintain pipelines with integration of Github Actions runners, built and deployed microservices to Azure/AWS Public Cloud and Azure/AWS Gov Cloud.</p>
            <p>Vault • CI/CD • AWS • Kubernetes</p>
          </div>
          <div>
            <h3>Software Engineer - Rivian Automotive</h3>
            <p>Palo Alto, CA</p>
            <p>Built end-to-end Anomaly Detection System using advanced ML techniques. Saved the company a metric fuckton on Grafana Cloud licenses by engineering a workaround.</p>
            <p>TypeScript • AWS • Python • Terraform</p>
          </div>
          <div>
            <h3>DevOps Engineer – Marriott International</h3>
            <p>Remote</p>
            <p>Built CI/CD pipelines for application and microservices using Github Actions and deployed applications in AKS and EKS.</p>
            <p>Vault • CI/CD • AWS • Docker</p>
          </div>
        </section>
        <section className="App-projects">
          <h2>Misc.</h2>
          <div>
            <h3>PROJECT NITEMRE</h3>
            <p>pronounced "nightmare"</p>
            <p>Working with the National Security Innovation Network and the MIT AI Accelerator to create AI applications for the US Air Force's Joint All-Domain Operations.</p>
            <p>https://www.nsin.mil/  https://aia.mit.edu/</p>
            
            <p>PyTorch • Endpoint Governance • TypeScript • Docker • CI/CD</p>
          </div>
        </section>
      </div>
      <footer>© 2024 Azhan Khan</footer>
    </div>
  );
}

export default App;
