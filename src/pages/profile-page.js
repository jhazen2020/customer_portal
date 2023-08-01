import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";
import { ToastSuccessContainer } from "../components/toast";

export const ProfilePage = () => {
  const { user } = useAuth0();

  if (!user) {
    return null;
  }

  const emaiVerified = user.email_verified ? (
    ""
  ) : (
    <p>
      <span>
        <strong>
          Your email has not been verified. Please check your email inbox.
        </strong>
      </span>
    </p>
  );

  return (
    <PageLayout>
      <div className="content-layout">
        <div className="content__body">
          <div className="profile-grid">
            <div className="profile__details">
              {user.email_verified ? (
                <CodeSnippet
                  title="Profile Information"
                  snippetId="profile"
                />
              ) : (
                <div></div>
              )}
              <ToastSuccessContainer />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
