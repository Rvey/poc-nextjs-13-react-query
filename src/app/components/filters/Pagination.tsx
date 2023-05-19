import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({
  itemsPerPage,
  totalItems,
  setPage,
  page,
}: {
  itemsPerPage: number;
  totalItems: number;
  page: number;
  setPage: (page: number) => void;
}) {
  const [itemOffset, setItemOffset] = useState(0);
  const searchParams = useSearchParams();
  const router = useRouter();
  // convert the total of items to an array
  const items = new Array(totalItems);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (e: any) => {
    if (searchParams.has("p")) {
      let newParams = searchParams.toString().replace(/p=\d+/, ``);
      router.push(`announces?&p=${e.selected + 1}${newParams}`);
      //@ts-ignore
      setPage(e.selected + 1);
    } else {
      // check if the url contains the page param and delete it
      router.push(`announces?&p=${e.selected + 1}${searchParams.toString()}`);
      //@ts-ignore
      setPage(e.selected + 1);
    }
  };

  return (
    <>
      <ReactPaginate
        className="flex justify-center gap-3 items-center my-3"
        pageClassName=" border-2 border-primary rounded-lg flex justify-center items-center "
        pageLinkClassName="px-4 py-3 text-primary"
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        breakLabel="..."
        breakClassName="px-4 py-3 text-primary border-2 border-primary rounded-lg "
        nextLabel={<ChevronRightIcon className="h-5 w-5 text-gray-500" />}
        previousLabel={<ChevronLeftIcon className="h-5 w-5 text-gray-500" />}
        nextLinkClassName="px-5 py-4 text-primary border-2 border-primary-light hover:bg-secondary-light rounded-lg flex justify-center items-center "
        previousLinkClassName="px-5 py-4 text-primary border-2 border-primary-light hover:bg-secondary-light rounded-lg flex justify-center items-center "
        onPageChange={handlePageClick}
        pageCount={pageCount}
        forcePage={page - 1}
        activeLinkClassName="bg-primary text-white"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
