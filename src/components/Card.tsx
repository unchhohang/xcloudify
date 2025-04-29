// Grid card component

import Image from "next/image";

type props = {
  imagePath: string;
  title: string;
  text: string;
}

export default function Card({ imagePath, title, text }: props) {

  return (
    <div className="flex flex-col items-center h-full">
      <Image
        className=" border rounded-t-lg border-gray-950/10 object-cover"
        src={imagePath}
        width={600}
        height={0}
        alt="card images"
      />
      <div className=" border border-gray-950/10 rounded-b-lg p-5 pb-5 h-full">
        <h3 className="my-6">{title}</h3>
        <p className="text-sm text-[#787878] ">{text}</p>
      </div>
    </div>
  );
}
