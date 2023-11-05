import React, { useState, useEffect, useCallback } from "react";
import styled from "@emotion/styled";
import SearchInput from "@goto/components/Input/search";
import ListContact from "../ListContact";
import FavouriteList from "../Favourite";
import AddView from "../AddSection";
import { GraphAPI } from "@goto/apis/index";
import ButtonCom from "@goto/components/Button";
import GroupButton from "@goto/components/Button/group";
import { ArrowLeft, ArrowRight } from "@goto/configs/svg";
import useDebounce from "@goto/hooks/useDebounce";
import Header from "@goto/components/Header/header";
import SubHeader from "@goto/components/Header/subHeader";
import Spinner from "@goto/components/Spinner";
export default function Dashboard() {
  const { getContactsListv2, QueryBySearch } = GraphAPI();
  const { data: dataByQuery, executeSearch } = QueryBySearch();
  const [page, setPage] = useState<number>(1);
  const [limit] = useState(10);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [search, setSearch] = useState<string>("");
  const useDebounceSearch = useDebounce(search, 1000);
  const {
    data: contactData,
    error: contactError,
    loading: contactLoading,
    refetch,
  } = getContactsListv2(limit, (page - 1) * limit);

  const handleNextPage = () => {
    if (page < Math.ceil(data?.contact?.length / limit) + 1) {
      setPage(page + 1);
    }
  };
  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    if (useDebounceSearch) {
      executeSearch({
        variables: {
          where: {
            first_name: { _ilike: `%${useDebounceSearch}%` },
          },
        },
      })
        .then((resp) => {
          setData(resp?.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      refetch()
        .then((resp) => {
          setData(resp?.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [useDebounceSearch]);

  useEffect(() => {
    setData(contactData);
    setLoading(contactLoading);
    setError(contactError);
  }, [contactData, contactLoading, contactError]);

  const PhoneListHeader = styled.section`
    margin-top: 10px;
    display: flex;
    background-color: #f5f6f8;
  `;

  if (error) {
    return (
      <div>
        <h1>Failed to fetch data</h1>
      </div>
    );
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <Header>Wellcome</Header>
      {/* <PhoneCard /> */}
      <Header>Your Favourite Contact here</Header>
      <FavouriteList />
      <hr />

      <AddView />

      <SearchInput onSearch={setSearch} search={search} />
      <PhoneListHeader>
        <SubHeader>Phone List</SubHeader>
      </PhoneListHeader>
      <ListContact data={data} setData={setData} />

      <GroupButton justifyContent="center" NewClassNames={["padding:10px"]}>
        <ButtonCom
          title=""
          type="md"
          icon={<ArrowLeft />}
          disable={page === 1}
          onClick={handlePreviousPage}
        />
        <ButtonCom
          title=""
          icon={<ArrowRight />}
          type="md"
          onClick={handleNextPage}
        />
      </GroupButton>
    </div>
  );
}
