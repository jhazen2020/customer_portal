import React from "react";
import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";
import { useAuth0 } from "@auth0/auth0-react";

export const AdminPage = () => {
  const { user } = useAuth0();

  if (!user) {
    return null;
  }

  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Admin Page
        </h1>
        <div className="content__body">
          <p id="page-description">
            <span>
              This page allows a user to view all users with masked data (fake
              data from a cache placed over real data to protect your
              information). You are the only one that can see your real data.
            </span>
          </p>
          {user.email_verified ? (
            <CodeSnippet title="Users List" snippetId="users_list" />
          ) : (
            <div>
              <span>Please Verify your email to see the users' list.</span>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};
