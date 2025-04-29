import Image from "next/image";
import NavBar from "./NavBar";
import DemoBtn from "./DemoBtn";

type props = {
  title?: string,
  subTitle?: string
}
export default function HomeHeader({ title, subTitle }: props) {
  return (
    <div className="bg-[url(/bg-dots-crop.png)] bg-[center_90%] bg-cover 
      pb-65
      "
    >
      <NavBar />
      <div className="flex flex-col items-center mx-42">
        <div className="flex gap-2 bg-primary opacity-[50%] rounded-lg p-2 px-5 items-center text-xs">
          <Image
            src={'/thunder-icon.png'}
            height={20}
            width={20}
            alt="thunder icon"
          />
          <span className="text-white">Next-Level GPUaaS for Effortless Cloud Scaling and Deployment</span>
        </div>
        <div className="mx-12 my-6"><h1>{title}</h1></div>
        <div className="mx-12"><p>{subTitle}</p></div>
        <div className="my-8">
          <DemoBtn />
        </div>
      </div>
      <Image
        className="absolute left-[50%] -translate-x-[50%]"
        src={'/board-center.png'}
        width={800}
        height={0}
        alt="Center Board"
      />
    </div>
  );

}
