import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import "@/app/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const page = () => {
  return (
    <>
      <Header />
      <Container className="py-5">
        <div className="mb-4 text-center">
          <h1 className="fw-bold fs-2">About Us</h1>
          <p className="lead text-muted">Learn more about our services and what we offer!</p>
        </div>
        
        <hr />
        
        <div className="about-section">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus dui et felis fermentum, sit amet luctus ante volutpat. Vivamus auctor ac odio non facilisis. Curabitur scelerisque dui eget nulla elementum, ac vestibulum erat aliquet. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>

          <p className="mb-4">
            Maecenas sollicitudin nisi sit amet diam suscipit, et pretium sapien mollis. Donec ut tortor vitae ante convallis efficitur. Ut pretium diam et felis tempor, eget rutrum augue efficitur. Integer vitae orci ac eros posuere pretium. Fusce volutpat leo id purus faucibus, a dictum risus elementum. Vivamus laoreet, magna et dictum volutpat, ante purus venenatis metus, id sodales metus dui vel elit. 
          </p>

          <h3 className="h4 mb-3">Why Choose Us?</h3>
          <ul>
            <li><strong>Unbeatable Deals:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li><strong>Tailor-Made Packages:</strong> Nulla facilisi. Morbi ultricies, sapien ut gravida varius, sapien velit pharetra felis, sit amet malesuada ante felis at urna.</li>
            <li><strong>Worldwide Destinations:</strong> Fusce at placerat tortor. Nulla scelerisque magna id augue dictum viverra.</li>
            <li><strong>24/7 Customer Service:</strong> Sed tempus, lorem eu tincidunt condimentum, lorem risus pretium turpis, ut feugiat nulla nisi at ligula.</li>
            <li><strong>Reliable & Trustworthy:</strong> Nam vehicula ante sit amet tortor efficitur, nec sodales nulla tincidunt.</li>
          </ul>

          <h3 className="h5 mt-4">Get in Touch!</h3>
          <p>
            Curabitur suscipit, urna non lacinia tristique, nisi dui ullamcorper augue, eu aliquam sapien velit ut urna. Ut varius urna eu enim efficitur, vitae iaculis nisi vehicula. Sed vestibulum, leo ut volutpat tempor, libero sem tincidunt eros, at scelerisque erat nulla in tortor. Nulla id justo orci. In tempor volutpat mauris, eget dapibus justo tristique eget. 
          </p>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default page;
