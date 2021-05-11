import React from "react";
import styled from "styled-components";

const Container = styled.tr`
  img {
    height: 20px;
    width: 20px;
  }
`;

const TableData = ({ item, data }) => {
  switch (item.key) {
    case "image":
      return (
        <td>
          <img src={data} />
        </td>
      );
    case "url":
      return <a href={data}>URl</a>;
    default:
      return <td>{data}</td>;
  }
};

const Card = ({ data, headers = [] }) => {
  return (
    <Container>
      {headers.map((item) => (
        <TableData item={item} data={data[item.title]} />
      ))}
    </Container>
  );
};
export default Card;
