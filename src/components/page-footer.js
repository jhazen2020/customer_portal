import React from "react";
import { PageFooterHyperlink } from "./page-footer-hyperlink";

export const PageFooter = () => {
  const resourceList = [
    {
      path: "https://auth0.com/why-auth0/",
      label: "Why Auth0",
    },
    {
      path: "https://auth0.com/docs/get-started",
      label: "How It Works",
    },
    {
      path: "https://auth0.com/blog/developers/",
      label: "Developer Blog",
    },
    {
      path: "https://auth0.com/contact-us",
      label: "Contact an Expert",
    },
  ];

  return (
    <footer className="page-footer">
      <div className="page-footer-grid">
        <div className="page-footer-grid__info">
          <div className="page-footer-info__message">
            <p className="page-footer-message__headline">
              <span>This application is brought to you by <PageFooterHyperlink path="https://www.linkedin.com/in/jesse-hazen-36a207234/">
                Jesse Hazen
              </PageFooterHyperlink></span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
