import React from "react";
import { Row, Col } from "react-bootstrap";

export const HeroBanner = () => {
  const logo = "https://djkmbr0egwze9.cloudfront.net/640-office-view.jpg";
  return (
    <Row className="hero-banner hero-banner--blue-aqua">
      <Col className="hero-banner-left" sm={5}>
        <h1 className="hero-banner__headline">
          FINDING THE RIGHT PERSON WITH THE RIGHT SKILLS.
        </h1>
        <div className="hero-banner__description">
          <p>This task can be difficult but I hope this website will demonstrate that Jesse Hazen is who you are looking for. </p>
          <p>
          This Single Page
          Application is powered by AWS, React, Typescript, NestJs, Graphql,
          Docker, Auth0 and so much more.
          </p>
        </div>
      </Col>
      <Col className="hero-banner-right" sm={7}>
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
