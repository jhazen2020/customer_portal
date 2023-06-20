import React from "react";

export const HeroBanner = () => {
  const logo = "https://djkmbr0egwze9.cloudfront.net/jesse_hazen_square.svg";

  return (
    <div className="hero-banner hero-banner--blue-aqua">
      <div className="hero-banner__logo">
        <img className="hero-banner__image" src={logo} alt="React logo" />
      </div>
      <h1 className="hero-banner__headline">Welcome!</h1>
      <p className="hero-banner__description">
        This website is made to demostrate some software engineering abilities. Features include creating, updating, deleting, authenticating and authorizating users. This Single Page Application is powered by AWS, and Auth0. The backend is built as a container-based microservice. Feel free to check out the code to get a better look.
      </p>
    </div>
  );
};
