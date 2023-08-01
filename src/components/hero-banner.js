import React from "react";
import { Row, Col } from "react-bootstrap";

export const HeroBanner = () => {
  const logo = "https://djkmbr0egwze9.cloudfront.net/640-office-view.jpg";
  return (
    <Row className="hero-banner hero-banner--blue-aqua">
      <Col className="hero-banner-left" sm={12} md={12} lg={5}>
        <h1 className="hero-banner__headline">
          FINDING THE RIGHT PERSON WITH THE RIGHT SKILLS.
        </h1>
        <div className="hero-banner__description">
          <p>This task can be difficult, but you came to the right place. This website will demonstrate some software engineering
            skills possessed by Jesse Hazen. Possible your next hire, so check this out and give him a call.
          </p>
          <p>
          This Single Page
          Application is powered by AWS, React, Typescript, NestJs, Graphql,
          Docker, Auth0 and so much more.
          </p>
        </div>
      </Col>
      <Col className="hero-banner-right" lg={7}>
        <a
          href="https://www.linkedin.com/in/jesse-hazen-36a207234/"
          target="_blank"
        >
          <img className="hero-banner__image" src={logo} alt="React logo" />
        </a>
      </Col>
    </Row>
  );
};
