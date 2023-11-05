export type ModalActionType = "add" | "edit" | "delete";

export interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: () => void;
  children?: React.ReactNode;
  actionType: ModalActionType;
  classNames?: string[];
  datas?: any;
  onInputList?: any;
  onInputChange?: any;
  onAddInput?: any;
  onRemoveInput?: any;
  onChangeForm?: any;
}
