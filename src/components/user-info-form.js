import { useMutation, gql, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import _ from "lodash";
import { Container, Row, Col } from "react-bootstrap";
import { DeleteUser } from "./buttons/delete-user-button";
import { ToastSuccess, ToastError } from "./toast";
import { useAuth0 } from "@auth0/auth0-react";

const UserForm = ({ user, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: user, criteriaMode: "all" });
  return (
    <Container>
      <Row>
        <Col>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ul className="wrapper">
              <li className="form-row-left">
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

              <li className="form-row-left">
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
              <li className="form-row-left">
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

              <li className="form-row-left">
                <label forhtml="phoneNumber" className="user-input-label">
                  Phone:
                </label>
                <input
                  type="tel"
                  placeholder="+1235551234"
                  {...register("phoneNumber", {
                    minLength: {
                      value: 12,
                      message:
                        "Phone number is too short. Must be 12 characters.",
                    },
                    maxLength: {
                      value: 12,
                      message:
                        "Phone number is too long. Must be 12 characters",
                    },
                  })}
                  id="phoneNumber"
                  className="user-input"
                  name="phoneNumber"
                ></input>
              </li>

              <li className="form-row-left">
                <button className="submit" type="submit">
                  Update Data
                </button>
              </li>
            </ul>
          </form>
          <DeleteUser />
        </Col>
        <Col>
          <ul>
            <ErrorMessage
              errors={errors}
              name="firstName"
              render={({ messages }) => {
                console.log("messages", messages);
                return messages
                  ? _.entries(messages).map(([type, message]) => (
                      <>
                        <li className="form-row-right">
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
                console.log("messages", messages);
                return messages
                  ? _.entries(messages).map(([type, message]) => (
                      <>
                        <li className="form-row-right">
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
                console.log(messages);
                return messages
                  ? _.entries(messages).map(([type, message]) => (
                      <>
                        <li className="form-row-right">
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
  console.log(user);
  const { data } = useQuery(GET_USER, { variables: { email: user.email } });

  const [mutateAsync] = useMutation(UPDATE_USER);
  const handleSubmit = async (data) => {
    try {
      await mutateAsync({
        variables: {
          input: {
            firstName: data.firstName,
            lastName: data.lastName,
            phoneNumber: data.phoneNumber === "" ? null : data.phoneNumber,
            email: data.email,
          },
        },
      });
      ToastSuccess("Successfully Updated User!");
    } catch (e) {
      ToastError("Failed to Update User.");
      console.log(e);
    }
  };

  if (!data) return <div>loading state</div>;

  return <UserForm user={data.getUser} onSubmit={handleSubmit} />;
};
