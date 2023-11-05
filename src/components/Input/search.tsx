import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";
import { GlassIcons } from "@goto/configs/svg";
interface InputProps {
  onSearch: (searchValue: string) => void;
  search: string;
}
const InputContainer = styled.div`
  position: "absolute";
  top: 50%;
  left: 50%;
  background: #f4f4f4;
  border: 2px solid #333;
  height: 40px;
  border-radius: 40px;
  padding: 10px;
  width: 50%;
  border-color: #2f3640;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    width: 100%;
  }
  &:focus {
    border: 1.5px solid #000;
  }
`;

const Input = styled.input`
  border: 1px;
  background: none;
  outline: none;
  float: left;
  padding: 0 5px;
  font-size: 16px;
  transition: 0.4s;
  line-height: 40px;
  width: 100%;
`;

const IconsSearch = styled.button`
  color: white;
  float: right;
  width: 40px;
  height: 40px;
  border: none; // Menghilangkan border
  border-radius: 50%;
  background: #e39bff;
  display: flex; // Menambah display flex untuk justify-content dan align-items
  justify-content: center;
  align-items: center;
  margin-top: -40px;
  &:hover {
    cursor: pointer;
  }
`;

export default function SearchInput({ onSearch, search }: InputProps) {
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onSearch(value);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      <InputContainer>
        <Input
          placeholder="Search"
          value={search}
          onChange={handleSearchInput}
        />
        <IconsSearch>
          <GlassIcons />
        </IconsSearch>
      </InputContainer>
    </div>
  );
}
