import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

const HomeContent = () => {
  return (
    <div className="home-content-section py-5 bg-light">
      <Container>
        <Row className="align-items-center g-4">
          <Col md={6} className="text-center text-md-start">
            <Image
              src="/images/home-about-poster.jpg"
              alt="Airlines"
              width={550}
              height={500}
              className="img-fluid rounded shadow"
            />
          </Col>

          <Col md={6}>
            <p className="text-primary fw-semibold text-uppercase mb-2">Travel For Less!</p>

            <h2 className="display-6 fw-bold mb-4 text-dark">
              lorem – Where Budget Meets the Skies
            </h2>

            <p className="text-muted mb-4">
              At lorem, we believe that exploring the world shouldn’t come with a hefty price tag. 
              That’s why we’ve made it easy to search, compare, and book the cheapest flights from multiple airlines. 
              If you are looking for the best travel experience within your budget, we can be your perfect pick.
            </p>

            <h5 className="mb-3 fw-bold">What You Get?</h5>
            <ul className="list-unstyled custom-check-list">
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>

                </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeContent;
