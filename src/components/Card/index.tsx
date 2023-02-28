"use client";
import React, { useEffect } from "react";
import { IUserProps } from "@/@types/type";
import { UserRateIncrement } from "@/services/incrementUserRating";
import { GetAllUser } from "@/services/getAllUsers";
import Link from "next/link";
import { useTranslation } from "@/i18n/client";

export default function Card({ params }: any) {
  console.log(params, "params");
  const [users, setUsers] = React.useState<IUserProps[]>([]);
  const { t } = useTranslation(params, "client-page");

  const fetchData = () => {
    GetAllUser().then((data) => {
      setUsers(data?.data?.customerCollection?.edges);
    });
  };
  const [sortedUsers, setSortedUsers] = React.useState<IUserProps[]>([]);

  useEffect(() => {
    const sortableUsers = [...users];
    const sort = sortableUsers.sort((a, b) => b.node.rate - a.node.rate);
    setSortedUsers(sort);
  }, [users]);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {t("company-members")}
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {sortedUsers.map((user: IUserProps) => {
            const { node } = user;
            return (
              <div key={node.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={node.photo}
                    alt={node.firstName}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <p className="mt-1 text-sm text-gray-500">
                      {node.lastName}
                    </p>
                    <h3 className="text-sm text-gray-700">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {node.firstName}
                    </h3>

                    <div className="d-flex flex-row">
                      <button
                        onClick={() => {
                          UserRateIncrement(node.id).then((data) => {
                            fetchData();
                          });
                        }}
                        type="button"
                        className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        {t("rate")}
                        <span className="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                          {node.rate}
                        </span>
                      </button>
                      <Link
                        href={{
                          pathname: `/${params}/details`,
                          query: { id: node.id },
                        }}
                      >
                        <button type="button">{t("see-detail")}</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
