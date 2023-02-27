import React from "react";
import Link from "next/link";
import { useTranslation } from "@/i18n";
import { Header } from "@/layout/header";
import { Footer } from "@/layout/footer";

export default async function Page({
  params: { lng },
}: {
  params: {
    lng: string;
  };
}) {
  const { t } = await useTranslation(lng, "details");
  return (
    <>
      <main>
        <Header heading={t("h1")} />
        <Link href={`/${lng}`}>
          <button type="button">{t("back-to-home")}</button>
        </Link>
      </main>
      {/* @ts-expect-error Server Component */}
      <Footer lng={lng} path="/second-page" />
    </>
  );
}
