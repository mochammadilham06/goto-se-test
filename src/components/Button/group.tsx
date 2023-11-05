import React from "react";
import styled from "@emotion/styled";

type ButtonGroupProps = {
  type?: "row" | "col";
  children: React.ReactNode;
  justifyContent?: "center" | "space-between" | "start" | "end";
  NewClassNames?: string[];
};

const ButtonGroup = styled.div<ButtonGroupProps>`
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent === "space-between"
      ? "space-between"
      : props.justifyContent === "center"
      ? "center"
      : props.justifyContent === "start"
      ? "start"
      : "end"};
  gap: 5px;
  ${(props) => props.NewClassNames};
  flex-direction: ${(props) => (props.type === "col" ? "column" : "row")};
`;

export default function GroupButton({
  type,
  children,
  justifyContent = "space-between",
  NewClassNames,
}: ButtonGroupProps) {
  return (
    <ButtonGroup
      type={type}
      justifyContent={justifyContent}
      NewClassNames={NewClassNames}
    >
      {children}
    </ButtonGroup>
  );
}
