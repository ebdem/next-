import React from "react";

export type IError = {
  message: string;
  code: number;
  status: string;
  details: string;
  type: string;
  errors: string;
};

export interface IHeadProps {
  params: {
    lng: string;
  };
}

export interface ILayoutProps {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}

export interface Address {
  company?: string;
  firstName?: string;
  lastName?: string;
  street1?: string;
  street2?: string;
  city?: string;
  country?: string;
  zip?: string;
}

export interface IUserProps {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  billingAddress: Address;
  rate: number;
  photo: string;
  node: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    billingAddress: Address;
    rate: number;
    photo: string;
  };
}
