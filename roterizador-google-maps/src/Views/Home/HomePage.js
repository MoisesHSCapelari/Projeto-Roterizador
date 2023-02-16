/* eslint-disable import/named */
import React from "react";
import { BoxButtonAdd, BoxTable, TextRight } from "./styled";
import TableRouters from "../../Components/Tables/TableRouters";
import ModalAddRouters from "../../Components/Modals/ModalAddRouters";

export default function HomePage() {
  return (
    <>
      <TextRight>
        <BoxButtonAdd>
          <ModalAddRouters />
        </BoxButtonAdd>
      </TextRight>

      <BoxTable>
        <TableRouters />
      </BoxTable>
    </>
  );
}
