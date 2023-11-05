import React from "react";
import styled from "@emotion/styled";

type ButtonProps = {
  title: string;
  onClick?: () => void | undefined;
  type?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  classNames?: string[];
  variant?: "default" | "cancel" | "danger";
  disable?: boolean;
};

export default function ButtonCom({
  title,
  onClick,
  type,
  icon,
  variant = "default",
  classNames,
  disable,
}: ButtonProps) {
  const getButtonStyles = () => {
    switch (type) {
      case "sm":
        return `
          padding: 8px 16px;
          font-size: 14px;
        `;
      case "md":
        return `
          padding: 12px 24px;
          font-size: 18px;
        `;
      case "lg":
        return `
          padding: 16px 32px;
          font-size: 24px;
        `;

      default:
        return `
          padding: 12px 12px;
          font-size: 18px;
        `;
    }
  };
  const getVariant = () => {
    switch (variant) {
      case "cancel":
        return `
        background-color:#ccc;
        `;
      case "danger":
        return `
        background-color:#F2476A;
        `;
      default:
        return `
        background-color:#e39bff;
        `;
    }
  };

  const Button = styled.button`
    ${getVariant()}
    border: none;
    border-radius: 14px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    display: flex;
    align-items: center;

    ${getButtonStyles()}

    &:hover {
      background-color: pink;
      color: white;
    }
    ${classNames?.join("; ")}
  `;

  const IconContainer = styled.span`
    width: 20px;
    height: 20px;
  `;
  return (
    <Button onClick={onClick} disabled={disable}>
      {icon && <IconContainer>{icon}</IconContainer>}
      {title}
    </Button>
  );
}
