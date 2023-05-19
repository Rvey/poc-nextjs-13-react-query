"use client";
import CreateNewAnnounce from "@/components/forms/CreateNewAnnounceForm";
import { useRouter } from "next/navigation";

export default async function NewAnnounce() {
  const router = useRouter();
  const token =
    typeof window !== "undefined" ? window.localStorage.getItem("token") : null;

  return token && token != null ? (
    <div>
      <CreateNewAnnounce />
    </div>
  ) : (
    <div>
      <>
        {/* <LoginPage /> */}
        {router.push("/login")}
      </>
    </div>
  );
}
