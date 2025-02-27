import React from 'react';
import { Container, Image } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        width: '100%',
        backgroundColor: '#4d7a57', // Matches the header color scheme
        display: 'flex',
        color: '#FFFFFF',
        padding: '20px 0',
        position: 'relative',
        bottom: 0,
        left: 0,
        minHeight: '100px',
        fontFamily: "'SF Pro Display', sans-serif",
        boxShadow: '0px -4px 4px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Container fluid>
        <div
          style={{
            paddingLeft: '77px',
            paddingRight: '10px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          {/* Google Cloud Logo Section */}
          <Image
            src="/google-cloud-logo.png" // Updated logo path for Google Cloud
            alt="Google Cloud Logo"
            style={{ height: '50px', marginRight: '15px' }}
            fluid
          />

          {/* Cloud Technologies Section */}
          <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
            <div>
              <h5>Google Cloud Technologies</h5>
              <ul className="list-unstyled mb-0">
                <li>Compute Engine</li>
                <li>App Engine</li>
                <li>Cloud Storage</li>
                <li>BigQuery</li>
                <li>Kubernetes Engine</li>
              </ul>
            </div>
          </div>

          {/* Powered By Section */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <h5>Powered by</h5>
              <ul className="list-unstyled mb-0">
                <li>React.js</li>
                <li>MaterialUI</li>
                <li>Bootstrap</li>
                <li>Emotion</li>
                <li>AOS</li>
              </ul>
            </div>
          </div>

          {/* Rights Reserved Section */}
          <div style={{ textAlign: 'right' }}>
            <p style={{ margin: 0 }}>
              © {new Date().getFullYear()} Gemhallics. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
