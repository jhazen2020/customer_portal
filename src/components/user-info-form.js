import { ToastSuccessContainer, ToastSuccess } from "./toast";
import { useMutation, gql, useQuery } from "@apollo/client";

export function UserInfoForm() {
  const UPDATE_USER = gql`
    mutation ($input: UsersUpdateInput!) {
      updateUser(input: $input)
    }
  `;
  const GET_USER = gql`
    query ($id: Int!) {
      getUser(id: $id) {
        firstName
        lastName
        email
        phoneNumber
        usersCategories {
          name
        }
      }
    }
  `;

  const userData = useQuery(GET_USER, {variables: {id: 4}});
  console.log(userData, "hi");
  const [updateUser, { data, loading, error }] = useMutation(UPDATE_USER, {
    variables: {
      input: {
        id: 4,
        firstName: userData.firstName,
        lastName: userData.lastName,
        phoneNumber: userData.phoneNumber,
        email: userData.email,
      },
    },
  });
  if (error) console.log("error on update.");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, phone, email } = e.target.elements;
    updateUser({
      variables: {
        input: {
          id: 4,
          firstName: firstName.value,
          lastName: lastName.value,
          phoneNumber: phone.value,
          email: email.value,
        },
      },
    });
    ToastSuccess("Successfully Updated!");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        Ï
        <ul className="wrapper">
          <li className="form-row">
            <label forhtml="firstName" className="user-input-label">
              First Name:
            </label>
            <input
              id="firstName"
              className="user-input"
              name="firstName"
              defaultValue={userData.firstName}
            ></input>
          </li>

          <li className="form-row">
            <label forhtml="lastName" className="user-input-label">
              Last Name:
            </label>
            <input
              id="lastName"
              className="user-input"
              name="firstLast"
              defaultValue={userData.lastName}
            ></input>
          </li>

          <li className="form-row">
            <label forhtml="email" className="user-input-label">
              Email:
            </label>
            <input
              id="email"
              className="user-input"
              name="email"
              defaultValue={userData.email || ""}
            ></input>
          </li>

          <li className="form-row">
            <label forhtml="phone" className="user-input-label">
              Phone:
            </label>
            <input
              id="phone"
              className="user-input"
              name="phone"
              defaultValue={userData.phone || ""}
            ></input>
          </li>
          <li className="form-row">
            <button type="submit">Update Data</button>
          </li>
        </ul>
      </form>
      <ToastSuccessContainer />
    </>
  );
}
