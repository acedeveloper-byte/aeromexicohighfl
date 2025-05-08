"use client";
import Image from "next/image";
import { Container, Card, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const destinations = [
  {
    country: "USA",
    location: "Chicago",
    price: "$150",
    image: "/images/destinations/chicago.jpg",
  },
  {
    country: "USA",
    location: "Los Angeles",
    price: "$240",
    image: "/images/destinations/los-angeles.jpg",
  },
  {
    country: "USA",
    location: "New York",
    price: "$249",
    image: "/images/destinations/new-york.jpg",
  },
  

  {
    country: "USA",
    location: "San Diego",
    price: "$250",
    image: "/images/destinations/san-diego.jpg",
  },
];

const TopDestinations = () => {
  return (
    <Container className="my-5 text-center ">
      {/* Section Title */}
      <div className="d-flex justify-content-center align-items-center mb-4">
        <div
        className="hr-line"
        ></div>
        <h3
          className="fw-bold px-4 py-2 rounded-pill destination-layout"
         
        >
          Top Destinations
        </h3>
        <div
         className="hr-line"
        ></div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
  spaceBetween={10}
  slidesPerView={1}
  navigation={true}
  modules={[Navigation]}
  breakpoints={{
    576: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  }}
  className="cards-mob"
>
  {destinations.map((dest, idx) => (
    <SwiperSlide key={idx}>
      <Card
        className="border-0 m-2 shadow-hover transition"
        style={{
          borderRadius: "1.5rem",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "220px",
            overflow: "hidden",
          }}
        >
          <Image
            src={dest.image}
            alt={dest.location}
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <Card.Body className="text-start px-4 py-3">
          <small className="text-muted">{dest.country}</small>
          <Card.Title className="fw-bold fs-5 mt-1">{dest.location}</Card.Title>
          <div className="d-flex justify-content-between mt-3">
            <Button
              variant="primary"
              className="rounded-pill px-3 py-1 fw-semibold"
            >
              {dest.price}
            </Button>
            <Button
              variant="outline-primary"
              className="rounded-pill px-3 py-1 fw-semibold"
            >
              <a
                href="tel: +1"
                className="text-decoration-none text-primary text-white"
              >
                Book Now &gt;
              </a>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </SwiperSlide>
  ))}
</Swiper>

    </Container>
  );
};

export default TopDestinations;
