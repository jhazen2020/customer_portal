import React from "react";
import { User } from "../components/user-info-form";
import { UsersListData } from "../components/user-list";

export const CodeSnippet = ({ title, snippetId = null }) => {
  let body = (
    <pre className="code-snippet__body">
      <p>
        Jesse Hazen is software engineer that has experience in taking other
        peoples' dreams and turning them into reality. His deep desire for
        correctness in the code and data enables those around him to succeed as
        well. Success doesn't just come from having a well rounded knowledge
        base, but also tenacity when things become difficult.
      </p>
      <p>
        Problem solving is the most exciting aspect of being an engineer. Couple
        that with working for a great group of people and you have a recipe for
        a fantastic work environment! Jesse has contributed to SaaS (software as
        a service) products over the past 10 years, enjoying nearly every step
        along the way. A couple examples are working on complex survey systems
        and social network platforms.
      </p>
      <p>
        Feel free to contact{" "}
        <strong>
          <a
            style={{ color: "lightblue" }}
            href="https://www.linkedin.com/in/jesse-hazen-36a207234/"
            target="_blank"
          >
            Jesse
          </a>{" "}
        </strong>
        if you need for a friendly engineer that can get things done.
      </p>
    </pre>
  );
  if (snippetId === "profile") {
    body = (
      <>
        <User className="code-snippet__body"></User>
      </>
    );
  } else if (snippetId === "users_list") {
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
