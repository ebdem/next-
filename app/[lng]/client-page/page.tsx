"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "@/i18n/client";
import { Header } from "@/layout/header";
import { Footer } from "@/layout/footer/client";
import { useAppDispatch, useAppSelector } from "@/hooks/useSliceCustomHooks";
import { decrement, increment } from "@/redux/features/counterSlice";

export default function Page({
  params: { lng },
}: {
  params: {
    lng: string;
  };
}) {
  const { t } = useTranslation(lng, "client-page");
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <>
      <main>
        <Header heading={t("h1")} />
        <div>{counter}</div>
        <div>
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(increment())}>+</button>
        </div>
        <Link href={`/${lng}`}>
          <button type="button">{t("back-to-home")}</button>
        </Link>
      </main>
      <Footer lng={lng} path="/client-page" />
    </>
  );
}
