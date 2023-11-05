import FavouriteAvatar from "@goto/components/Avatar/favourite";
import React from "react";

export default function FavouriteList() {
  return (
    <div
      style={{
        display: "flex",
        overflowX: "scroll",
        overflowY: "hidden",
        gap: "10px",
      }}
    >
      <FavouriteAvatar name="James" />
    </div>
  );
}
