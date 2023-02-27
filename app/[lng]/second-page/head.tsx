import React from "react";
import { useTranslation } from "@/i18n";
import { IHeadProps } from "@/@types/type";

export default async function Head({ params: { lng } }: IHeadProps) {
  const { t } = await useTranslation(lng, "second-page");
  console.log("second-page head", lng, t("title"));

  return (
    <>
      <title>{t("title")}</title>
      <meta
        name="description"
        content="A playground to explore new Next.js 13 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching."
      />
    </>
  );
}
