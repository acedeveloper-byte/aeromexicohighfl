import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

const HomeContent = () => {
  return (
    <div className="home-content-section py-5 bg-light">
      <Container>
        <Row className="align-items-center g-4">
         

          <Col md={6}>
            <p className="text-primary fw-semibold text-uppercase mb-2">Book With Confidence!</p>

            <h2 className="display-6 fw-bold mb-4 text-dark">
              Aeromexicohighfly - Your Trusted Travel Partner!

            </h2>

            <p className="text-muted mb-4">
              Don’t want to dent your travel budget? Visit Aeromexicohighfly, and book a flight with us at the lowest fares possible. We will help you make an Aeromexico flight booking within your expected budget. So get in touch with our experts today, and get closer to your travel dreams. 

             </p>

             <p>We are committed to providing you with the best fares as we work with the single mission to provide you with ultimate satisfaction when planning an air trip. No matter where you wish to fly, we will help you find the cheapest flight within the shortest time possible. Share your priorities with our experts, and they will help you curate an itinerary accordingly. 
</p>

         
          </Col>

          <Col md={6} className="text-center text-md-start">
            <Image
              src="/images/home-about-poster.jpg"
              alt="Airlines"
              width={550}
              height={450}
              className="rounded shadow"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeContent;
