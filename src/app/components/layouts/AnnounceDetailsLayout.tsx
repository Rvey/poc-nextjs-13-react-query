"use client";
import { Fragment, useState } from "react";
import Image from "next/image";

import pandaAssistantLogo from "@/assets/ocarzCall.webp";
import Managedby from "@/assets/managedBy.webp";
import PandaAnnonce from "@/assets/pandaAnnonce.webp";
import NotFound from "@/assets/images/not-found.png";
import MiseEnCircIcon from "@/assets/icons/MiseEnCircIcon.png";
import CityIcon from "@/assets/icons/cityIcon.png";
import FuelIcon from "@/assets/icons/fuelIcon.png";
import RoadIcon from "@/assets/icons/roadIcon.png";
import TransmissionIcon from "@/assets/icons/transmissionIcon.png";
import { useRouter } from "next/navigation";
import { myFont } from "@/layout";
import { numberFormatter } from "@/utils/numberFormatter";
import InterstedByCarModal from "../modals/InterstedByCarModal";
import CarSpecsCard from "../cards/CarSpecsCard";
import SimilarCarsCarousel from "../Caroussels/SimilarCarsCarousel";
import { useQuery } from "@tanstack/react-query";
import { getData, getDataByID } from "@/query";

export default function AnnounceDetailsLayout({ id }: any) {
  let [isOpen, setIsOpen] = useState(false);
  let [estimationPrix, setIstimationPrix] = useState("20000");
  let [nomOffre, setNomOffre] = useState("");
  let [villeOffre, setVilleOffre] = useState("");
  const router = useRouter();
  function closeModal() {
    setIsOpen(false);
  }

  const { data } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getDataByID(`products/${id}`),
  });

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="bg-white">
      <div className="my-5 ps-5 pt-5">{/* <Breadcrumbs /> */}</div>
      <div className="grid grid-cols-12">
        <div className="col-span-8  bg-white">
          {/* gallery */}
          <div className="grid grid-cols-12">
            <div className="col-span-8 p-4 ">
              <Image
                className="w-[490px] desktop:w-full object-fill"
                loader={({ src }) => src}
                src={
                  data?.images?.length > 0
                    ? data?.images[0]?.contentUrl
                    : NotFound
                }
                width={490}
                height={490}
                alt=""
              />
            </div>
            <div className="col-span-4  ">
              <div className="grid grid-rows-4 p-4">
                <div className="row-span-2 pb-[10px] ">
                  <Image
                    loader={({ src }) => src}
                    src={
                      data?.images?.length > 0
                        ? data?.images[0]?.contentUrl
                        : NotFound
                    }
                    width={490}
                    height={490}
                    alt=""
                  />
                </div>
                <div className="row-span-2  pt-[10px]">
                  <Image
                    loader={({ src }) => src}
                    src={
                      data?.images?.length > 0
                        ? data?.images[0]?.contentUrl
                        : NotFound
                    }
                    width={490}
                    height={490}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/* vue */}
          <div className="grid grid-cols-6 px-4">
            <div className="col-span-2  pb-4 pe-[3px]">
              {" "}
              <button className="h-[70px] w-full bg-black text-center text-white">
                Galerie
              </button>
            </div>
            <div className="col-span-2  pb-4 pe-[3px]">
              <button className="h-[70px] w-full bg-black text-center text-white  ">
                Vue 360
              </button>
            </div>
            <div className="col-span-2 pb-4">
              <button className="h-[70px] w-full bg-black text-center text-white ">
                Imperfection
              </button>
            </div>
          </div>
          {/* 6 card */}
          <div className="grid h-[130px] grid-cols-10 px-4">
            <div className="py col-span-2 bg-primary-light px-[5px] py-4">
              <div className="flex h-[90px] justify-around bg-white pt-[25px] text-center">
                <div className="text-end">
                  <p className="text-[14px] font-bold">{data?.year}</p>
                  <p className="text-[10px] text-secondary">
                    Mise en circulation
                  </p>
                </div>
                <div>
                  {" "}
                  <Image src={MiseEnCircIcon} alt="" height={30} width={30} />
                </div>
              </div>
            </div>
            <div className="py col-span-2 bg-primary-light px-[5px] py-4">
              <div className="flex h-[90px] justify-around bg-white pt-[25px] text-center">
                <div className="text-end">
                  <p className="text-[14px] font-bold">{data?.city?.name}</p>
                  <p className="text-[10px] text-secondary">Ville</p>
                </div>
                <div>
                  {" "}
                  <Image src={CityIcon} alt="" height={30} width={30} />
                </div>
              </div>
            </div>
            <div className="py col-span-2 bg-primary-light px-[5px] py-4">
              <div className="flex h-[90px] justify-around bg-white pt-[25px] text-center">
                <div className="text-end">
                  <p className="text-[14px] font-bold">{data?.mileage}</p>
                  <p className="text-[10px] text-secondary">Kilometrage</p>
                </div>
                <div>
                  {" "}
                  <Image src={RoadIcon} alt="" height={30} width={30} />
                </div>
              </div>
            </div>
            <div className="py col-span-2 bg-primary-light px-[5px] py-4">
              <div className="flex h-[90px] justify-around bg-white pt-[25px] text-center">
                <div className="text-end">
                  <p className="text-[14px] font-bold">{data?.fuel}</p>
                  <p className="text-[10px] text-secondary">Carburant</p>
                </div>
                <div>
                  {" "}
                  <Image src={FuelIcon} alt="" height={30} width={30} />
                </div>
              </div>
            </div>
            <div className="py col-span-2 bg-primary-light px-[5px] py-4">
              <div className="flex h-[90px] justify-around bg-white pt-[25px] text-center">
                <div className="text-end">
                  <p className="text-[14px] font-bold">{data?.transmission}</p>
                  <p className="text-[10px] text-secondary">Boite de vitesse</p>
                </div>
                <div>
                  {" "}
                  <Image src={TransmissionIcon} alt="" height={30} width={30} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-4 bg-white p-4">
          {/* card info */}
          <div className="relative mx-4">
            <Image
              className="absolute -bottom-2 left-[50%] z-10 translate-x-[-50%] "
              src={PandaAnnonce}
              alt=""
              quality={100}
            />
          </div>
          <div className="relative h-[450px] border-[3px] border-secondary-light">
            <div className="mx-4">
              <div className="absolute -top-1 left-[50%] row-span-2 translate-x-[-50%]  text-center">
                <Image src={Managedby} alt="" quality={100} />
              </div>

              <div className="flex flex-col gap-3 text-center">
                <div className="mt-[75px]">
                  <p className="text-[20px] font-bold ">
                    {data?.title} | {"N/A"}ch{" "}
                  </p>
                  <p className="text-[10px] font-bold uppercase">
                    {data?.city?.name}
                  </p>
                </div>
                <div className="2xl:px-[50px] xl:px-[30px] md:px-[50px] flex  h-[80px] items-center justify-center bg-secondary-light">
                  <div className="flex flex-col">
                    <div className="text-sm font-bold relative top-2 text-left">
                      Prix
                    </div>
                    <div>
                      <span
                        className={`text-4xl text-primary ${myFont.className}`}
                      >
                        {numberFormatter(data?.price)},
                      </span>
                      <span
                        className={`text-primary text-xl ${myFont.className}`}
                      >
                        00
                      </span>
                      <span
                        className={` relative bottom-5 right-7 font-bold text-sm`}
                      >
                        dhs
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    className="xl:px-[30px] 2xl:px-[50px] md:px-[20px] h-[60px]  w-full border-[1px] border-primary  px-[50px] text-[14px] text-primary"
                    onClick={() => {
                      router.push(
                        `https://api.whatsapp.com/send?phone=212691061644&text=I am interested by this vehicle: ${data?.title}`
                      );
                    }}
                  >
                    Interesse par cette voiture
                  </button>
                </div>
                <div className="border-primary bg-primary">
                  <button
                    className="xl:px-[40px] 2xl:px-[90px] h-[60px]  w-full border-[1px] text-[14px] text-white "
                    onClick={() => {
                      openModal();
                    }}
                  >
                    Faire une offre
                  </button>
                </div>
                <div className="flex flex-col gap-3">
                  <div>
                    <p className="text-[12px] font-bold text-[#999999]">
                      <span className="text-black">Réf.:</span>{" "}
                      <strong className="text-primary">YY25NHM</strong>{" "}
                      <span className="text-black">Le</span>{" "}
                      <span>28/03/2023</span>{" "}
                      <span className="text-black">à</span> <span>10:12</span>
                    </p>
                  </div>
                  <hr className="annonce-divider" />
                  <div>
                    <p className="text-[12px] font-bold text-red">
                      Signaler cette annonce
                    </p>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
          {/* card call */}
          <div className="mt-5 flex h-[120px] items-center justify-around rounded-[25px] bg-secondary p-[20px]">
            <div>
              <Image src={pandaAssistantLogo} alt="" />
            </div>
            <div>
              <div className="ml-4 flex items-center italic leading-10 text-white">
                <div className="flex flex-col leading-5">
                  <p className="ml-auto text-[14px] xl:text-[10px]">
                    sur ce modele
                  </p>
                  <p className="text-[24px] xl:text-[14px] ">Une question</p>
                </div>
                <div>
                  <p className="text-[48px] xl:text-[30px]  font-bold">?</p>
                </div>
              </div>
              <div>
                <p className="text-[30px] xl:text-[19px]  font-bold italic text-primary">
                  <a href="tel: 0522 983 283"> 0522 983 283</a>
                </p>
                <p className="text-[8px] xl:text-[5px] font-bold text-white">
                  du lundi au vendredi de 9h a 20h et le samedi de 9h a 12h
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CarSpecsCard
        marque={data?.brand?.name}
        modele={data?.model?.name}
        version={"N/A"}
        motorisation={data?.fuel}
        kilometrage={data?.mileage}
        transmission={data?.transmission}
        puissanceFiscale={data?.powerFiscale}
        ville={data?.city?.name}
        caracterestiqueTechnique={[]}
      />
      <SimilarCarsCarousel category={data?.category} />
      <InterstedByCarModal
        isOpen={isOpen}
        closeModal={closeModal}
        setNomOffre={setNomOffre}
        estimationPrix={estimationPrix}
        openModal={openModal}
        data={data}
        router={router}
        setIstimationPrix={setIstimationPrix}
        setVilleOffre={setVilleOffre}
      />
    </div>
  );
}
