import React from "react";
import { WebsiteFeature } from "./website-feature";

export const WebsiteFeatures = () => {
  const featuresList = [
    {
      title: "Sign up",
      description:
        "Feel free to sign up with SSO or create a login manually. You will be sent a verification email if you sign up manually. No one but me can see any of your information. Even if that is not okay, feel free to sign up with a fake email.",
      icon: "https://cdn.auth0.com/blog/hello-auth0/identity-providers-logo.svg",
    },
    {
      title: "User management",
      description:
        "You can edit your personal information or view a list of users. Each user that signs up will be represented by fake data except for the user that is logged in.",
      icon: "https://cdn.auth0.com/blog/hello-auth0/private-cloud-logo.svg",
    },
    {
      title: "Authentication",
      description:
        "A User's identity is verified automatically if a user uses SSO (Single Sign On). Non-SSO user creation requires email verification that will be sent to your email to gain full access. Your data will persist once you have been verified.",
      icon: "https://cdn.auth0.com/blog/hello-auth0/mfa-logo.svg",
    },
    {
      title: "Authorization",
      description:
        "Protected areas such as the Users and Profile tab requires a login to function fully. Authorization is used on the frontend and backend.",
        icon: "https://cdn.auth0.com/blog/hello-auth0/advanced-protection-logo.svg",
    },
  ];

  return (
    <div className="website-features">
      <h2 className="website-features__title">Explore Auth0 Features</h2>
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
