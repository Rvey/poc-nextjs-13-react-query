import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { changePassword } from "@/query";

export default function ChangePasswordForm() {
  const router = useRouter();
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const { mutate } = useMutation({
    mutationFn: () => {
      return changePassword(currentPassword, password, repassword);
    },
    onSuccess: async (data) => {
      router.refresh();
    },
  });

  return (
    <div className="px-10 py-5 col-span-3">
      <div className="grid grid-cols-1 gap-4">
        {/* Mot de passe actuel */}
        <div className="py-5 text-center">
          <div className="relative">
            <input
              type="text"
              className="w-full h-12 px-3 text-base placeholder-gray-600 border border-secondary-dark focus:border-primary focus:outline-none"
              placeholder="Mot de passe actuel"
              onChange={(e) => {
                setCurrentPassword(e.target.value);
              }}
            />
            <label
              htmlFor="floating_outlined"
              className="text-gray-500 peer-focus:text-blue-600 absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
            >
              Mot de passe actuel
            </label>
          </div>
        </div>
        {/* Nouveau mot de passe */}
        <div className="py-5 text-center">
          <div className="relative">
            <input
              type="password"
              className="w-full h-12 px-3 text-base placeholder-gray-600 border border-secondary-dark focus:border-primary focus:outline-none"
              placeholder="Nouveau mot de passe"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label
              htmlFor="floating_outlined"
              className="text-gray-500 peer-focus:text-blue-600 absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
            >
              Nouveau mot de passe
            </label>
          </div>
        </div>
        <div className="py-5 text-center">
          <div className="relative">
            <input
              type="password"
              className="w-full h-12 px-3 text-base placeholder-gray-600 border border-secondary-dark focus:border-primary focus:outline-none"
              placeholder="Confirmer le mot de passe"
              onChange={(e) => {
                setRepassword(e.target.value);
              }}
            />
            <label
              htmlFor="floating_outlined"
              className="text-gray-500 peer-focus:text-blue-600 absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
            >
              Confirmer le mot de passe{" "}
            </label>
          </div>
        </div>
      </div>
      <div className="py-5 text-center flex justify-end">
        <button
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
