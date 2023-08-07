import { gql, useLazyQuery } from "@apollo/client";
import _ from "lodash";
import React, { useState, useMemo } from "react";
import Pagination from "./pagination";
import "../styles/components/users-list.css";
import { Container, Row } from "react-bootstrap";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

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
        <Table>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>FIRST NAME</Th>
              <Th>LAST NAME</Th>
              <Th>EMAIL</Th>
              <Th>PHONE</Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentTableData.map((item) => {
              return (
                <Tr key={item.id}>
                  <Td>{item.id}</Td>
                  <Td>{item.firstName}</Td>
                  <Td>{item.lastName}</Td>
                  <Td>{item.email}</Td>
                  <Td>{item.phoneNumber}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Row>
      {currentTableData.length === 0 ? <Row>NO DATA. Please login again, your login has expired.</Row> : ''}
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
    query ($input: UsersListInput!) {
      getAllUsers(input: $input)
    }
  `;
  const GET_USERS_COUNT = gql`
    query {
      getUsersCount
    }
  `;
  const [getUsers] = useLazyQuery(GET_USERS_LIST, {onError: (error)=>console.log(error.message)});
  const [getUsersCount] = useLazyQuery(GET_USERS_COUNT, {onError: (error)=>console.log(error.message)});
  useMemo(async () => {
    async function fetchData() {
      const data = await getUsersCount();
      setCount(data.data?.getUsersCount || 0);
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
      setDataUsers(data.data?.getAllUsers || []);
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
