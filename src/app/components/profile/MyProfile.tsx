"use client";

import { myFont } from "@/layout";
import {
  ChevronDoubleRightIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import ChangePasswordForm from "../forms/ChangePasswordForm";
import InfoForm from "../forms/InfoForm";
import React from "react";

export default function MyProfile() {
  // const {
  //   data:owner,
  //   isLoading,
  // } = useQuery({
  //   queryKey: ["user", decodedToken?.id],
  //   queryFn: getCurrentUser,
  //   enabled: !!decodedToken,
  // });
  // const urlProfil = owner?.data?.person?.replace('/p','p')
  // const { data: dataPeople, isLoading: loadingAnnounce, isFetching, error, refetch, isRefetching } =
  // useQuery({
  //   queryKey: ["myInfo"],
  //   queryFn: () => getPeople(urlProfil),
  // });

  const [tab, setTab] = React.useState(0);
  return (
    <div className="bg-white">
      <div className="h-[50px] bg-yellow"></div>
      <div className="px-[50px] py-5">
        <div className="p-5 capitalize font-bold text-xl">
          <p>
            Welcome back,{" "}
            <span className={`text-[20px] text-primary ${myFont.className}`}>
              {"test"}
            </span>
          </p>
          <hr className="text-secondary" />
        </div>
        <div className="grid grid-cols-4 lg:grid-cols-1">
          <div className="p-5 col-span-1 lg:grid-row-span-1">
            {/* toggle button */}
            <div className="flex gap-3 flex-col">
              <button
                onClick={() => setTab(0)}
                className="py-6 px-4 bg-primary-light font-bold flex flex-row gap-3 justify-between w-full"
              >
                <div className={`${tab == 0 ? "text-primary" : ""}`}>
                  Modifier vos informations
                </div>
                <div>
                  <ChevronDoubleRightIcon className="h-6 w-6 text-primary" />
                </div>
              </button>
              <button
                onClick={() => setTab(1)}
                className="py-6 px-4 bg-primary-light font-bold flex flex-row gap-3 justify-between w-full"
              >
                <div className={`${tab == 1 ? "text-primary" : ""}`}>
                  {" "}
                  Modifier le mot de passe
                </div>
                <div>
                  <ChevronRightIcon className="h-6 w-6 text-primary" />
                </div>
              </button>
            </div>
          </div>
          {tab === 0 ? (
            <InfoForm dataPeople={null} />
          ) : (
            <ChangePasswordForm />
          )}
        </div>
      </div>
    </div>
  );
}
