"use client";

import { getData } from "@/query";
import { useQuery } from "@tanstack/react-query";
import DisclaimerCard from "../cards/DisclaimerCard";
import CreateAlert from "../cards/CreateAlertCard";
import AnnounceCard from "../cards/AnnounceCard";
import React from "react";
import { useSearchParams } from "next/navigation";
import SortFilter from "../filters/Sort";
import Filter from "../filters/Filter";
import Pagination from "../filters/Pagination";

export default function AnnouncesPageLayout() {
  const searchParams = useSearchParams();
  const [sort, setSort] = React.useState("");
  const [managed, setManaged] = React.useState("");
  const [page, setPage] = React.useState<number>(
    Number(searchParams.get("p") || 1)
  );

  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: () => getData("products"),
    staleTime: 1000 * 60,
  });
  return (
    <div className="mb-6 flex">
      <div className="w-[350px] min-w-[300px] h-screen bg-primary-light">
        <Filter page={page} setPage={setPage} />
      </div>
      <div className="w-full bg-white p-4">
        <DisclaimerCard />
        <SortFilter setManaged={setManaged} setSort={setSort} />

        <div className="my-5">
          <AnnounceCard productsData={products} />
          <Pagination
            itemsPerPage={30}
            setPage={setPage}
            totalItems={products && products["hydra:totalItems"]}
            page={page}
          />
        </div>
        <div className="my-5">
          <CreateAlert />
        </div>
      </div>
    </div>
  );
}
