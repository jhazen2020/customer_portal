import React from "react";

export const HeroBanner = () => {
  const logo = "https://djkmbr0egwze9.cloudfront.net/jesse_hazen_square.svg";

  return (
    <div className="hero-banner hero-banner--blue-aqua">
      <div className="hero-banner__logo">
        <a
          href="https://www.linkedin.com/in/jesse-hazen-36a207234/"
          target="_blank"
        >
          <img className="hero-banner__image" src={logo} alt="React logo" />
        </a>
      </div>
      <h1 className="hero-banner__headline">Welcome!</h1>
      <p className="hero-banner__description">
        This website is made to demonstrate some software engineering abilities.
        Features include creating an account, securely logging in, updating
        personal information, and viewing other user's data that is masked by
        fake data (No one can see your data but you and me). This Single Page
        Application is powered by AWS, React, Typescript, NestJs, Graphql,
        Docker, Auth0 and so much more.
      </p>
    </div>
  );
};
