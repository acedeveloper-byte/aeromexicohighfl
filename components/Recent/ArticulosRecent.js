import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { HOST, SITE_ID, URL_IMAGE } from "@/utils/static";

const getData = async () => {
  const res = await fetch(`${HOST}/articulos/get-articulos-by-siteId/${SITE_ID}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

const ArticulosRecent = async () => {
  const data = await getData();
  const posts = data.response || [];

  return (
    <>

      <Container className="">
        <div className="text-center mb-4">
          <h3 className="mb-1">Recent Posts</h3>
        </div>

        <Row className="g-4 ">
          {posts.map((item, index) => (
            <Col key={index}>
              <a href={`${item.articulos_url}`} className="text-decoration-none d-flex align-items-start">
                <img
                  src={`${URL_IMAGE}articulos/${item.articulos_images}`} 
                  alt={item.blog_image_tag}
                  style={{ width: "120px", height: "80px", objectFit: "cover", borderRadius: "5px", marginRight: "15px" }}
                />
                <div> 
                  <h6 className="mb-1 text-dark">{item.meta_title}</h6>
                 
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </Container>

    </>
  );
};

export default ArticulosRecent;

