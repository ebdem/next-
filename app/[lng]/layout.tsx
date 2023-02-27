import "./global.css";
import React from "react";
import { dir } from "i18next";
import { languages } from "@/i18n/settings";
import { ILayoutProps } from "@/@types/type";
import { Providers } from "@/redux/provider";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: ILayoutProps) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
