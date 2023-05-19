import getQueryClient, { getPokemonByID } from "@/app/store";
import { dehydrate, Hydrate } from "@tanstack/react-query";
import PokemonDetails from "@/app/components/PokemonDetails";

const PokemonPage = async ({ params }) => {
  const { id } = params;
  const client = getQueryClient();
  await client.prefetchQuery({
    queryKey: ["product", id],
    queryFn: () => getPokemonByID(id),
  });
  const dehydratedState = dehydrate(client, {
    shouldDehydrateQuery: () => true,
  });
  return (
    <main>
      <Hydrate state={dehydratedState}>
        <section className="container mx-auto">
          <PokemonDetails id={id} />
        </section>
      </Hydrate>
    </main>
  );
};

export default PokemonPage;
