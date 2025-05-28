import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { HOST, SITE_ID, URL_IMAGE } from '@/utils/static';
import CardsCustom from '@/components/Common/Card';

const getData = async () => {
  // Replace this with your API endpoint
  const res = await fetch(`${HOST}/articulos/get-articulos-by-siteId/${SITE_ID}`, {
    next: { revalidate: 60 }, // optional: ISR caching
  });
  if (!res.ok) throw new Error('Failed to fetch posts');

  return res.json();
};

const Page = async () => {
  const posts = await getData();

  return (
    <>
      <Header />

      <Container className="mt-5 mb-5">
        <div className="text-center mb-4">
          <h3 className="text-capitalize">Latest Articulos</h3>
        </div>

        <Row className="g-4">
          {posts.response.map((item, index) => {
            return (

              <Col key={index} md={4}>
                <CardsCustom title={item.title_tag_h1} description={item.meta_description.slice(0, 85)} image={`${URL_IMAGE}articulos/${item.articulos_images}`} link={`articulos/${item.articulos_url}`} alt={item.articulos_image_tag} />
              </Col>
            )
          })}
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Page
