"use client";

import { getData } from "@/query";
import { checkFilter, checkPriceFilter } from "@/utils/filterHanler";
import { useQuery } from "@tanstack/react-query";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import AutoComplete from "../customInputs/AutoComplete";
import RangeInput from "../customInputs/RangeInput";

export default function Filter({
  page,
  setPage,
}: {
  page: number;
  setPage: any;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [model, setModel] = useState(searchParams.get("model") || "");
  const [brand, setBrand] = useState(searchParams.get("brand") || null);
  const [city, setCity] = useState(searchParams.get("city") || "");
  // ============== input data ==============
console.log("brand", !brand);
  const { data: brands } = useQuery({
    queryKey: ["brands-filter"],
    queryFn: () => getData(`brands?itemsPerPage=1000`),
    staleTime: 1000 * 60,
  });

  const { data: models, refetch: refetchModels } = useQuery({
    queryKey: ["models-filter"],
    queryFn: () => getData(`models?brand=${brand}`),
    enabled: !brand,
  });
  const { data: cities, refetch: refetchCities } = useQuery({
    queryKey: ["cities-filter"],
    queryFn: () => getData(`cities?itemsPerPage=1000`),
  });
  const dataTransmission = [
    { id: "manuelle", name: "manuelle" },
    { id: "automatique", name: "automatique" },
  ];
  const dataCarburant = [
    { id: "diesel", name: "diesel" },
    { id: "essence", name: "essence" },
  ];

  // ============== filter states ==============

  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [transmission, setTransmission] = useState(
    searchParams.get("transmission") || ""
  );
  const [carburant, setCarburant] = useState(
    searchParams.get("carburant") || ""
  );

  useEffect(() => {
    refetchModels();
  }, [brand]);

  return (
    <div className="mt-5 p-2">
      <div className="flex justify-between p-2 ">
        <h2 className="text-3xl font-bold">FILTERS</h2>
        <button
          className="text-[14px] font-bold text-red"
          onClick={() => {
            setModel("");
            setBrand("");
            setCity("");
            setTransmission("");
            setCarburant("");
            setMaxPrice(0);
            setMinPrice(0);
            router.push("/announces");
          }}
        >
          Tout Effacer ()
        </button>
      </div>
      <button
        className="bg-primary text-[14px] text-white w-[150px] h-[50px]"
        onClick={() => {
          // check if the user has selected a brand or a model or transmission or carburant and add it to the url
          const brandFilter = checkFilter(brand, "brand");
          const modelFilter = checkFilter(model, "model");
          const PriceFilter = checkPriceFilter(minPrice, maxPrice);
          const CityFilter = checkFilter(city, "city");
          const transmissionFilter = checkFilter(transmission, "transmission");
          const carburantFilter = checkFilter(carburant, "fuel");
          router.push(
            `/announces?p=${1}${brandFilter}${modelFilter}${transmissionFilter}${carburantFilter}${PriceFilter}${CityFilter}`
          );
        }}
      >
        search
      </button>
      <div className="flex flex-col gap-4 divide-y">
        <AutoComplete
          data={brands}
          title="Marque"
          selectedOption={brand}
          setSelectedOption={setBrand}
          param={searchParams.get("brand")}
        />
        <AutoComplete
          data={models}
          isDisabled={!brand}
          title="Modèle"
          selectedOption={model}
          setSelectedOption={setModel}
          param={searchParams.get("model")}
        />
        <AutoComplete
          data={cities}
          title="Ville"
          selectedOption={city}
          setSelectedOption={setCity}
          param={searchParams.get("model")}
        />
        <AutoComplete
          data={dataCarburant}
          title="Motorisation"
          selectedOption={carburant}
          setSelectedOption={setCarburant}
          param={searchParams.get("fuel")}
        />
        <AutoComplete
          data={dataTransmission}
          title="Transmission"
          selectedOption={transmission}
          setSelectedOption={setTransmission}
          param={searchParams.get("transmission")}
        />

        <div className="flex justify-between flex-col">
          <div className="flex flex-col ">
            <RangeInput
              title="Min Price"
              type="number"
              setInputValue={setMinPrice}
              value={minPrice}
              placeholder="Min"
            />
            <RangeInput
              title="Max Price"
              type="number"
              setInputValue={setMaxPrice}
              value={maxPrice}
              placeholder="Max"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
