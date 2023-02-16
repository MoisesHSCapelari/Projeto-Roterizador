import styled from "styled-components";
import * as colors from "../../config/colors";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  overflow: auto;
  @media (max-width: 1040px) {
    min-height: auto;
    display: block;
  }
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 98%;
  max-width: 1050px;
  min-width: 730px;
  min-height: 300px;
  box-shadow: 0px 0px 10px #00000033;

  @media (max-width: 1040px) {
    min-height: auto;
  }
`;

export const ButtonAdd = styled.button`
  cursor: pointer;
  background: ${colors.successColor};
  color: white;
  border: none;
  width: 200px;
  height: 30px;
  line-height: 5px;
  border-radius: 60px;
`;

export const ButtonOut = styled.button`
  cursor: pointer;
  background: Red;
  color: white;
  border: none;
  width: 150px;
  height: 30px;
  border-radius: 60px;
  margin: 0.3rem;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonCloseHeader = styled.button`
  cursor: pointer;
  color: black;
  text-transform: uppercase;
  border: none;
  background-color: white;
`;

export const Diviser = styled.hr`
  color: black;
  font-size: 1.5rem;
`;

export const DisplayFlex = styled.div`
  display: flex;
`;
export const ViewForm = styled.div`
  width: 49%;
  height: 70vh;
  margin-right: 1%;
  text-align: left;
`;
