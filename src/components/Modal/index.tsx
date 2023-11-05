import React, { Fragment, useCallback, useState, useEffect } from "react";
import ButtonCom from "../Button";
import { MarkIcons, PlusIcons, WarningIcons } from "@goto/configs/svg";
import GroupButton from "../Button/group";
import { ModalProps } from "src/types/modal";
import { ClassNames, css } from "@emotion/react";
import GraphMutationAPI from "@goto/apis/mutation";
import Swal from "sweetalert2";
import GraphAPI from "@goto/apis/query";
function Modal({
  title,
  isOpen,
  onClose,
  children,
  onSubmit,
  actionType,
  classNames,
  datas,
}: ModalProps) {
  let initialState = {
    id: datas?.id,
    first_name: datas?.first_name,
    last_name: datas?.last_name,
    phones: datas?.phones,
  };
  const {
    postContactWithPhone,
    deletePostWithId,
    updateContactById,
    updatePhoneNumberById,
  } = GraphMutationAPI();
  const { getDetailPhone } = GraphAPI();
  const { createPhoneContact, loadingCreate } = postContactWithPhone();
  const { deleteContact, loadingDelete } = deletePostWithId();
  const { updateContact, loadingUpdate, error } = updateContactById();
  const { updateNumber, loadingUpdateNumber, errorUpdateNumber } =
    updatePhoneNumberById();

  const {
    data: dataDetail,
    loading: loadingDetail,
    error: errorDetail,
  } = getDetailPhone({
    id: datas?.id,
  });

  const [data, setData] = useState<any>({
    id: dataDetail?.contact_by_pk?.id || "",
    first_name: dataDetail?.contact_by_pk?.first_name || "",
    last_name: dataDetail?.contact_by_pk?.last_name || "",
  });

  const [inputList, setInputList] = useState<any>([
    { type: "number", value: "" },
  ]);
  const [isLoding, setIsLoading] = useState<boolean>(false);
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const newInputList = [...inputList];
    newInputList[index].value = value;
    setInputList(newInputList);
  };
  const handleAddInput = () => {
    setInputList([...inputList, { type: "number", value: "" }]);
  };
  const handleRemoveInput = (index: number) => {
    const newInputList = [...inputList];
    newInputList.splice(index, 1);
    setInputList(newInputList);
  };
  const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSetData = useCallback(() => {
    if (actionType === "edit" || actionType === "delete") {
      setData({
        id: dataDetail?.contact_by_pk.id,
        first_name: dataDetail?.contact_by_pk.first_name,
        last_name: dataDetail?.contact_by_pk.last_name,
      });
      setInputList(
        dataDetail?.contact_by_pk?.phones
          ?.map((phone) => ({
            type: "number",
            value: parseInt(phone?.number),
          }))
          ?.slice(0, 3)
      );
      initialState = {
        id: dataDetail?.contact_by_pk.id,
        first_name: dataDetail?.contact_by_pk.first_name,
        last_name: dataDetail?.contact_by_pk.last_name,
        phones: dataDetail?.contact_by_pk.phones,
      };
    }
  }, [dataDetail]);
  useEffect(() => {
    if (actionType === "edit" || actionType === "delete") {
      handleSetData();
    }
  }, [dataDetail]);

  const dataToSend = {
    first_name: data.first_name,
    last_name: data.last_name,
    phones: inputList?.map((input: any) => ({ number: input.value })),
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      switch (actionType) {
        case "add":
          createPhoneContact({
            variables: dataToSend,
            onCompleted: (response) => {
              Swal.fire({
                icon: "success",
                title: "Insert Phone Contact Success",
                showConfirmButton: false,
                timer: 1500,
              }).then(() => {
                onClose();
                setData({
                  id: 0,
                  first_name: "",
                  last_name: "",
                });
                setInputList([{ type: "number", value: "" }]);
              });
            },
          });
          break;

        case "delete":
          deleteContact({
            variables: {
              id: datas.id,
            },
            onCompleted: (response) => {
              Swal.fire({
                icon: "success",
                title: "Delete Phone Contact Success",
                showConfirmButton: false,
                timer: 1500,
              }).then(() => {
                onClose();
              });
            },
          });
          break;
        case "edit":
          const updateContactByPromise = updateContact({
            variables: {
              id: datas.id,
              _set: {
                first_name:
                  data.first_name || dataDetail?.contact_by_pk.first_name,
                last_name:
                  data.last_name || dataDetail?.contact_by_pk.last_name,
              },
            },
          });
          const updateNumberByPromise = inputList.map(
            (input: any, index: any) => {
              const updatedPhoneNumber = {
                number: input.value,
                contact_id: datas.id,
              };
              return updateNumber({
                variables: {
                  pk_columns: {
                    number: Number(
                      initialState.phones[index].number
                    ).toString(),
                    contact_id: updatedPhoneNumber.contact_id,
                  },
                  new_phone_number: updatedPhoneNumber.number.toString(),
                },
              });
            }
          );
          Promise.all([...updateNumberByPromise, updateContactByPromise])
            .then((responses) => {
              Swal.fire({
                icon: "success",
                title: "Update Phone Contact Success",
                showConfirmButton: false,
                timer: 1500,
              }).then(() => {
                onClose();
              });
            })
            .catch((error) => {
              console.error(error);
            });
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const InputBase = css`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    position: relative;
    border: 1px solid #000;
    border-radius: 5px;
  `;

  return (
    <Fragment>
      <div>
        {isOpen && (
          <div id="modal-container" className="two">
            <div className="modal-background">
              <div className="modal">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h2>{title} Modal</h2>
                  <ButtonCom title="" onClick={onClose} icon={<MarkIcons />} />
                </div>
                {errorDetail && actionType === "edit" && <p>Error</p>}
                {loadingDetail ? (
                  <p>Loading</p>
                ) : (
                  <ClassNames>
                    {({ css, cx }) => (
                      <form
                        onSubmit={handleSubmit}
                        className={cx(
                          css`
                            padding: 10px;
                            margin: 0;
                          `
                        )}
                      >
                        {(actionType === "add" || actionType === "edit") && (
                          <Fragment>
                            <input
                              className={cx(
                                css`
                                  ${InputBase}
                                `
                              )}
                              type="text"
                              placeholder="First Name"
                              value={data.first_name}
                              name="first_name"
                              onChange={handleChangeForm}
                            />
                            <input
                              className={cx(
                                css`
                                  ${InputBase}
                                `
                              )}
                              type="text"
                              placeholder="Last Name"
                              value={data.last_name}
                              name="last_name"
                              onChange={handleChangeForm}
                            />
                            {inputList?.map((input: any, index: any) => (
                              <div key={index}>
                                <input
                                  placeholder={`Input Phone Number`}
                                  type="number"
                                  value={input.value}
                                  onChange={(e) => handleInputChange(e, index)}
                                  className={cx(
                                    css`
                                      ${InputBase}
                                    `
                                  )}
                                />
                                {index > 0 && actionType != "edit" && (
                                  <ButtonCom
                                    title=""
                                    type="sm"
                                    variant="danger"
                                    disable={index === 0}
                                    icon={<MarkIcons />}
                                    onClick={() => handleRemoveInput(index)}
                                  />
                                )}
                              </div>
                            ))}

                            <div
                              style={{
                                padding: "10px",
                              }}
                            >
                              {inputList?.length <= 2 &&
                                actionType !== "edit" && (
                                  <ButtonCom
                                    title=""
                                    type="md"
                                    onClick={handleAddInput}
                                    icon={<PlusIcons />}
                                  />
                                )}
                            </div>
                            <div style={{ float: "right", padding: "10px 0" }}>
                              <ButtonCom
                                title="Submit"
                                type="md"
                                disable={isLoding}
                              />
                            </div>
                          </Fragment>
                        )}

                        {actionType === "delete" && (
                          <Fragment>
                            <WarningIcons />
                            <p
                              style={{
                                fontSize: "20px",
                                fontWeight: "500",
                              }}
                            >
                              Are you sure want to delete this?
                            </p>
                            <GroupButton type="row">
                              <ButtonCom
                                title="Cancel"
                                type="md"
                                variant="cancel"
                                onClick={onClose}
                              />
                              <ButtonCom
                                title="Submit"
                                variant="danger"
                                type="md"
                              />
                            </GroupButton>
                          </Fragment>
                        )}
                      </form>
                    )}
                  </ClassNames>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default Modal;
