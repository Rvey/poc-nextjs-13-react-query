import React, { useEffect, useState } from "react";

import Select from "react-select";

type Props = {
  data: any;
  setSelectedOption: (value: any) => void;
  param: string | number | null | undefined;
  title?: string;
  placeholder?: string;
};
export default function AutoComplete({
  data,
  setSelectedOption,
  param,
  isDisabled = false,
  title,
  placeholder,
}: any) {
  let selected = data?.find((item: any) => item.id == param);
  // if theres selected option move it to the top of the list
  if (selected) {
    data = data?.filter((item: any) => item.id != param);
    data?.unshift(selected);
  }
  const styleConfig = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: "transparent",
      borderRadius: "0",
      margin: "0px",
      fontSize: "12px",
      padding: "5px",
    }),
    option: (styles: any, { data, isDisabled, isSelected }: any) => {
      return {
        ...styles,
        color: !isSelected ? "#000" : "#fff",
        cursor: isDisabled ? "not-allowed" : "default",
        fontSize: "12px",
        borderRadius: "0px",
        marginTop: "5px",
        padding: "10px",
        Index: "1000",
      };
    },
    menu: (styles: any) => ({
      ...styles,
      borderRadius: "0px",
    }),
  };
  return (
    <>
      <div className="flex flex-wrap justify-between">
        <div className="w-[7rem]">
          {title && <p className="font-bold text-secondary mt-2">{title}</p>}
        </div>
        <div className="w-full">
          {data ? (
            <Select
              key={selected}
              styles={styleConfig}
              classNamePrefix="react-select"
              defaultValue={{
                label: selected?.name ? selected?.name : placeholder,
                value: selected?.id ? selected?.id : "",
              }}
              placeholder={placeholder}
              isDisabled={isDisabled}
              isLoading={false}
              isClearable
              isSearchable
              onChange={(e) => {
                setSelectedOption(e?.value);
              }}
              options={data?.map((el: any) => ({
                label: el.name,
                value: el.id,
              }))}
            />
          ) : (
            <div>
              <Select
                styles={styleConfig}
                isLoading={true}
                placeholder="Chargement"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
