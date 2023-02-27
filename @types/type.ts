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
