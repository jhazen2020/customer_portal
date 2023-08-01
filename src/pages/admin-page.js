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
        <div className="content__body">
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
