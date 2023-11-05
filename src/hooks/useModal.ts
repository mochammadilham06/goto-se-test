import { useState } from "react";
export type ModalActionType = "add" | "edit" | "delete";
export default function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [actionType, setActionType] = useState<ModalActionType>("add");
  const [dataset, setDataSet] = useState<any>("");
  const openModal = (actionType: ModalActionType) => {
    setIsOpen(true);
    setActionType(actionType);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSetData = (data: any) => {
    setDataSet(data);
  };

  return {
    isOpen,
    actionType,
    openModal,
    closeModal,
    dataset,
    handleSetData,
  };
}
