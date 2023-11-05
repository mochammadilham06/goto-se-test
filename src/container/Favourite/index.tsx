import FavouriteAvatar from "@goto/components/Avatar/favourite";
import React from "react";
interface FavouriteContact {
  favouriteContacts?: any;
  setFavouriteContacts?: any;
  toggleFavourite?: any;
}

export default function FavouriteList({
  favouriteContacts,
  setFavouriteContacts,
  toggleFavourite,
}: FavouriteContact) {
  return (
    <div
      style={{
        display: "flex",
        overflowX: "scroll",
        overflowY: "hidden",
        gap: "10px",
      }}
    >
      <FavouriteAvatar
        favouriteContacts={favouriteContacts}
        toggleFavourite={toggleFavourite}
      />
    </div>
  );
}
