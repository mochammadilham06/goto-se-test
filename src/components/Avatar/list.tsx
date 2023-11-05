import React, { Fragment } from "react";
import styled from "@emotion/styled";
import { ContactProps } from "src/types/contact";
type FavouriteProps = {
  data: ContactProps | null;
};
export default function ListNumber({ data }: FavouriteProps) {
  const Avatar = styled.div`
    width: 70px;
    height: 70px;
    position: relative;
  `;

  const AvatarImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 32%;
    object-fit: cover;
  `;
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <Avatar>
          <AvatarImage src="https://picsum.photos/200" />
        </Avatar>
        <div>
          <p
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#86878d",
              margin: "0",
            }}
          >
            {`${data?.first_name} ${data?.last_name}`}
          </p>
          <div
            style={{
              fontSize: "14px",
              fontWeight: "normal",
              color: "#444444",
              margin: "0",
              display: "flex",
              gap: "10px",
            }}
          >
            {}
            {data?.phones?.slice(0, 3).map((item, index) => (
              <p key={index}>{item.number}</p>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
