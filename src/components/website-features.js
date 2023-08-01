import React from "react";
import { WebsiteFeature } from "./website-feature";

export const WebsiteFeatures = () => {
  const featuresList = [
    {
      title: "Sign up",
      description:
        "Feel free to sign up with SSO (Single Sign On) or create a login manually. You will be sent a verification email if you sign up manually. Feel free to create a fake email to login with if you prefer.",
      icon: "https://cdn.auth0.com/blog/hello-auth0/identity-providers-logo.svg",
    },
    {
      title: "User management",
      description:
        "You can edit your personal information or view a list of users. No other user can see your data in the users list",
      icon: "https://cdn.auth0.com/blog/hello-auth0/private-cloud-logo.svg",
    },
    {
      title: "Authentication",
      description:
        "A User's identity is verified automatically if a user uses SSO (Single Sign On). Non-SSO user creation requires an email verification that will be sent to your email.",
      icon: "https://cdn.auth0.com/blog/hello-auth0/mfa-logo.svg",
    },
    {
      title: "Authorization",
      description:
        "Protected areas such as the Users and Profile tab requires a login to function fully. Authorization is used in the browser and servers.",
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
