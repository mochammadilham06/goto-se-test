import React, { Fragment } from "react";
import styled from "@emotion/styled";
type FavouriteProps = {
  name: string;
};
export default function FavouriteAvatar({ name }: FavouriteProps) {
  const AvatarContainer = styled.div`
    position: relative;
    padding: 10px;
  `;

  const Avatar = styled.div`
    width: 100px;
    height: 100px;
    position: relative;
  `;

  const AvatarImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 32%;
    object-fit: cover;
  `;

  const RemoveIcons = styled.div`
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: black;
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
  `;

  const AvatarName = styled.p`
    text-align: center;
    font-weight: bold;
    color: #333;
  `;
  return (
    <Fragment>
      <AvatarContainer>
        <Avatar>
          <AvatarImage src="https://picsum.photos/200" />
          <RemoveIcons>X</RemoveIcons>
        </Avatar>
        <AvatarName>{name}</AvatarName>
      </AvatarContainer>
      <AvatarContainer>
        <Avatar>
          <AvatarImage src="https://picsum.photos/200" />
          <RemoveIcons>X</RemoveIcons>
        </Avatar>
        <AvatarName>{name}</AvatarName>
      </AvatarContainer>
      <AvatarContainer>
        <Avatar>
          <AvatarImage src="https://picsum.photos/200" />
          <RemoveIcons>X</RemoveIcons>
        </Avatar>
        <AvatarName>{name}</AvatarName>
      </AvatarContainer>
      <AvatarContainer>
        <Avatar>
          <AvatarImage src="https://picsum.photos/200" />
          <RemoveIcons>X</RemoveIcons>
        </Avatar>
        <AvatarName>{name}</AvatarName>
      </AvatarContainer>
      <AvatarContainer>
        <Avatar>
          <AvatarImage src="https://picsum.photos/200" />
          <RemoveIcons>X</RemoveIcons>
        </Avatar>
        <AvatarName>{name}</AvatarName>
      </AvatarContainer>
    </Fragment>
  );
}
