import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import "@/app/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const page = () => {
  return (
    <>
      <Header />
      <Container className="py-5">
        <div className="mb-4 text-center">
          <h1 className="fw-bold fs-2">Privacy Policy</h1>
          <p className="lead text-muted">Your privacy is important to us. Please read our privacy policy carefully.</p>
        </div>
        
        <hr />
        
        <div className="privacy-policy-section">
          <h3 className="h4 mb-3">Introduction</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus dui et felis fermentum, sit amet luctus ante volutpat. Vivamus auctor ac odio non facilisis. Curabitur scelerisque dui eget nulla elementum, ac vestibulum erat aliquet. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>

          <h3 className="h4 mb-3">Data Collection</h3>
          <p>
            Maecenas sollicitudin nisi sit amet diam suscipit, et pretium sapien mollis. Donec ut tortor vitae ante convallis efficitur. Ut pretium diam et felis tempor, eget rutrum augue efficitur. Integer vitae orci ac eros posuere pretium. Fusce volutpat leo id purus faucibus, a dictum risus elementum.
          </p>

          <h3 className="h4 mb-3">Use of Data</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus dui et felis fermentum, sit amet luctus ante volutpat. Vivamus auctor ac odio non facilisis. Curabitur scelerisque dui eget nulla elementum, ac vestibulum erat aliquet. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>

          <h3 className="h4 mb-3">Data Sharing</h3>
          <p>
            Maecenas sollicitudin nisi sit amet diam suscipit, et pretium sapien mollis. Donec ut tortor vitae ante convallis efficitur. Ut pretium diam et felis tempor, eget rutrum augue efficitur. Integer vitae orci ac eros posuere pretium. Fusce volutpat leo id purus faucibus, a dictum risus elementum. Vivamus laoreet, magna et dictum volutpat, ante purus venenatis metus, id sodales metus dui vel elit.
          </p>

          <h3 className="h4 mb-3">Data Security</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus dui et felis fermentum, sit amet luctus ante volutpat. Vivamus auctor ac odio non facilisis. Curabitur scelerisque dui eget nulla elementum, ac vestibulum erat aliquet. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>

          <h3 className="h4 mb-3">Cookies</h3>
          <p>
            Maecenas sollicitudin nisi sit amet diam suscipit, et pretium sapien mollis. Donec ut tortor vitae ante convallis efficitur. Ut pretium diam et felis tempor, eget rutrum augue efficitur. Integer vitae orci ac eros posuere pretium. Fusce volutpat leo id purus faucibus, a dictum risus elementum.
          </p>

          <h3 className="h4 mb-3">Your Rights</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus dui et felis fermentum, sit amet luctus ante volutpat. Vivamus auctor ac odio non facilisis. Curabitur scelerisque dui eget nulla elementum, ac vestibulum erat aliquet. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>

          <h3 className="h4 mb-3">Changes to This Privacy Policy</h3>
          <p>
            Maecenas sollicitudin nisi sit amet diam suscipit, et pretium sapien mollis. Donec ut tortor vitae ante convallis efficitur. Ut pretium diam et felis tempor, eget rutrum augue efficitur. Integer vitae orci ac eros posuere pretium. Fusce volutpat leo id purus faucibus, a dictum risus elementum. Vivamus laoreet, magna et dictum volutpat, ante purus venenatis metus, id sodales metus dui vel elit.
          </p>

          <h3 className="h4 mb-3">Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy or how we handle your data, feel free to contact us via email or phone. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor ac odio non facilisis.
          </p>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default page;
