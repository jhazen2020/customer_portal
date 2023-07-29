import React from "react";
import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";

export const PublicPage = () => {
  return (
    <PageLayout>
      <div className="content-layout">
        <div className="content__body">
          <CodeSnippet title="About Me" />
        </div>
      </div>
    </PageLayout>
  );
};
