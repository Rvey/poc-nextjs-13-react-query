import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import AutoComplete from "../customInputs/AutoComplete";
import { updateProfile } from "@/query";

export default function InfoForm(dataPeople) {
  const router = useRouter();

  const [nom, setNom] = useState(dataPeople?.dataPeople?.firstName);
  const [prenom, setPrenom] = useState(dataPeople?.dataPeople?.lastName);
  const [telephone, setTelephone] = useState(dataPeople?.dataPeople?.phone);
  const [email, setEmail] = useState(dataPeople?.dataPeople?.email);

  const { mutate } = useMutation({
    mutationFn: () => {
      return updateProfile(
        dataPeople?.dataPeople?.id,
        nom,
        prenom,
        email,
        telephone
      );
    },
    onSuccess: async (data) => {
      router.refresh();
    },
  });
  return (
    <div className="px-10 py-5 col-span-3">
      <div className="grid grid-cols-2 gap-4">
        {/* first name */}
        <div className="py-5 text-center">
          <div className="relative">
            <input
              defaultValue={dataPeople?.dataPeople?.firstName}
              type="text"
              className="w-full h-12 px-3 text-base placeholder-gray-600 border border-secondary-dark focus:border-primary focus:outline-none"
              placeholder="Nom"
              onChange={(e) => {
                setNom(e.target.value);
              }}
            />
            <label
              htmlFor="floating_outlined"
              className="text-gray-500 peer-focus:text-blue-600 absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
            >
              Nom
            </label>
          </div>
        </div>
        {/* last name */}
        <div className="py-5 text-center">
          <div className="relative">
            <input
              defaultValue={dataPeople?.dataPeople?.lastName}
              type="text"
              className="w-full h-12 px-3 text-base placeholder-gray-600 border border-secondary-dark focus:border-primary focus:outline-none"
              placeholder="Prenom"
              onChange={(e) => {
                setPrenom(e.target.value);
              }}
            />
            <label
              htmlFor="floating_outlined"
              className="text-gray-500 peer-focus:text-blue-600 absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
            >
              Prenom
            </label>
          </div>
        </div>
        {/* phone number */}
        <div className="py-5 text-center">
          <div className="relative">
            <input
              defaultValue={dataPeople?.dataPeople?.phone}
              type="text"
              className="w-full h-12 px-3 text-base placeholder-gray-600 border border-secondary-dark focus:border-primary focus:outline-none"
              placeholder="telephone"
              onChange={(e) => {
                setTelephone(e.target.value);
              }}
            />
            <label
              htmlFor="floating_outlined"
              className="text-gray-500 peer-focus:text-blue-600 absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
            >
              telephone
            </label>
          </div>
        </div>
        {/* email */}
        <div className="py-5 text-center">
          <div className="relative">
            <input
              defaultValue={dataPeople?.dataPeople?.email}
              type="email"
              className="w-full h-12 px-3 text-base placeholder-gray-600 border border-secondary-dark focus:border-primary focus:outline-none"
              placeholder="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label
              htmlFor="floating_outlined"
              className="text-gray-500 peer-focus:text-blue-600 absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
            >
              Email
            </label>
          </div>
        </div>
        <div className="py-5 text-center">
            <AutoComplete  />
          </div>
      </div>
      <div className="py-5 text-center flex justify-end">
        <button
          type="submit"
          className="bg-primary text-[14px] text-white w-[150px] h-[50px]"
          onClick={() => {
            // @ts-ignore
            mutate();
          }}
        >
          SAUVEGARDER
        </button>
      </div>
    </div>
  );
}
