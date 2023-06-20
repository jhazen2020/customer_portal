import React from "react";
import { WebsiteFeature } from "./website-feature";

export const WebsiteFeatures = () => {
  const featuresList = [
    {
      title: "Sign Up as a user",
      description:
        "Feel free to sign up with SSO or create a login manually. You will be sent a verification email if you sign up manually.",
      icon: "https://cdn.auth0.com/blog/hello-auth0/identity-providers-logo.svg",
    },
    {
      title: "Manage Users as an admin",
      description:
        "Please contact me if you would like credentials of an admin user or want your own login upgraded. This will only be given if we are in the middle of the interview process.",
      icon: "https://cdn.auth0.com/blog/hello-auth0/private-cloud-logo.svg",
    },
    {
      title: "Authentication",
      description:
        "User identiy is authenticated when a user verify's their email after signup. The verification is done automatically if a user uses SSO.",
      icon: "https://cdn.auth0.com/blog/hello-auth0/mfa-logo.svg",
    },
    {
      title: "Authorization",
      description:
        "Protected areas such as the admin and protected tab require users to be marked an admins. These tabs at the top will be hidden unless the user has the required access.",
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
