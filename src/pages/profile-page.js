import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";


export const ProfilePage = () => {
  const { user, getAccessTokenSilently } = useAuth0();

  if (!user) {
    return null;
  }

  const emaiVerified = user.email_verified ? '' : <p><span><strong>Email has not been verified. Please check your email inbox.</strong></span></p>
  getAccessTokenSilently().then((accessToken)=>{
    localStorage.setItem('token', accessToken);
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
              This information comes from the <strong>ID Token</strong> after a user has logged in.
            </span>
            <span>
              <strong>
                Only logged in users can access this page.
              </strong>
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
              <CodeSnippet
                title="Update Your Profile Information."
                snippetId="profile"
              />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
