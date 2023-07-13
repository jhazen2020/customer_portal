import React, { useState } from "react";
import { UserInfoForm } from"../components/user-info-form";


export const CodeSnippet = ({ title, formData, snippetId = null }) => { 
  let body =  <pre className="code-snippet__body">things</pre>;
  console.log(snippetId);
  if(snippetId === 'profile'){
    body = <UserInfoForm 
      className="code-snippet__body">
    </UserInfoForm>;
  }
  return (
  <div className="code-snippet">
    <span className="code-snippet__title">{title}</span>
    <div className="code-snippet__container">
      <div className="code-snippet__wrapper">{body}
        
      </div>
    </div>
  </div>
);
}
