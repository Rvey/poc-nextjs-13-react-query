"use client";
import Image from "next/image";
import imageSpec from "@/assets/img1.webp";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import AutoComplete from "../customInputs/AutoComplete";
import { getData } from "@/query";

function CreateNewAnnounce() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [model, setModel] = useState(searchParams.get("model") || "");
  const [brand, setBrand] = useState(searchParams.get("brand") || "");
  const [city, setCity] = useState(searchParams.get("city") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [transmission, setTransmission] = useState(
    searchParams.get("transmission") || ""
  );
  const [carburant, setCarburant] = useState(
    searchParams.get("carburant") || ""
  );
  const [prix, setPrix] = useState("");
  const [year, setYear] = useState("");
  const [kilometrage, setKilometrage] = useState("");
  const [puissanceFiscale, setPuissanceFiscale] = useState("");
  const {
    data: brands,
    isLoading: isLoadingBrands,
    isFetching,
    error,
  } = useQuery({
    queryKey: ["brands"],
    queryFn: () => getData(`brands?itemsPerPage=1000`),
  });

  const {
    data: cities,
    isLoading: isLoadingCities,
    isFetching: isFetchingCities,
    error: errorCities,
  } = useQuery({
    queryKey: ["cities"],
    queryFn: () => getData(`cities?itemsPerPage=1000`),
  });

  const {
    data: models,
    isLoading: isLoadingModels,
    isFetching: isFetchingModels,
    error: errorModels,
    refetch,
  } = useQuery({
    queryKey: ["models"],
    queryFn: () => getData(`models?brand=${brand}`),
  });

  const {
    data: categories,
    isLoading: isLoadingCategories,
    isFetching: isFetchingCategories,
    error: errorCategories,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getData(`categories?itemsPerPage=1000`),
  });

  const dataCarburant = [
    { id: "diesel", name: "diesel" },
    { id: "essence", name: "essence" },
  ];
  const dataTransmission = [
    { id: "manuelle", name: "manuelle" },
    { id: "automatique", name: "automatique" },
  ];

  const { mutate } = useMutation({
    mutationFn: (values: any) => {
      return newAnnounce(
        brand,
        model,
        city,
        category,
        carburant,
        transmission,
        parseInt(prix),
        parseInt(kilometrage),
        parseInt(year),
        puissanceFiscale,
        owner?.data?.person
      );
    },
    onSuccess: async (data) => {
      router.push("/announces");
    },
    onError: async () => {
      //   setMessage(`Incorrect Email Or Password`);
    },
  });
  return (
    <>
      <div className="bg-white">
        <div className="h-[50px] bg-yellow"></div>
        <div className="px-[50px] py-5">
          <div className="p-5">
            <p>
              Votre voiture
              <span className="text-[20px] text-primary"> Peugout , 208 </span>
            </p>
            <hr className="text-secondary" />
          </div>
          <div className="p-5">
            <p>Fiche technique du vehicule</p>
          </div>
          <div className="px-10 py-5">
            <div className="grid grid-cols-3 gap-4">
              <div className="py-5 text-center">
                <div className="relative">
                  <AutoComplete
                    data={brands}
                    title=""
                    selectedOption={brand}
                    setSelectedOption={setBrand}
                    param={""}
                  />
                  <label
                    htmlFor="floating_outlined"
                    className="  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 absolute left-1 top-2 z-2 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
                  >
                    Marque
                  </label>
                </div>
              </div>

              <div className="py-5 text-center">
                <div className="relative">
                  <AutoComplete
                    data={models}
                    title=""
                    selectedOption={model}
                    setSelectedOption={setModel}
                    param={""}
                  />
                  <label
                    htmlFor="floating_outlined"
                    className="  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 absolute left-1 top-2 z-2 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
                  >
                    Modele
                  </label>
                </div>
              </div>
              <div className="py-5 text-center">
                <div className="relative">
                  <AutoComplete
                    data={cities}
                    title=""
                    selectedOption={city}
                    setSelectedOption={setCity}
                    param={""}
                  />
                  <label
                    htmlFor="floating_outlined"
                    className="  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 absolute left-1 top-2 z-2 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
                  >
                    Ville
                  </label>
                </div>
              </div>

              <div className="py-5 text-center">
                <div className="relative">
                  <AutoComplete
                    data={categories}
                    title=""
                    selectedOption={category}
                    setSelectedOption={setCategory}
                    param={""}
                  />
                  <label
                    htmlFor="floating_outlined"
                    className="  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 absolute left-1 top-2 z-2 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
                  >
                    Categories
                  </label>
                </div>
              </div>
              <div className="py-5 text-center">
                <div className="relative">
                  <AutoComplete
                    data={dataTransmission}
                    title=""
                    selectedOption={transmission}
                    setSelectedOption={setTransmission}
                    param={""}
                  />
                  <label
                    htmlFor="floating_outlined"
                    className="  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 absolute left-1 top-2 z-2 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
                  >
                    Boite de vitesse
                  </label>
                </div>
              </div>

              <div className="py-5 text-center">
                <div className="relative">
                  <AutoComplete
                    data={dataCarburant}
                    title=""
                    selectedOption={carburant}
                    setSelectedOption={setCarburant}
                    param={""}
                  />
                  <label
                    htmlFor="floating_outlined"
                    className="  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 absolute left-1 top-2 z-2 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
                  >
                    Motorisation
                  </label>
                </div>
              </div>
              <div className="py-5 text-center">
                <div className="flex">
                  <div className="relative basis-3/4">
                    <input
                      type="text"
                      id="floating_outlined"
                      className="dark:focus:border-blue-500  focus:border-blue-600 peer block w-full border-2  border-primary px-2.5 py-2 focus:outline-none focus:ring-0"
                      placeholder=" "
                      onChange={(e) => {
                        setPrix(e.target.value);
                      }}
                    />
                    <label
                      htmlFor="floating_outlined"
                      className=" bg-white  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 absolute left-1 top-2 z-1 origin-[0] -translate-y-4 scale-75 transform  px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
                    >
                      PRIX
                    </label>
                  </div>

                  <span className="   basis-1/4 items-center border-2 border-l-0 border-primary  px-3 py-2 text-sm">
                    DHS
                  </span>
                </div>
              </div>
              <div className="py-5 text-center">
                <div className="flex">
                  <div className="relative basis-3/4">
                    <input
                      type="text"
                      id="floating_outlined"
                      className="dark:focus:border-blue-500  focus:border-blue-600 peer block w-full border-2  border-primary px-2.5 py-2 focus:outline-none focus:ring-0"
                      placeholder=" "
                      onChange={(e) => {
                        setKilometrage(e.target.value);
                      }}
                    />
                    <label
                      htmlFor="floating_outlined"
                      className=" bg-white  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 absolute left-1 top-2 z-1 origin-[0] -translate-y-4 scale-75 transform  px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
                    >
                      Kilometrage
                    </label>
                  </div>

                  <span className="   basis-1/4 items-center border-2 border-l-0 border-primary  px-3 py-2 text-sm">
                    KM
                  </span>
                </div>
              </div>

              <div className="py-5 text-center">
                <div className="flex">
                  <div className="relative basis-3/4">
                    <input
                      type="text"
                      id="floating_outlined"
                      className="dark:focus:border-blue-500  focus:border-blue-600 peer block w-full border-2  border-primary px-2.5 py-2 focus:outline-none focus:ring-0"
                      placeholder=" "
                      onChange={(e) => {
                        setYear(e.target.value);
                      }}
                    />
                    <label
                      htmlFor="floating_outlined"
                      className="  bg-white peer-focus:text-blue-600 peer-focus:dark:text-blue-500 absolute left-1 top-2 z-1 origin-[0] -translate-y-4 scale-75 transform  px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
                    >
                      Mise en circulation
                    </label>
                  </div>

                  <span className="   basis-1/4 items-center border-2 border-l-0 border-primary  px-3 py-2 text-sm">
                    2008
                  </span>
                </div>
              </div>
              <div className="py-5 text-center">
                <div className="flex">
                  <div className="relative basis-3/4">
                    <input
                      type="text"
                      id="floating_outlined"
                      className="dark:focus:border-blue-500  focus:border-blue-600 peer block w-full border-2  border-primary px-2.5 py-2 focus:outline-none focus:ring-0"
                      placeholder=" "
                      onChange={(e) => {
                        setPuissanceFiscale(e.target.value);
                      }}
                    />
                    <label
                      htmlFor="floating_outlined"
                      className=" bg-white  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 absolute left-1 top-2 z-1 origin-[0] -translate-y-4 scale-75 transform  px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
                    >
                      Puissance fiscale
                    </label>
                  </div>

                  <span className="   basis-1/4 items-center border-2 border-l-0 border-primary  px-3 py-2 text-sm">
                    C.V
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-4 bg-primary-light p-5">
              <div className="text-center">
                <div className="relative">
                  <input
                    type="text"
                    id="floating_outlined"
                    className="dark:focus:border-blue-500 focus:border-blue-600 peer block w-full border-2 border-primary  bg-primary-light px-2.5 py-2 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_outlined"
                    className=" peer-focus:text-blue-600  peer-focus:dark:text-blue-500 absolute left-1 top-2 z-1 origin-[0] -translate-y-4 scale-75 transform bg-primary-light  px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
                  >
                    Nbr de proprietaire
                  </label>
                </div>
              </div>

              <div className="text-center">
                <div className="relative">
                  <input
                    type="text"
                    id="floating_outlined"
                    className="dark:focus:border-blue-500 focus:border-blue-600 peer block w-full border-2 border-primary  bg-primary-light px-2.5 py-2 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_outlined"
                    className=" peer-focus:text-blue-600  peer-focus:dark:text-blue-500 absolute left-1 top-2 z-1 origin-[0] -translate-y-4 scale-75 transform bg-primary-light  px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
                  >
                    nbr de cles
                  </label>
                </div>
              </div>
              <div className="text-center">
                <div className="relative">
                  <input
                    type="text"
                    id="floating_outlined"
                    className="dark:focus:border-blue-500 focus:border-blue-600 peer block w-full border-2 border-primary  bg-primary-light px-2.5 py-2 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_outlined"
                    className=" peer-focus:text-blue-600  peer-focus:dark:text-blue-500 absolute left-1 top-2 z-1 origin-[0] -translate-y-4 scale-75 transform bg-primary-light  px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
                  >
                    Nbr de partieres
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5">
            <p>Equipements</p>
          </div>
          <div className="px-10 py-10">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-primary-light text-center ">
                <div className="flex flex-row">
                  <div className="basis-2/12 py-[0.5rem]">
                    <input
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className="  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded focus:ring-2"
                    />
                  </div>
                  <div className="basis-8/12 py-[0.5rem] text-start">
                    <label className=" ml-2 text-[12px] ">Airbags</label>
                  </div>
                  <div className="basis-2/12">
                    {" "}
                    {/* @ts-ignore */}
                    <Image
                      src={imageSpec}
                      width="50"
                      height="50"
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-primary-light  text-center">
                <div className="flex flex-row">
                  <div className="basis-2/12 py-[0.5rem]">
                    <input
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className="  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded focus:ring-2"
                    />
                  </div>
                  <div className="basis-8/12 py-[0.5rem] text-start">
                    <label className=" ml-2 text-[12px] ">
                      Detecteur de pluie
                    </label>
                  </div>
                  <div className="basis-2/12">
                    {" "}
                    {/* @ts-ignore */}
                    <Image
                      src={imageSpec}
                      width="50"
                      height="50"
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-primary-light  text-center">
                <div className="flex flex-row">
                  <div className="basis-2/12 py-[0.5rem]">
                    <input
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className="  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded focus:ring-2"
                    />
                  </div>
                  <div className="basis-8/12 py-[0.5rem] text-start text-start">
                    <label className=" ml-2 text-[12px] ">
                      Detecteur de pluie
                    </label>
                  </div>
                  <div className="basis-2/12">
                    {" "}
                    {/* @ts-ignore */}
                    <Image
                      src={imageSpec}
                      width="50"
                      height="50"
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-primary-light  text-center">
                <div className="flex flex-row">
                  <div className="basis-2/12 py-[0.5rem]">
                    <input
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className="  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded focus:ring-2"
                    />
                  </div>
                  <div className="basis-8/12 py-[0.5rem] text-start">
                    <label className=" ml-2 text-[12px] ">ABS</label>
                  </div>
                  <div className="basis-2/12">
                    {" "}
                    {/* @ts-ignore */}
                    <Image
                      src={imageSpec}
                      width="50"
                      height="50"
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-primary-light  text-center">
                <div className="flex flex-row">
                  <div className="basis-2/12 py-[0.5rem]">
                    <input
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className="  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded focus:ring-2"
                    />
                  </div>
                  <div className="basis-8/12 py-[0.5rem] text-start">
                    <label className=" ml-2 text-[12px] ">
                      Commande au volant
                    </label>
                  </div>
                  <div className="basis-2/12">
                    {" "}
                    {/* @ts-ignore */}
                    <Image
                      src={imageSpec}
                      width="50"
                      height="50"
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-primary-light  text-center">
                <div className="flex flex-row">
                  <div className="basis-2/12 py-[0.5rem]">
                    <input
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className="  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded focus:ring-2"
                    />
                  </div>
                  <div className="basis-8/12 py-[0.5rem] text-start">
                    <label className=" ml-2 text-[12px] ">
                      Commande au volant
                    </label>
                  </div>
                  <div className="basis-2/12">
                    {" "}
                    {/* @ts-ignore */}
                    <Image
                      src={imageSpec}
                      width="50"
                      height="50"
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-primary-light  text-center">
                <div className="flex flex-row">
                  <div className="basis-2/12 py-[0.5rem]">
                    <input
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className="  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded focus:ring-2"
                    />
                  </div>
                  <div className="basis-8/12 py-[0.5rem] text-start">
                    <label className=" ml-2 text-[12px] ">ESP</label>
                  </div>
                  <div className="basis-2/12">
                    {" "}
                    {/* @ts-ignore */}
                    <Image
                      src={imageSpec}
                      width="50"
                      height="50"
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-primary-light  text-center">
                <div className="flex flex-row">
                  <div className="basis-2/12 py-[0.5rem]">
                    <input
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className="  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded focus:ring-2"
                    />
                  </div>
                  <div className="basis-8/12 py-[0.5rem] text-start">
                    <label className=" ml-2 text-[12px] ">Ecran tactile</label>
                  </div>
                  <div className="basis-2/12">
                    {" "}
                    {/* @ts-ignore */}
                    <Image
                      src={imageSpec}
                      width="50"
                      height="50"
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-primary-light  text-center">
                <div className="flex flex-row">
                  <div className="basis-2/12 py-[0.5rem]">
                    <input
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className="  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded focus:ring-2"
                    />
                  </div>
                  <div className="basis-8/12 py-[0.5rem] text-start">
                    <label className=" ml-2 text-[12px] ">Ecran tactile</label>
                  </div>
                  <div className="basis-2/12">
                    {" "}
                    {/* @ts-ignore */}
                    <Image
                      src={imageSpec}
                      width="50"
                      height="50"
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-primary-light  text-center">
                <div className="flex flex-row">
                  <div className="basis-2/12 py-[0.5rem]">
                    <input
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className="  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded focus:ring-2"
                    />
                  </div>
                  <div className="basis-8/12 py-[0.5rem] text-start">
                    <label className=" ml-2 text-[12px] ">
                      Aide au freinage d urgence
                    </label>
                  </div>
                  <div className="basis-2/12">
                    {" "}
                    {/* @ts-ignore */}
                    <Image
                      src={imageSpec}
                      width="50"
                      height="50"
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-primary-light  text-center">
                <div className="flex flex-row">
                  <div className="basis-2/12 py-[0.5rem]">
                    <input
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className="  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded focus:ring-2"
                    />
                  </div>
                  <div className="basis-8/12 py-[0.5rem] text-start">
                    <label className=" ml-2 text-[12px] ">
                      banquette arriere rabattable 1/3-2/3
                    </label>
                  </div>
                  <div className="basis-2/12">
                    {" "}
                    {/* @ts-ignore */}
                    <Image
                      src={imageSpec}
                      width="50"
                      height="50"
                      className="h-auto w-full"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="bg-primary-light  text-center">
                <div className="flex flex-row">
                  <div className="basis-2/12 py-[0.5rem]">
                    <input
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className="  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded focus:ring-2"
                    />
                  </div>
                  <div className="basis-8/12 py-[0.5rem] text-start">
                    <label className=" ml-2 text-[12px] ">
                      banquette arriere rabattable 1/3-2/3
                    </label>
                  </div>
                  <div className="basis-2/12">
                    {" "}
                    {/* @ts-ignore */}
                    <Image
                      src={imageSpec}
                      width="50"
                      height="50"
                      className="h-auto w-full"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="bg-primary-light  text-center">
                <div className="flex flex-row">
                  <div className="basis-2/12 py-[0.5rem]">
                    <input
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className="  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded focus:ring-2"
                    />
                  </div>
                  <div className="basis-8/12 py-[0.5rem] text-start">
                    <label className=" ml-2 text-[12px] ">Systeme audio</label>
                  </div>
                  <div className="basis-2/12">
                    {" "}
                    {/* @ts-ignore */}
                    <Image
                      src={imageSpec}
                      width="50"
                      height="50"
                      className="h-auto w-full"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="bg-primary-light  text-center">
                <div className="flex flex-row">
                  <div className="basis-2/12 py-[0.5rem]">
                    <input
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className="  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded focus:ring-2"
                    />
                  </div>
                  <div className="basis-8/12 py-[0.5rem] text-start">
                    <label className=" ml-2 text-[12px] ">Climatisation</label>
                  </div>
                  <div className="basis-2/12">
                    {" "}
                    {/* @ts-ignore */}
                    <Image
                      src={imageSpec}
                      width="50"
                      height="50"
                      className="h-auto w-full"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="bg-primary-light  text-center">
                <div className="flex flex-row">
                  <div className="basis-2/12 py-[0.5rem]">
                    <input
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className="  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded focus:ring-2"
                    />
                  </div>
                  <div className="basis-8/12 py-[0.5rem] text-start">
                    <label className=" ml-2 text-[12px] ">Climatisation</label>
                  </div>
                  <div className="basis-2/12">
                    {" "}
                    {/* @ts-ignore */}
                    <Image
                      src={imageSpec}
                      width="50"
                      height="50"
                      className="h-auto w-full"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 text-center">
            <button
              className="xl:px-[30px] 2xl:px-[50px] md:px-[20px] h-[60px] bg-primary  border-[1px] border-primary  px-[50px] text-[14px] text-white"
              onClick={() => {
                // @ts-ignore
                mutate();
              }}
            >
              Mettre en vente
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default CreateNewAnnounce;
