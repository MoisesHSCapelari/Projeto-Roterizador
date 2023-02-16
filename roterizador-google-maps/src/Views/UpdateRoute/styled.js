/* eslint-disable no-unused-vars */
import styled from "styled-components";
import * as colors from "../../config/colors";

export const Flex = styled.div`
  margin-top: 85px;
  display: flex;
  padding: 1.5rem;
  text-align: center;
  flex-direction: column;

  @media (max-width: 1040px) {
    width: 90%;
    min-height: auto;
    flex-direction: column;
  }
`;
export const FormInsert = styled.form`
  input[type="text"] {
    height: 30px;
    padding: 0.8rem;
    width: 350px;
    border-radius: 0.8rem;
  }

  button {
    background: ${colors.successColor};
    width: 150px;
    height: 40px;
    line-height: 20px;
    cursor: pointer;
    border: none;
    border-radius: 1rem;
    color: white;
    font-size: 1rem;
    margin: 0.8rem;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

export const ViewForm = styled.div`
  margin-right: 1%;
  text-align: left;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const MapModalContainer = styled.div`
  padding: 20px;
  margin: 0 auto;
`;
