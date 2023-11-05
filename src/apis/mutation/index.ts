import { useMutation } from "@apollo/client";
import {
  DeleteContactById,
  EditContactPhone,
  GetContactListv2,
  PostContactWithPhones,
  EditPhoneNumberById,
} from "@goto/services/contact";

const GraphMutationAPI = () => {
  const postContactWithPhone = () => {
    const [createPhoneContact, { loading: loadingCreate }] = useMutation(
      PostContactWithPhones,
      {
        refetchQueries: [GetContactListv2],
      }
    );
    return {
      createPhoneContact,
      loadingCreate,
    };
  };

  const deletePostWithId = () => {
    const [deleteContact, { loading: loadingDelete }] = useMutation(
      DeleteContactById,
      {
        refetchQueries: [GetContactListv2],
      }
    );
    return {
      deleteContact,
      loadingDelete,
    };
  };

  const updateContactById = () => {
    const [
      updateContact,
      { loading: loadingUpdate, error: errorUpdateContact },
    ] = useMutation(EditContactPhone, {
      refetchQueries: [GetContactListv2],
    });

    return {
      updateContact,
      loadingUpdate,
      error: errorUpdateContact,
    };
  };

  const updatePhoneNumberById = () => {
    const [
      updateNumber,
      { loading: loadingUpdateNumber, error: errorUpdateNumber },
    ] = useMutation(EditPhoneNumberById, {
      refetchQueries: [GetContactListv2],
    });
    return {
      updateNumber,
      loadingUpdateNumber,
      errorUpdateNumber,
    };
  };

  return {
    postContactWithPhone,
    deletePostWithId,
    updateContactById,
    updatePhoneNumberById,
  };
};

export default GraphMutationAPI;
