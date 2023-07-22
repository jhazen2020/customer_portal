import { gql, useLazyQuery } from "@apollo/client";
import _ from "lodash";
import React, { useState, useMemo } from "react";
import Pagination from "./pagination";
import "../styles/components/users-list.css";
import { Container, Row } from "react-bootstrap";

let PageSize = 10;

export function UsersList({
  currentTableData,
  totalUserCount,
  currentPage,
  setCurrentPage,
}) {
  return (
    <>
      <Container>
      <Row>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>FIRST NAME</th>
              <th>LAST NAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
            </tr>
          </thead>
          <tbody>
            {currentTableData.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Row>
      <Row>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={totalUserCount}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </Row>
      </Container>
    </>
  );
}
export function UsersListData() {
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState([0]);
  const [dataUsers, setDataUsers] = useState([]);
  const GET_USERS_LIST = gql`
    query ($input: UsersList!) {
      getAllUsers(input: $input)
    }
  `;
  const GET_USERS_COUNT = gql`
    query {
      getUsersCount
    }
  `;
  const [getUsers] = useLazyQuery(GET_USERS_LIST);
  const [getUsersCount] = useLazyQuery(GET_USERS_COUNT);
  useMemo(async () => {
    async function fetchData() {
      const data = await getUsersCount();
      setCount(data.data.getUsersCount);
    }
    fetchData();
  }, [currentPage]);
  useMemo(() => {
    async function fetchData() {
      const data = await getUsers({
        variables: {
          input: {
            page: currentPage,
            limit: PageSize,
            order: "asc",
          },
        },
      });
      setDataUsers(data.data.getAllUsers);
    }
    fetchData();
  }, [currentPage]);
  return (
    <UsersList
      currentTableData={dataUsers}
      totalUserCount={count}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );
}
