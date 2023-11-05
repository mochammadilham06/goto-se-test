import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";
import ButtonCom from "@goto/components/Button";
import { PlusIcons } from "@goto/configs/svg";
import useModal from "@goto/hooks/useModal";
import Modal from "@goto/components/Modal";
export default function AddView() {
  const { actionType, closeModal, isOpen, openModal } = useModal();
  const AddSection = styled.div`
    display: flex;
    padding: 10px 15px;
    gap: 10px;
    align-items: center;
  `;

  return (
    <Fragment>
      <AddSection>
        <ButtonCom
          title=""
          icon={<PlusIcons />}
          onClick={() => openModal("add")}
        />
        <ul
          style={{
            listStyle: "none",
            margin: "10px",
            padding: 0,
          }}
        >
          <li
            style={{
              fontWeight: "normal",
              fontSize: "12px",
              color: "#e5e7ec",
            }}
          >
            Add Your phone number
          </li>
          <li
            style={{
              fontWeight: "bold",
              fontSize: "14px",
              color: "#86878d",
            }}
          >
            Add Now
          </li>
        </ul>
      </AddSection>

      <Modal
        title="Add"
        isOpen={isOpen}
        onClose={closeModal}
        actionType={actionType}
      />
    </Fragment>
  );
}
