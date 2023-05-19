import { Inter } from "next/font/google";
import { getData, getDataByID } from "./query";
import { dehydrate, Hydrate } from "@tanstack/react-query";
import getQueryClient from "./getQueryClient";
import AnnouncesPageLayout from "./components/layouts/AnnouncesPageLayout";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const client = getQueryClient();

  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
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
