import React from "react";
import { WebsiteFeature } from "./website-feature";

export const WebsiteFeatures = () => {
  const featuresList = [
    {
      title: "Sign up",
      description:
        "Feel free to sign up with SSO (Single Sign On) or sign up manually.",
      icon: "https://cdn.auth0.com/blog/hello-auth0/identity-providers-logo.svg",
    },
    {
      title: "User management",
      description:
        "You can edit your own personal information or view a list of users. No other user can see your information",
      icon: "https://cdn.auth0.com/blog/hello-auth0/private-cloud-logo.svg",
    },
    {
      title: "Authentication",
      description:
        "A User's identity is verified automatically if a user uses SSO (Single Sign On). A verification email will be sent if the user does not use SSO.",
      icon: "https://cdn.auth0.com/blog/hello-auth0/mfa-logo.svg",
    },
    {
      title: "Authorization",
      description:
        "The Users and Profile tab requires a login to fully function. This access is controlled in the browser and backend servers.",
      icon: "https://cdn.auth0.com/blog/hello-auth0/advanced-protection-logo.svg",
    },
  ];

  return (
    <div className="website-features">
      <div className="website-features__grid">
        {featuresList.map((feature) => (
          <WebsiteFeature
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  );
};
