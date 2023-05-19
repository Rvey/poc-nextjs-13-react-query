import { CheckIcon } from "@heroicons/react/24/outline";

export default function CarSpecsCard({
  marque,
  modele,
  version,
  motorisation,
  kilometrage,
  transmission,
  puissanceFiscale,
  ville,
  caracterestiqueTechnique,
}: any) {
  return (
    <div className=" bg-white">
      <div className="p-10">
        <p className="font-bold">
          Fiche technique Modele{" "}
          <span className="text-primary">
            {marque} {modele}
          </span>
        </p>
        <hr className="my-2 text-secondary-light" />
        <div className="mt-4 grid grid-flow-col grid-rows-4 gap-4">
          <div className="flex">
            <p className="px-4 text-end text-[12px] font-bold">marque :</p>
            <p className="text-[14px] font-bold">{marque}</p>
          </div>
          <div className="flex">
            <p className="px-4 text-end text-[12px] font-bold">modele :</p>
            <p className="text-[14px] font-bold">{modele}</p>
          </div>
          <div className="flex">
            <p className="px-4 text-end text-[12px] font-bold">version :</p>
            <p className="text-[14px] font-bold">{version}</p>
          </div>
          <div className="flex">
            <p className="px-4 text-end text-[12px] font-bold">
              motorisation :
            </p>
            <p className="text-[14px] font-bold">{motorisation}</p>
          </div>
          <div className="flex">
            <p className="px-4 text-end text-[12px] font-bold">kilometrage :</p>
            <p className="text-[14px] font-bold">{kilometrage}</p>
          </div>
          <div className="flex">
            <p className="px-4 text-end text-[12px] font-bold">
              transmission :
            </p>
            <p className="text-[14px] font-bold">{transmission}</p>
          </div>
          <div className="flex">
            <p className="px-4 text-end text-[12px] font-bold">
              puissance fiscale :
            </p>
            <p className="text-[14px] font-bold">{puissanceFiscale}</p>
          </div>
          <div className="flex">
            <p className="px-4 text-end text-[12px] font-bold">ville :</p>
            <p className="text-[14px] font-bold">{ville}</p>
          </div>
        </div>
      </div>
      <div className="p-10">
        <p className="font-bold">
          Caracteristique technique Modele{" "}
          <span className="text-primary">
            {marque} {modele}
          </span>
        </p>
        <hr className="my-2 text-secondary-light" />
        <div className="mt-4 grid grid-flow-col grid-rows-5 gap-4">
          {caracterestiqueTechnique &&
            caracterestiqueTechnique.map((caract: any, index: any) => (
              <div className="flex" key={index}>
                <div>
                  <CheckIcon className="h-6 mx-4 w-6 text-gray-500 font-bold" />
                </div>
                <div>
                  <p className="text-[14px] font-bold">{caract["label"]}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
