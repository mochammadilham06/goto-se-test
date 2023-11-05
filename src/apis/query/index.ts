import { useLazyQuery, useQuery } from "@apollo/client";
import {
  GetPhoneDetail,
  GetPhoneList,
  GetContactListv2,
} from "@goto/services/contact";
import {
  GetContact,
  GetContactDetailProps,
  GetContactListProps,
} from "@goto/types/contact";

const GraphAPI = () => {
  const getContactList = () => {
    const { data, loading, error } =
      useQuery<GetContactListProps>(GetPhoneList);
    return {
      data,
      loading,
      error,
    };
  };
  const getDetailPhone = (id: any) => {
    const { data, loading, error } = useQuery<GetContactDetailProps>(
      GetPhoneDetail,
      {
        variables: id,
      }
    );

    return {
      data,
      loading,
      error,
    };
  };
  const getContactsListv2 = (limit?: number, offset?: number) => {
    const { data, loading, error, variables, refetch } = useQuery<GetContact>(
      GetContactListv2,
      {
        variables: {
          limit: limit,
          offset: offset,
        },
      }
    );

    return {
      data,
      loading,
      error,
      variables,
      refetch,
    };
  };

  const QueryBySearch = () => {
    const [executeSearch, { data }] =
      useLazyQuery<GetContact>(GetContactListv2);
    return { executeSearch, data };
  };

  return {
    getContactList,
    getDetailPhone,
    getContactsListv2,
    QueryBySearch,
  };
};

export default GraphAPI;
