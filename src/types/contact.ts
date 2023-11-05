export interface Phone {
  number: string;
}

export interface ContactProps {
  last_name: string;
  first_name: string;
  id: number;
  phones: Phone[];
}
export interface GetContactListProps {
  phone: {
    contact: ContactProps;
    number: string;
  }[];
}

export interface GetContactDetailProps {
  contact_by_pk: ContactProps;
}

export interface GetContact {
  contact: ContactProps[];
  limit: number;
  offset: number;
}
