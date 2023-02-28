import React from "react";
import { i18n } from "i18next";
import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "@/i18n/settings";

export const FooterBase = ({
  i18n,
  lng,
  path = "",
}: {
  i18n: i18n;
  lng: string;
  path: string;
}) => {
  const t = i18n.getFixedT(lng, "footer");
  return (
    <footer>
      <Trans i18nKey="languageSwitcher" t={t}>
        {/* @ts-expect-error Trans interpolation */}
        Switch from <strong>{{ lng }}</strong> to:{" "}
      </Trans>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && " | "}
              <Link href={`/${l}${path}`}>{l}</Link>
            </span>
          );
        })}
      <p>{t("description")}</p>
      <p
        style={{
          fontSize: "smaller",
          fontStyle: "italic",
          marginTop: 20,
        }}
      >
        <Trans i18nKey="helpLocize" t={t}>
          With using locize and i18next you directly support the future of .
        </Trans>
      </p>
    </footer>
  );
};
