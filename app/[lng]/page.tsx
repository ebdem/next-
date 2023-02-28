import React from "react";
import { Trans } from "react-i18next/TransWithoutContext";
import { fallbackLng, languages } from "@/i18n/settings";
import { useTranslation } from "@/i18n";
import { Header } from "@/layout/header";
import { Footer } from "@/layout/footer";
import Card from "@/components/Card";
import styles from "./styles.module.scss";

export const dynamic = "force-static";
export default async function Page({
  params: { lng },
}: {
  params: {
    lng: string;
  };
}) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await useTranslation(lng);

  return (
    <>
      <main className={styles.container}>
        <Header heading={t("h1")} />
        <h2>
          <Trans t={t} i18nKey="welcome">
            Welcome to the Company Portal
          </Trans>
        </h2>
        <hr style={{ marginTop: 20, width: "90%" }} />
        <Card />
      </main>
      {/* @ts-expect-error Server Component */}
      <Footer lng={lng} />
    </>
  );
}
