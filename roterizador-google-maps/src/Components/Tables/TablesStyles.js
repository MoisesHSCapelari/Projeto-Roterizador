import styled from "styled-components";
import { Link } from "react-router-dom";

export const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 500px;

  thead tr th {
    padding: 10px;
    text-align: left;
    font-weight: bold;

    padding: 10px;
    border-bottom: 1px solid black;
  }

  tbody tr td {
    padding: 10px;
    border-bottom: 1px solid black;
  }
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: Gray;
  }
`;

export const TextRight = styled.div`
  text-align: right;
  padding: 1rem;

  button {
    cursor: pointer;
    width: 150px;
    height: 40px;
    line-height: 20px;
    border-radius: 20px;
    border: none;
    background-color: #505ef2;
    color: white;
    transition: filter 0.3s ease-in-out;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
