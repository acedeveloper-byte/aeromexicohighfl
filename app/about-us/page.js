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
        </div>

        <hr />

        <div className="about-section">
          <p>Aeromexicohighfly is your ultimate partner if you wish to book cheap flights to your dream destination. We operate as a third-party travel agency that helps you find and book cheap Aeromexico flights with ease. We don&rsquo;t have direct links with Aeromexico Airlines; we just offer the airline&rsquo;s services at low fares to customers.&nbsp;</p>

          <p>At Aeromexicohighfly, we believe that traveling is not just about reaching your destination; it is about creating timeless memories in the air. Therefore, we offer premium services at discounted fares for your convenience. Share your requirements with us, and we will make sure that you don&rsquo;t face any problems when planning your dream trip.</p>

          <h3>Unbeatable Deals Tailored For You!</h3>
          <p>Want to fly within your expected budget on an Aeromexico flight? You must choose Aeromexicohighfly as your travel companion, as we offer exclusive flight deals to different destinations worldwide. To find the best deals and discounts, get in touch with our experts. They will help you locate the offer that suits your travel plan.&nbsp;</p>

          <p>At Aeromexicohighfly, we work with the sole motive to connect travel enthusiasts to their dream destinations at low fares so they can focus on the fun parts of the trip. Book with us, and get ready for a pleasurable journey.&nbsp;</p>

          <h3>Why Choose Aeromexicohighfly?</h3>
          <p>Several reasons make us better than our competitors, which are stated below.&nbsp;</p>

          <h4>Easy Bookings</h4>
          <p>Find the flights that suit your budget and book them in no time with the help of our travel experts.</p>

          <h4>Top-Notch Services</h4>
          <p>We focus on facilitating our customers with the best services so they can book with us without giving any second thoughts.</p>

          <h4>Unlimited Deals</h4>
          <p>Special deals and discounts from us will make your journey affordable, and you can save big on your booking.&nbsp;</p>

          <h4>Complete Transparency</h4>
          <p>We promise that there will not be any hidden fees or later surprises, as we believe in 100% transparency.&nbsp;</p>

          <h4>24*7 Help</h4>
          <p>If you need any help related to bookings, cancellations, and more, our experts are available all the time to assist you.&nbsp;</p>

          <h3>Book With Aeromexicohighfly Now!</h3>
          <p>Connect with Aeromexicohighfly directly through our communication channels and request immediate help from experts. We are not directly affiliated with Aeromexico Airlines, but we will help you with the booking process. With us, you will book the cheapest Aeromexico flights with no extra effort. </p>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default page;
