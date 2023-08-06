import { useState } from "react";
import { useMutation, gql, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import _ from "lodash";
import { Container, Row, Col } from "react-bootstrap";
// import { DeleteUser } from "./buttons/delete-user-button";
import { ToastSuccess, ToastError } from "./toast";
import { useAuth0 } from "@auth0/auth0-react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input/input";
import debounce from "../utils/debounce";

const UserForm = ({ user, onSubmit }) => {
  console.log(user.phoneNumber);
  const phoneValueInit = user.phoneNumber !==null
    ? "+1" + user.phoneNumber.replace(/[^\d\+]/g, "")
    : null;
  const [value, setValue] = useState(phoneValueInit);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: user, criteriaMode: "all" });
  return (
    <Container>
      <Row className="rowStyle">
        <Col sm={4}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ul className="wrapper">
              <li className="form-row-left" key='first-name'>
                <label forhtml="firstName" className="user-input-label">
                  First Name:
                </label>
                <input
                  {...register("firstName", {
                    required: { value: true, message: "First name required." },
                    minLength: {
                      value: 2,
                      message: "First name must be at least 2 character long.",
                    },
                  })}
                  id="firstName"
                  className="user-input"
                  name="firstName"
                ></input>
              </li>

              <li className="form-row-left"  key='last-name'>
                <label forhtml="lastName" className="user-input-label">
                  Last Name:
                </label>
                <input
                  {...register("lastName", {
                    required: { value: true, message: "Last name required." },
                    minLength: {
                      value: 2,
                      message: "Last name must be at least 2 character long.",
                    },
                  })}
                  id="lastName"
                  className="user-input"
                  name="lastName"
                ></input>
              </li>
              <li className="form-row-left"  key='email'>
                <label forhtml="email" className="user-input-label">
                  Email (Uneditable):
                </label>
                <input
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  type="tel"
                  id="email"
                  className="user-input"
                  name="email"
                  readOnly
                ></input>
              </li>

              <li className="form-row-left"  key='phone'>
                <label forhtml="phoneNumber" className="user-input-label">
                  Phone:
                </label>
                <PhoneInput
                  country="US"
                  className="user-input"
                  {...register("phoneNumber", {
                    minLength: {
                      value: 14,
                      message:
                        "Phone number is too short. Must be 10 characters.",
                    },
                    maxLength: {
                      value: 14,
                      message:
                        "Phone number is too long. Must be 10 characters",
                    },
                  })}
                  id="phoneNumber"
                  value={value}
                  onChange={setValue}
                  maxLength="14"
                ></PhoneInput>
              </li>

              <li className="form-row-left"  key='submit'>
                <div className="container-submit-button">
                  <div className="btn-holder">
                    <button className="submit" type="submit">
                      Update Data
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </form>
          {/* <DeleteUser /> */}
        </Col>
        <Col sm={8}>
          <ul>
            <ErrorMessage
              errors={errors}
              name="firstName"
              render={({ messages }) => {
                return messages
                  ? _.entries(messages).map(([type, message]) => (
                      <>
                        <li className="form-row-right" key="first-name-error">
                          <p className="inputError" key={type}>
                            {message}
                          </p>
                        </li>
                      </>
                    ))
                  : null;
              }}
            />
            <ErrorMessage
              errors={errors}
              name="lastName"
              render={({ messages }) => {
                return messages
                  ? _.entries(messages).map(([type, message]) => (
                      <>
                        <li className="form-row-right" key="last-name-error">
                          <p className="inputError" key={type}>
                            {message}
                          </p>
                        </li>
                      </>
                    ))
                  : null;
              }}
            />
            <ErrorMessage
              errors={errors}
              name="phoneNumber"
              render={({ messages }) => {
                return messages
                  ? _.entries(messages).map(([type, message]) => (
                      <>
                        <li className="form-row-right" key="phone-error">
                          <p className="inputError" key={type}>
                            {message}
                          </p>
                        </li>
                      </>
                    ))
                  : null;
              }}
            />
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export const User = () => {
  const UPDATE_USER = gql`
    mutation ($input: UsersUpdateInput!) {
      updateUser(input: $input)
    }
  `;
  const GET_USER = gql`
    query ($email: String!) {
      getUser(email: $email) {
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
  const { user } = useAuth0();
  const { data, error, loading } = useQuery(GET_USER, {
    variables: { email: user.email },
  });

  const [mutateAsync] = useMutation(UPDATE_USER, {
    onError: (e) => {
      console.log(e);
    },
  });
  const updateUser = async (data) => {
    try {
      const response = await mutateAsync({
        variables: {
          input: {
            firstName: data.firstName,
            lastName: data.lastName,
            phoneNumber:
              data.phoneNumber === "" || data.phoneNumber === null
                ? null
                : "+1" + data.phoneNumber.replace(/[^\d\+]/g, ""),
            email: data.email,
          },
        },
      });
      if (response.errors?.graphQLErrors[0]?.extensions?.originalError?.error) {
        ToastError(`${response.errors?.graphQLErrors[0].extensions.originalError.error}: 
          ${response.errors?.graphQLErrors[0].extensions.originalError.message[0]}`);
      } else {
        ToastSuccess("Successfully Updated User!");
      }
    } catch (e) {
      ToastError("Failed to Update User.");
    }
  };

  if (loading) return <div>Loading Profile</div>;
  if (error)
    return (
      <div>
        An error has occurred while retrieving the user profile. Please login
        again, Your login has expired.
      </div>
    );

  const userData = { ...data.getUser };
  if (data.getUser.phoneNumber) {
    const phoneNumberBase = data.getUser.phoneNumber.slice(2);
    const prefix = phoneNumberBase.slice(0, 3);
    const middle = phoneNumberBase.slice(3, 6);
    const end = phoneNumberBase.slice(6, 10);
    userData.phoneNumber = `(${prefix}) ${middle}-${end}`;
  }

  return <UserForm user={userData} onSubmit={debounce(updateUser, 1000)} />;
};
