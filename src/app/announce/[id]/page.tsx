import { dehydrate, Hydrate } from "@tanstack/react-query";
import getQueryClient from "@/getQueryClient";
import { getDataByID } from "@/query";
import AnnounceDetailsLayout from "@/components/layouts/AnnounceDetailsLayout";

export default async function AnnounceDetails({ params }) {
  const { id } = params;
  const client = getQueryClient();
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  await client.prefetchQuery({
    queryKey: ["product", id],
    queryFn: () => getDataByID(`products/${id}`),
  });

  const dehydratedState = dehydrate(client, {
    shouldDehydrateQuery: () => true,
  });
  return (
    <main>
      <Hydrate state={dehydratedState}>
        <AnnounceDetailsLayout id={id} />
      </Hydrate>
    </main>
  );
}
