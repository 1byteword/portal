import React from 'react';
import './App.css';
import profileImage from './icons/profile.jpg';  // Update the path as needed

function App() {
  return (
    <div id="root">
      <div className="bg-pan-right"></div>
      <div className="App" style={{
        paddingTop: '80px',
        marginTop: '64px',
        marginBottom: '64px',
        borderRadius: '2px',
        background: 'rgba(255, 255, 255, 0.2)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '25px 25px 50px #bebebe13, -25px -25px 50px #ffffff16'
      }}>
        <header className="App-header">
          <img src={profileImage} alt="Azhan Khan" className="profile-image"/>
          <h1 className="name title">Azhan Khan</h1>
          <p className="body-text" style={{
            fontWeight: 'bold',
            fontFamily: 'monospace'
          }}>DevOps-focused Software Engineer</p>
          <p className="body-text">
            <a href="mailto:1byteword@gmail.com" style={{
              color: 'cyan',
              fontFamily: 'monospace'
            }}>1byteword@gmail.com</a>
          </p>
        </header>
        <div className="content">
          <section className="App-about">
            <h2 className="title">About</h2>
            <p className="body-text" style={{
              fontFamily: 'monospace',
              letterSpacing: '.3'
            }}>I'm Azhan. I revel in crafting dynamic, innovative products from inception to completion. I am committed to creating user-friendly tools that evolve and enhance continually through user feedback. Always shipping. 🚀</p>
          </section>
          <section className="App-education" style={{ marginTop: '50px' }}>
            <h2 className="title">Education</h2>
            <div>
              <h3 className="title">Georgia Institute of Technology</h3>
              <p className="body-text location flex-container">
                <i>Bachelor of Science in Computer Science</i>
              </p>
              <p className="body-text">Took heavy coursework in Intelligence and Modeling/Simulation. Competed in ACM ICPC as a representative of Georgia Tech.</p>
              <p className="skills">Computer Vision • Deep Learning • Systems and Networks • Computational Modeling Algorithms</p>
            </div>
          </section>
          <section className="App-work" style={{ marginTop: '50px' }}>
            <h2 className="title">Work Experience</h2>
            <div>
              <h3 className="title flex-container">DevOps Engineer - Financial Services Client 
                <span className="years">~1yr</span>
              </h3>
              <p className="body-text location"></p>
              <p className="body-text">Azure/AWS, AKS/EKS, CI/CD pipelines setup from scratch. Built and maintain pipelines with integration of Github Actions runners, built and deployed microservices to Azure/AWS Public Cloud and Azure/AWS Gov cloud.</p>
              <p className="skills">Vault • CI/CD • AWS • Kubernetes</p>
            </div>
            <div>
              <h3 className="title flex-container">Software Engineer - Rivian Automotive
                <span className="years">~1yr</span>
              </h3>
              <p className="body-text location"></p>
              <p className="body-text">Built end-to-end Anomaly Detection System using advanced ML techniques. Saved the company a metric fuckton on Grafana Cloud licenses by engineering a workaround.</p>
              <p className="skills">TypeScript • AWS • Python • Terraform</p>
            </div>
            <div style={{ marginBottom: '30px' }}>
              <h3 className="title flex-container">DevOps Engineer – Marriott International
                <span className="years">~1yr</span>
              </h3>
              <p className="body-text location">Remote</p>
              <p className="body-text">Built CI/CD pipelines for application and microservices using Github Actions and deployed applications in AKS and EKS.</p>
              <p className="skills">Vault • CI/CD • AWS • Docker</p>
            </div>
          </section>
          <section className="App-projects" style={{ marginTop: '50px' }}>
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
    </div>
  );
}

export default App;
