'use client'
import React from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';



const Blog = () => {
    return (
        <div>
            <Container>
            <div className='mt-4 text-center '>
  <p className='text-primary'>OUR BLOG</p>
  <h3 className='text-capitalize'>WHAT YOU DEFINITELY WANT TO KNOW</h3>

</div>

                <Row className='my-3'>
                    <Col md={4}>
                        <Card style={{ width: '' }}>
                            <Image src='/images/cards-blog.png' alt='blogs' width={353} height={180} />
                            <Card.Body>
                                <Card.Title className='fw-bold'>Airlines</Card.Title>
                                <Card.Text>
                                    American Airlines extends its service to
                                    lesser-visited islands
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card style={{ width: '' }}>
                            <Image src='/images/cards-blog.png' alt='blogs' width={353} height={180} />
                            <Card.Body>
                                <Card.Title className='fw-bold'>Airlines</Card.Title>

                                <Card.Text>
                                    American Airlines extends its service to
                                    lesser-visited islands
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card style={{ width: '' }}>
                            <Image src='/images/cards-blog.png' alt='blogs' width={353} height={180} />
                            <Card.Body>
                                <Card.Title className='fw-bold'>Airlines</Card.Title>

                                <Card.Text>
                                    American Airlines extends its service to
                                    lesser-visited islands
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>


                </Row>
            </Container>
        </div>
    )
}

export default Blog
