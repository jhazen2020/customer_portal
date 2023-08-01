import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";
import { PageLoader } from "./page-loader";

/**
 * Authentication wrapper. This will only show the component if they are logged in.
 * other wise it will redirect them.
 * @date 7/31/2023 - 3:25:19 PM
 *
 * @param {{ component: any; }} { component }
 * @returns {*}
 */
export const AuthenticationGuard = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className="page-layout">
        <PageLoader />
      </div>
    ),
  });

  return <Component />;
};
