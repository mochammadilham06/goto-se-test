import styled from "@emotion/styled";
import React from "react";

export default function SubHeader({ children }: any) {
  const SubHeader = styled.h5`
    padding: 0 10px;z
    background: -webkit-linear-gradient(to right, #21d4fd, #0070f3, #b721ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(
      to right,
      #21d4fd,
      #0070f3,
      #b721ff
    ) !important;
  `;
  return <SubHeader>{children}</SubHeader>;
}
