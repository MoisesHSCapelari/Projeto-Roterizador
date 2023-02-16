/* eslint-disable no-unused-vars */
import styled from "styled-components";
import * as colors from "../../config/colors";

export const FormInsert = styled.form`
  input[type="text"] {
    height: 30px;
    padding: 0.8rem;
    width: 350px;
    border-radius: 0.8rem;
  }

  button {
    background: ${colors.successColor};
    width: 120px;
    height: 40px;
    line-height: 20px;
    cursor: pointer;
    border: none;
    border-radius: 1rem;
    color: white;
    font-size: 1rem;
    margin-top: 1rem;
  }
`;

export const FormControl = styled.div`
  text-align: left;
  padding: 0.3rem;
  margin: 0.3rem;
  display: flex;
  flex-direction: column;
`;

export const TextRight = styled.div`
  text-align: right;
`;

export const Flex = styled.div`
  display: flex;

  @media (max-width: 1040px) {
    width: 90%;
    min-height: auto;
    flex-direction: column;
  }
`;
export const ViewForm = styled.div`
  width: 55%;
  margin-right: 1%;
  text-align: left;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const MapModalContainer = styled.div`
  margin: 15px;
`;
