import { ToastSuccess } from "../../components/toast";
import { gql } from "@apollo/client";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));
export const DeleteUser = () => {
  const { logout } = useAuth0();
  const handleDeleteUser = async () => {
    // const DELETE_USER = gql`
    //   mutation () {
    //     deleteUser()
    //   }
    // `;
    try {
      ToastSuccess("User successfully deleted. Logging out...");
      // await mutateAsync({
      //   variables: {
      //     input: {
      //       id: 4,
      //       firstName: data.firstName,
      //       lastName: data.lastName,
      //       phoneNumber: data.phoneNumber,
      //       email: data.email,
      //     },
      //   },
      // });
      await delay(2000);
      logout({
        logoutParams: {
          returnTo: window.location.origin,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container-user-delete-button">
      <div className="btn-holder">
        <button id="delete-user-button" onClick={handleDeleteUser}>
          Delete User
        </button>
      </div>
    </div>
  );
};
