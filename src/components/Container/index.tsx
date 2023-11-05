import styled from "@emotion/styled";
import React from "react";

export default function Container({ children }: any) {
  const Container = styled.div`
    max-width: 1140px;
    margin: 0 auto;
    padding: 15px;
    // box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    @media (max-width: 1024px) {
      max-width: 100%;
    }
  `;
  return <Container>{children}</Container>;
}
