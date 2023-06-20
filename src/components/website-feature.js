import React from "react";

export const WebsiteFeature = ({ title, description, icon }) => (
  <a
    className="website-feature"
    target="_blank"
    rel="noopener noreferrer"
  >
    <h3 className="website-feature__headline">
      <img
        className="website-feature__icon"
        src={icon}
        alt="external link icon"
      />
      {title}
    </h3>
    <p className="website-feature__description">{description}</p>
  </a>
);
