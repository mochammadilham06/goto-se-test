import ListNumber from "@goto/components/Avatar/list";
import ButtonCom from "@goto/components/Button";
import { PenIcons, StartIcon, TrashIcons } from "@goto/configs/svg";
import styled from "@emotion/styled";
import React, { Fragment } from "react";
import ButtonGroup from "@goto/components/Button/group";
import Modal from "@goto/components/Modal";
import useModal from "@goto/hooks/useModal";
import { GetContact, GetContactListProps } from "src/types/contact";
import { useState, useEffect } from "react";
interface ListOfContact {
  // data: GetContactListProps | undefined;
  data: GetContact | undefined;
  setData?: any;
}
export default function ListContact({ data, setData }: ListOfContact) {
  const { actionType, closeModal, isOpen, openModal, handleSetData, dataset } =
    useModal();
  const [favouriteContacts, setFavouriteContacts] = useState([]);

  const ListContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 2px;
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
      cursor: pointer;
      transform: scale(1.002);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
    }
    @media (min-width: 1280px) {
      padding: 15px 40px;
    }
  `;
  return (
    <Fragment>
      {data?.contact?.map((item, index) => (
        <ListContainer key={index}>
          <ListNumber data={item} />
          <ButtonGroup type="row">
            <ButtonCom
              title=""
              icon={<PenIcons />}
              onClick={() => {
                openModal("edit"), handleSetData(item);
              }}
            />
            <ButtonCom title="" icon={<StartIcon />} />
            <ButtonCom
              title=""
              icon={<TrashIcons />}
              onClick={() => {
                openModal("delete"), handleSetData(item);
              }}
            />
          </ButtonGroup>
        </ListContainer>
      ))}

      <Modal
        title={actionType === "edit" ? "Edit" : "Delete"}
        isOpen={isOpen}
        actionType={actionType}
        onClose={closeModal}
        datas={dataset}
      />
    </Fragment>
  );
}
