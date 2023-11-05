import styled from "@emotion/styled";
import React from "react";

export default function Header({ children }: any) {
  const Header = styled.h1`
    text-align: center;
    font-size: 48px;
    background: -webkit-linear-gradient(to right, #21d4fd, #0070f3, #b721ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(
      to right,
      #21d4fd,
      #0070f3,
      #b721ff
    ) !important;
    @media (max-width: 768px) {
      font-size: 20px;
      text-align: left;
    }
  `;
  return <Header>{children}</Header>;
}
