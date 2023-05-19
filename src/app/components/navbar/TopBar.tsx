"use client";
import UserIcon from "@/assets/logo/user.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArrowDownCircleIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  BookmarkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  Cog6ToothIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline";
import { Popover } from "@headlessui/react";
import Link from "next/link";
import { Str } from "@supercharge/strings/dist";

const TopBar = () => {
  const router = useRouter();
  const decodedToken = null;

  let data = null;

  return (
    <div className="flex h-14 items-center justify-between bg-black px-10 text-sm font-bold text-white">
      {/* right side buttons */}
      <div className="flex gap-2 xl:hidden">
        <button
          className="h-14 px-12 2xl:px-4 hover:bg-secondary"
          onClick={() => {
            decodedToken ? router.push("/newAnnounce") : router.push("/login");
          }}
        >
          Vendre une voiture
        </button>
        <button
          className="h-14 px-12 2xl:px-4 hover:bg-secondary"
          onClick={() => {
            router.push("/announces");
          }}
        >
          Acheter une voiture
        </button>
        <button className="h-14 px-12 2xl:px-4 hover:bg-secondary">
          Conseils{" "}
          <span className="uppercase">
            <span className="text-primary">o</span>
            <span>car</span>
            <span className="text-primary">z</span>
          </span>
        </button>
      </div>
      <div className="hidden xl:flex gap-2">
        <Popover className="flex">
          {({ open }) => (
            <>
              <Popover.Button
                as={"button"}
                className="border-r-2 border-secondary p-4 hover:bg-secondary outline-none"
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </Popover.Button>
              <Popover.Panel className="absolute z-10 top-14 bg-black text-white py-3 w-96 drop-shadow-md">
                <div className="flex flex-col justify-start divide-y divide-trueGray-600">
                  <Popover.Button
                    className="h-14 px-12 2xl:px-4 hover:bg-secondary"
                    onClick={() => {
                      router.push("/newAnnounce");
                    }}
                  >
                    Vendre une voiture
                  </Popover.Button>
                  <Popover.Button
                    className="h-14 px-12 2xl:px-4 hover:bg-secondary"
                    onClick={() => {
                      router.push("/announces");
                    }}
                  >
                    Acheter une voiture
                  </Popover.Button>
                  <Popover.Button className="h-14 px-12 2xl:px-4 hover:bg-secondary">
                    Conseils{" "}
                    <span className="uppercase">
                      <span className="text-primary">o</span>
                      <span>car</span>
                      <span className="text-primary">z</span>
                    </span>
                  </Popover.Button>
                </div>
              </Popover.Panel>
            </>
          )}
        </Popover>
      </div>
      <div className="flex h-14">
        <button className="border-x-2 border-secondary px-12 text-white hover:bg-secondary">
          <div className="capitalize">
            contactez-nous <br />{" "}
            <span className="xl:text-[12pt] 2xl:text-[14pt] md:text-[12px] text-yellow">
              <a href="tel:0522 983 283">0522 983 283</a>
            </span>
          </div>
        </button>

        {decodedToken ? (
          <Popover className="flex">
            {({ open }) => (
              <>
                <Popover.Button
                  as={"button"}
                  className="border-r-2 border-secondary px-5 hover:bg-secondary outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span>
                      <Image
                        src={UserIcon}
                        alt="advBar"
                        width={19}
                        height={20}
                      />
                    </span>{" "}
                    <span className="capitalize">
                      {Str(data?.data?.fullName).limit(10, "...").get()}{" "}
                    </span>
                    {!open ? (
                      <span>
                        <ChevronDownIcon className="h-6 w-6 text-gray-500" />
                      </span>
                    ) : (
                      <span>
                        <ChevronUpIcon className="h-6 w-6 text-gray-500" />
                      </span>
                    )}
                  </div>
                </Popover.Button>
                <Popover.Panel className="absolute z-10 top-14 bg-white py-3 text-black w-[215px] drop-shadow-md">
                  <div className="flex flex-col justify-start gap-2">
                    <Popover.Button
                      as={Link}
                      href="/my-announces"
                      className="text-left hover:bg-primary-light py-3 px-4 flex gap-3 items-center"
                    >
                      <MegaphoneIcon className="h-6 w-6 text-gray-500" />
                      Mes Annonces
                    </Popover.Button>
                    <Popover.Button
                      as={Link}
                      href="/my-profile"
                      className="text-left hover:bg-primary-light py-3 px-4 flex gap-3 items-center"
                    >
                      <Cog6ToothIcon className="h-6 w-6 text-gray-500" />
                      Réglages
                    </Popover.Button>
                    <button
                      className="text-left hover:bg-red-100  text-red-600 py-3 px-4 flex gap-3 items-center"
                      onClick={() => {
                        typeof window !== "undefined" &&
                          window.localStorage.removeItem("token");
                        router.push("/login");
                      }}
                    >
                      <ArrowRightOnRectangleIcon className="h-6 w-6" />
                      Se déconnecter
                    </button>
                  </div>
                </Popover.Panel>
              </>
            )}
          </Popover>
        ) : (
          <button
            className="border-r-2 border-secondary px-12 hover:bg-secondary"
            onClick={() => {
              router.push("/login");
            }}
          >
            <div className="flex items-center gap-4">
              <span>
                <Image src={UserIcon} alt="advBar" width={19} height={20} />
              </span>{" "}
              <span className="capitalize">Me connecter</span>
            </div>
          </button>
        )}
      </div>
    </div>
  );
};
export default TopBar;
