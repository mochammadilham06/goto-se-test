import { ContactProps } from "@goto/types/contact";
import { useState, useEffect } from "react";

function useToggleFavourite(
  favouriteContacts: ContactProps[],
  setFavouriteContacts: any
) {
  const isFavourite = (contact: ContactProps) => {
    return favouriteContacts?.some(
      (favourite: ContactProps) => favourite.id === contact.id
    );
  };

  const toggleFavourite = (contact: ContactProps) => {
    let updateContact;
    if (isFavourite(contact)) {
      updateContact = favouriteContacts?.filter(
        (favourite: ContactProps) => favourite.id !== contact.id
      );
    } else {
      updateContact = [...favouriteContacts, contact];
    }
    setFavouriteContacts(updateContact);

    localStorage.setItem("favourite-contact", JSON.stringify(updateContact));
  };

  useEffect(() => {
    const storedFavouriteContacts = localStorage.getItem("favourite-contact");
    if (storedFavouriteContacts) {
      const parsedFavouriteContacts = JSON.parse(storedFavouriteContacts);
      setFavouriteContacts(parsedFavouriteContacts);
    }
  }, []);

  return { favouriteContacts, toggleFavourite, isFavourite };
}

export default useToggleFavourite;
