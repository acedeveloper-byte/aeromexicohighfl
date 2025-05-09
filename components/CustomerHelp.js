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
    title: "Affordable Fares",
    description:
      "We offer exclusive deals because great travel experiences shouldn't come with a huge price tag.",
    icon: <FaDollarSign size={36} className="text-primary mb-3" />,
  },
  {
    title: "Premium Services",
    description:
      "From a user-friendly interface to easy bookings, we believe in making your experience seamless.",
    icon: <FaHandsHelping size={36} className="text-success mb-3" />,
  },
  {
    title: "24*7 Customer Assistance",
    description:
      "Our experts are available 24*7 to help you with all your concerns related to bookings, cancellations, and more.",
    icon: <FaHeadset size={36} className="text-danger mb-3" />,
  },
  {
    title: "Complete Transparency",
    description:
      "We focus on complete transparency so that customers can make informed decisions with confidence.",
    icon: <FaShieldAlt size={36} className="text-warning mb-3" />,
  },
];

const CustomerHelp = () => {
  return (
    <Container className="text-center my-5 helpline-cards">
      <div className="d-flex justify-content-center align-items-center mb-4 ">
        <div className="hr-line"></div>
        <h3 className="fw-bold px-4 py-2 rounded-pill destination-layout">
          Smart Travelers Book Here
        </h3>
        <div className="hr-line"></div>
      </div>
      <Row className="g-4">
        {features.map((feature, idx) => (
          <Col key={idx} md={6} lg={3}>
            <div className="feature-card h-100 p-4 text-center rounded-4 shadow-sm bg-white">
              {feature.icon}
              <h5 className="fw-bold">{feature.title}</h5>
              <p className="text-muted small">{feature.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CustomerHelp;
