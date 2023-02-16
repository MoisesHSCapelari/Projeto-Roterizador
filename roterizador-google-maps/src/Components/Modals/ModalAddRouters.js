/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import {
  ButtonAdd,
  ButtonCloseHeader,
  DisplayFlex,
  Diviser,
  ModalContent,
  ModalHeader,
  ModalWrapper,
} from "./ModalStyles";
import FormInsertLocation from "../Forms/FormInsertLocation";

export default function ModalAddRouters() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
    window.location.reload();
  };
  return (
    <>
      <ButtonAdd onClick={() => setIsOpen(true)}>
        <FaPlus size={10} /> Nova Rota
      </ButtonAdd>
      {isOpen && (
        <ModalWrapper>
          <ModalContent>
            <ModalHeader>
              <h4>Nova Rota</h4>
              <ButtonCloseHeader type="button" onClick={handleCloseModal}>
                <FaTimes />
              </ButtonCloseHeader>
            </ModalHeader>
            <Diviser />
            <br />
            <DisplayFlex>
              <FormInsertLocation />
            </DisplayFlex>
          </ModalContent>
        </ModalWrapper>
      )}
    </>
  );
}
