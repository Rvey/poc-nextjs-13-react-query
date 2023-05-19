import { dehydrate, Hydrate } from "@tanstack/react-query";
import getQueryClient from "@/getQueryClient";
import { getDataByID } from "@/query";

const PokemonPage = async ({ params }) => {
  const { id } = params;
  const client = getQueryClient();
  await client.prefetchQuery({
    queryKey: ["product", id],
    queryFn: () => getDataByID(id),
  });
  const dehydratedState = dehydrate(client, {
    shouldDehydrateQuery: () => true,
  });
  return (
    <main>
      <Hydrate state={dehydratedState}>
        <section className="container mx-auto">
        </section>
      </Hydrate>
    </main>
  );
};

export default PokemonPage;
