import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { HOST, SITE_ID, URL_IMAGE } from "@/utils/static";
// export async function generateStaticParams() {
//   return [{ slug: "what-is-the-copa-airlines-cancellation-policy" }];
// }

export async function generateMetadata({ params }) {
  const { slug } = params;

  try {
    const res = await fetch(`${HOST}/articulos/get-articulos-by-urland-site/${SITE_ID}/${slug}`, {
      cache: 'no-store' // Optional: ensures fresh data, especially if data is dynamic
    });

    if (!res.ok) {
      throw new Error('Failed to fetch metadata');
    }

      const matchedPost = await res.json();
    if (!matchedPost) {
      return {
        title: "Page Not Found",
        description: "The blog you are looking for does not exist.",
      };
    }

    return {
      title: matchedPost.response.meta_title || "Articulos",
      description: matchedPost.response.meta_description || "Read this articulos post.",
    };
  } catch (error) {
    console.error("Metadata fetch error:", error);

    return {
      title: "Error Loading Page",
      description: "There was an error loading this page.",
    };
  }
}

const getData = async (slug) => {

  // Replace this with your API endpoint
  const res = await fetch(`${HOST}/articulos/get-articulos-by-urland-site/${SITE_ID}/${slug}`, {
    next: { revalidate: 60 }, // optional: ISR caching
  });
  if (!res.ok) throw new Error('Failed to fetch posts');

  return res.json();
};


export default async function  page ({ params }) {
   const { slug } = params;
  const posts = await getData(slug);

  // Match content based on slug
  return (
    <>
      <Header />



            <div>
              <h1 className="my-3 fw-bold fs-2 text-center">
                {posts.response.title_tag_h1}
              </h1>
            </div>
            <hr />
            <Container>
              <Row>
                <Col md={9}>
                  <div className="blog-image-layout" >

                    <img
                      src={`${URL_IMAGE}articulos/${posts.response.articulos_images}`}
                      alt="Copa Airlines Cancellation Policy" style={{ width: '100%' }}
                    />
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: posts.response.articulos_description }} />
                </Col>
                <Col md={3} >

                  {/* <div className="blog-list">
                    <h3>Recent Posts</h3>
                    {json.map((posts, index) => (
                      <a href={`/blog/${posts.response.slug}`} className="blog-card" key={index}>
                        <p className="blog-title">{posts.response.title}</p>
                      </a>
                    ))}
                  </div> */}


                </Col>
              </Row>

            </Container>

       


      <Footer />
    </>
  );



}