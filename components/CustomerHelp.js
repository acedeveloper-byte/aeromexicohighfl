"use client";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaDollarSign,
  FaHandsHelping,
  FaHeadset,
  FaShieldAlt,
} from "react-icons/fa";



const features = [
  {
    title: "Handpicked Travel Deals",
    description:
      " Our team curates top-notch offers, ensuring you get the best value for your upcoming travel plan.",
    icon: <FaDollarSign size={36} className="text-primary mb-3" />,
  },
  {
    title: " Easy Booking Option",
    description:
      "With us, you can book your flight tickets to your dream destination without any additional effort.",
    icon: <FaHandsHelping size={36} className="text-success mb-3" />,
  },
  {
    title: "24*7 Help",
    description:
      "Our team of experts is reachable all the time to assist you regarding bookings, cancellations, and more. ",
    icon: <FaHeadset size={36} className="text-danger mb-3" />,
  },
  {
    title: "100% Transparency",
    description:
      "With us, you will not find any last-minute surprises as we believe in complete transparency with our customers.",
    icon: <FaShieldAlt size={36} className="text-warning mb-3" />,
  },
];

const CustomerHelp = () => {
  return (
    <Container className="text-center my-5 helpline-cards">
      <div className="d-flex justify-content-center align-items-center mb-4 ">
        <div className="hr-line"></div>
        <h3 className="fw-bold px-4 py-2 rounded-pill destination-layout">
          Book Smarter, Travel Better

        </h3>
        <div className="hr-line"></div>
      </div>
      <Row className="g-4">
        {features.map((feature, idx) => (
          <Col key={idx} md={6} lg={3}>
            <div className="feature-card h-100 p-4 text-center rounded-4 shadow-sm bg-white">
              {feature.icon}
              <h5 className="fw-bold " style={{
    fontSize: '18px'}}>{feature.title}</h5>
              <p className="text-muted small">{feature.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CustomerHelp;
