import React from "react";
import { User } from "../components/user-info-form";
import { UsersListData } from "../components/user-list";

export const CodeSnippet = ({ title, snippetId = null }) => {
  let body = <pre className="code-snippet__body">things</pre>;
  console.log(snippetId);
  if (snippetId === "profile") {
    body = (
      <>
        <User className="code-snippet__body"></User>
      </>
    );
  } else if (snippetId === "users_list"){
    body = (
      <>
        <UsersListData className="code-snippet__body"></UsersListData>
      </>
    );
  }
  return (
    <div className="code-snippet">
      <span className="code-snippet__title">{title}</span>
      <div className="code-snippet__container">
        <div className="code-snippet__wrapper">{body}</div>
      </div>
    </div>
  );
};
