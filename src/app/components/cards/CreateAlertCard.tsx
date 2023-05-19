import React from "react";

export default function CreateAlert() {
  return (
    <div className=" text-center bg-[#e9f1ff] py-5 font-bold  ">
      <div>
        <p className="text-[28px]">
          Vous ne trouvez pas le véhicule de vos reve ?
        </p>
      </div>
      <div>
        <p>
          Creer une alerte et soyez prevenu des aue des voitures correspondantes
          a vos recherches sont ajoutees !
        </p>
      </div>
      <div className="mt-6">
        <button className="bg-primary text-[14px] text-white w-[150px] h-[50px]">
          Creer une alerte
        </button>
      </div>
    </div>
  );
}
