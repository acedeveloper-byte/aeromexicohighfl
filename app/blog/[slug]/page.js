import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { HOST, SITE_ID, URL_IMAGE } from "@/utils/static";
import RecentPost from '@/components/Recent/RecentPost';


export async function generateMetadata({ params }) {
  const { slug } = params;

  try {
    const res = await fetch(`${HOST}/blog/get-blog-by-urland-site/${SITE_ID}/${slug}`, {
      cache: 'no-store',
    });

    if (!res.ok) throw new Error('Failed to fetch metadata');

    const matchedPost = await res.json();

    if (!matchedPost || !matchedPost.response) {
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
  const res = await fetch(`${HOST}/blog/get-blog-by-urland-site/${SITE_ID}/${slug}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error('Failed to fetch blog post');

  return res.json();
};

export default async function Page({ params }) {
  const { slug } = params;

  const posts = await getData(slug);
  const blog = posts?.response;

  if (!blog) {
    return (
      <>
        <Header />
        <Container>
          <h1 className="text-center my-5">Blog Not Found</h1>
        </Container>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <div>
        <h1 className="my-3 fw-bold fs-2 text-center">
          {blog.title_tag_h1}
        </h1>
      </div>
      <hr />
      <Container>
        <Row>
          <Col md={9}>
            <div className="blog-image-layout">
              <img
                src={`${URL_IMAGE}${blog.blog_images}`}
                alt={blog.blog_image_tag || blog.title_tag_h1}
                style={{ width: '100%' }}
                loading="lazy"
              />
            </div>
            <div
              className="mt-3"
              dangerouslySetInnerHTML={{ __html: blog.blog_description }}
            />
          </Col>
          <Col md={3}>
              <RecentPost/>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}
