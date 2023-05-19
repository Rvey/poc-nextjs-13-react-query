"use client";
import React, { Fragment } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Image from "next/image";
import { Str } from "@supercharge/strings/dist";
import NotFound from "@/assets/images/not-found.png";
import dayjs from "dayjs";
import { getData } from "@/query";
import { numberFormatter } from "@/utils/numberFormatter";
import { myFont } from "@/layout";

export default function SimilarCarsCarousel({ category }) {
  const { data, isLoading } = useQuery({
    queryKey: ["categories", category],
    queryFn: () => getData(`products?category=${category}`),
  });

  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <div className="bg-primary-light">
        <div className="mt-5 p-6 text-center">
          <p className=" text-[36px]">ANNONCES SIMILAIRES</p>
        </div>
        <div className="">
          <Swiper
            navigation={true}
            pagination={true}
            modules={[Navigation]}
            className="mySwiper "
            slidesPerView={3}
          >
            {
              data &&
                data?.map((product: any, index) => (
                  <SwiperSlide key={index}>
                    <div className="mx-[50px] flex justify-between">
                      <Fragment key={product?.id}>
                        <div className=" bg-[#e9f1ff] shadow" key={product?.id}>
                          <Link
                            href={`announce/${product["@id"]?.replace(
                              "/products/",
                              ""
                            )}`}
                          >
                            <div className="w-[320px] h-[180px] relative">
                              <Image
                                loader={({ src }) => src}
                                src={
                                  product?.images.length > 0
                                    ? product?.images[0]?.contentUrl
                                    : NotFound
                                }
                                className="object-cover w-full h-full"
                                fill={true}
                                alt=""
                              />
                            </div>
                            <div className="grid grid-cols-10 gap-2">
                              <div className="col-span-7 px-2 pt-4 h-full flex flex-col justify-between w-[220px]">
                                <div>
                                  <h1 className="text-[14px] font-bold break-all h-12">
                                    {Str(product?.title).limit(50, "...").get()}{" "}
                                    <p className="text-[12px] font-bold">
                                      {product?.engine}
                                    </p>
                                  </h1>
                                </div>
                                <hr className="border-y-1 border-solid border-primary-normal " />
                                <div>
                                  <p className="text-[10px] font-bold italic">
                                    {product?.fuel} | {product?.mileage} Km |
                                    {product?.transmission}
                                  </p>
                                </div>
                                <hr className="border-y-1 border-solid border-primary-normal" />
                                <div className="flex flex-col">
                                  <div className="text-sm font-bold relative top-2">
                                    Prix
                                  </div>
                                  <div>
                                    <span
                                      className={`text-2xl text-primary ${myFont.className}`}
                                    >
                                      {numberFormatter(product?.price)},
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
                                <hr className="border-y-1 border-solid border-primary-normal " />
                                <div>
                                  <p className="text-[9px] font-bold text-[#999999] py-2">
                                    Réf. :{" "}
                                    <strong className="text-black">
                                      YY17NHM
                                    </strong>{" "}
                                    Le
                                    {dayjs(product?.dateCreated).format(
                                      "DD/MM/YYYY"
                                    )}
                                  </p>
                                </div>
                              </div>
                              <div className="col-span-3">
                                <div className="grid grid-rows-3 py-2 gap-2">
                                  <div className="row-span-1">
                                    <div className="w-[80px] h-[50px] relative">
                                      <Image
                                        loader={({ src }) => src}
                                        src={
                                          product?.images.length > 0
                                            ? product?.images[0]?.contentUrl
                                            : NotFound
                                        }
                                        className="object-cover w-full h-full"
                                        fill={true}
                                        alt=""
                                        priority={false}
                                      />
                                    </div>
                                  </div>
                                  <div className="row-span-1">
                                    <div className="w-[80px] h-[50px] relative">
                                      <Image
                                        loader={({ src }) => src}
                                        src={
                                          product?.images.length > 0
                                            ? product?.images[0]?.contentUrl
                                            : NotFound
                                        }
                                        className="object-cover w-full h-full"
                                        fill={true}
                                        alt=""
                                        priority={false}
                                      />
                                    </div>
                                  </div>
                                  <div className="row-span-1">
                                    <div className="w-[80px] h-[50px] relative">
                                      <Image
                                        loader={({ src }) => src}
                                        src={
                                          product?.images.length > 0
                                            ? product?.images[0]?.contentUrl
                                            : NotFound
                                        }
                                        className="object-cover w-full h-full"
                                        fill={true}
                                        alt=""
                                        priority={false}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </Fragment>
                    </div>
                  </SwiperSlide>
                ))
              // : ''
            }
          </Swiper>
        </div>
      </div>
    </>
  );
}
