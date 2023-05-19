import Image from "next/image";
import Logo from "@/assets/logo/logo_ocarz.png";
import Keys from "@/assets/logo/dynamique_vectoriel.png";
import Link from "next/link";
const AdvBar = () => {
  return (
    <div className="flex h-[140px] items-center justify-between pl-[30px] pr-20 bg-primary">
      <div className="flex items-center gap-16">
        <Link href="/">
          <Image src={Logo} alt="advBar" width={220} height={52} />
        </Link>
        <div className="flex flex-col text-2xl text-white">
          <span>La meilleure façon</span>
          <span>d’acheter votre prochaine voiture</span>
        </div>
      </div>
      <button className="flex h-16 w-[243px] items-center justify-start gap-[16px] rounded-[18px] border-2 border-white px-[15px] hover:bg-secondary hover:bg-opacity-25">
        <div>
          {" "}
          <Image src={Keys} alt="advBar" width={52} height={44} />
        </div>
        <div className="flex flex-col items-start text-sm font-bold text-white">
          <span>Estimez</span>
          <span>votre voiture</span>
        </div>
      </button>
    </div>
  );
};
export default AdvBar;
