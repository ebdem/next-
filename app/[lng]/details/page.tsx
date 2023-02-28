"use client";
import React, { useEffect, useState } from "react";
import { Header } from "@/layout/header";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useTranslation } from "@/i18n/client";
import { Footer } from "@/layout/footer/client";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "@/redux/features/detailSlice";

export default function Page({ params }: { params: { lng: string } }) {
  const { t } = useTranslation(params?.lng, "second-page");
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const search = searchParams.get("id");
  const { detail, status } = useSelector((state: any) => state.detail);

  useEffect(() => {
    dispatch(getDetail(search));
  }, []);

  return (
    <>
      <main>
        {status === "loading" ? (
          <div className="flex items-center justify-center min-h-screen">
            <button
              type="button"
              className="bg-indigo-400 h-max w-max rounded-lg text-white font-bold hover:bg-indigo-300 hover:cursor-not-allowed duration-[500ms,800ms]"
              disabled
            >
              <div className="flex items-center justify-center m-[10px]">
                <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4" />
              </div>
              <div className="ml-2">
                Processing... <div></div>
              </div>
            </button>
          </div>
        ) : (
          <>
            <Header heading={t("h1")} />
            <div>
              <div className="w-full max-w-lg py-8 flex flex-row items-center justify-center mx-auto bg-[#FFFBFB] rounded-lg shadow-xl">
                <div className="flex flex-col md:flex-row w-3/4 md:w-5/6 space-x-0 md:space-x-8">
                  <div className="w-full md:w-2/5 flex flex-col items-center justify-center">
                    <figure className="w-1/2 md:w-full  rounded-full overflow-hidden">
                      <img src={detail?.photo} alt={detail?.firstName} />
                    </figure>
                  </div>
                  <div className="w-full md:w-3/5 space-y-4 flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center">
                      <h1 className="text-center md:text-left text-2xl font-bold text-gray-900">
                        {detail?.firstName + " " + detail?.lastName}
                      </h1>
                      <p className="inline text-gray-700 font-normal leading-6 w-full text-base">
                        {detail?.title}
                      </p>
                    </div>
                    <ul className="space-y-4  md:space-y-0 space-x-0 md:space-x-4 flex flex-col md:flex-row text-left justify-center">
                      <li className="text-sm">
                        <i className="iconoir-pin-alt mr-2"></i>
                        {detail?.address}
                      </li>
                    </ul>

                    <ul className="space-x-4 flex flex-row justify-center w-full mb-4">
                      <li className="text-sm text-gray-800">
                        <strong className="text-gray-900">
                          {detail?.phoneNumber ?? "88877766333"}
                        </strong>
                      </li>
                      <li className="text-sm text-gray-800">
                        <strong className="text-gray-900">
                          {detail?.rate}
                        </strong>{" "}
                        Rate
                      </li>
                    </ul>
                    <Link href={`/${params?.lng}`}>
                      <button className="transition-colors bg-purple-700 hover:bg-purple-800 p-2 rounded-sm w-full text-white text-hover shadow-md shadow-purple-900">
                        Go Home
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
      <Footer lng={params?.lng} path={`/details?id=${search}`} />
    </>
  );
}
