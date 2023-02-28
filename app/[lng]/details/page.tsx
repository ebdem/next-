"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from "@/i18n/client";
import { Footer } from "@/layout/footer";
import { Header } from "@/layout/header";
import { GetSingleUser } from "@/services/getSingleUser";
import Link from "next/link";

export default function Page({
  params,
  searchParams,
}: {
  searchParams: { id: string };
  params: { lng: string };
}) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    GetSingleUser(searchParams?.id).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);
  const { t } = useTranslation(params?.lng, "second-page");
  //const { data } = await GetSingleUser(searchParams?.id as string);
  return (
    <>
      <main>
        <Header heading={t("h1")} />

        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <div className="w-full max-w-lg py-8 flex flex-row items-center justify-center mx-auto bg-[#FFFBFB] rounded-lg shadow-xl">
              <div className="flex flex-col md:flex-row w-3/4 md:w-5/6 space-x-0 md:space-x-8">
                <div className="w-full md:w-2/5 flex flex-col items-center justify-center">
                  <figure className="w-1/2 md:w-full  rounded-full overflow-hidden">
                    <img
                      src={data?.customer?.photo}
                      alt={data?.customer?.firstName}
                    />
                  </figure>
                </div>
                <div className="w-full md:w-3/5 space-y-4 flex flex-col justify-center items-center">
                  <div className="flex flex-col justify-center">
                    <h1 className="text-center md:text-left text-2xl font-bold text-gray-900">
                      {data?.customer?.firstName +
                        " " +
                        data?.customer?.lastName}
                    </h1>
                    <p className="inline text-gray-700 font-normal leading-6 w-full text-base">
                      {data?.customer?.title}
                    </p>
                  </div>
                  <ul className="space-y-4  md:space-y-0 space-x-0 md:space-x-4 flex flex-col md:flex-row text-left justify-center">
                    <li className="text-sm">
                      <i className="iconoir-pin-alt mr-2"></i>
                      {data?.customer?.address}
                    </li>
                  </ul>

                  <ul className="space-x-4 flex flex-row justify-center w-full mb-4">
                    <li className="text-sm text-gray-800">
                      <strong className="text-gray-900">
                        {data?.customer?.phoneNumber ?? "88877766333"}
                      </strong>
                    </li>
                    <li className="text-sm text-gray-800">
                      <strong className="text-gray-900">
                        {data?.customer?.rate}
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
        )}
      </main>
    </>
  );
}
