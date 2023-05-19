import { Inter } from "next/font/google";
import { getData } from "../query";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import getQueryClient from "../getQueryClient";
import AnnouncesPageLayout from "@/components/layouts/AnnouncesPageLayout";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const client = getQueryClient();

  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  await client.prefetchQuery({
    queryKey: ["brands"],
    queryFn: () => getData("brands"),
  });
  await client.prefetchQuery({
    queryKey: ["models"],
    queryFn: () => getData("models"),
  });
  await client.prefetchQuery({
    queryKey: ["products"],
    queryFn: () => getData("products"),
  });
  const dehydratedState = dehydrate(client, {
    shouldDehydrateQuery: () => true,
  });

  return (
    <main>
      <Hydrate state={dehydratedState}>
        <AnnouncesPageLayout />
      </Hydrate>
    </main>
  );
}
