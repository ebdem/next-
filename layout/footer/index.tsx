import React from "react";
import { useTranslation } from "@/i18n";
import { FooterBase } from "./FooterBase";

export const Footer = async ({ lng, path }: any) => {
  const { i18n } = await useTranslation(lng, "footer");
  return <FooterBase i18n={i18n} lng={lng} path={path} />;
};
