import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";
import { ToastSuccessContainer } from "../components/toast";

export const ProfilePage = () => {
  const { user, getAccessTokenSilently } = useAuth0();

  if (!user) {
    return null;
  }

  const emaiVerified = user.email_verified ? (
    ""
  ) : (
    <p>
      <span>
        <strong>
          Email has not been verified. Please check your email inbox.
        </strong>
      </span>
    </p>
  );
  getAccessTokenSilently().then((accessToken) => {
    localStorage.setItem("token", accessToken);
  });

  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Profile Page
        </h1>
        <div className="content__body">
          <p id="page-description">
            <span>
              Here you can update your user information. There are some front
              end and server side validation for inputs. Deleting your user will
              remove it from Auth0 and the server side database. This will log
              you out. You may sign up again if you wish.
            </span>
            <span>
              <strong>Only logged in users can access this page.</strong>
              {emaiVerified}
            </span>
          </p>
          <div className="profile-grid">
            <div className="profile__header">
              <img
                src={user.picture}
                alt="Profile"
                className="profile__avatar"
              />
              <div className="profile__headline">
                <h2 className="profile__title">{user.name}</h2>
                <span className="profile__description">{user.email}</span>
              </div>
            </div>
            <div className="profile__details">
            {user.email_verified ? <CodeSnippet
                title="Update Your Profile Information."
                snippetId="profile"
              /> :
              <div></div>}
              <ToastSuccessContainer />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
