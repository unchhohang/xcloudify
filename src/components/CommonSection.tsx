import { ITitleParagraph } from "@src/types";
import Image from "next/image";

type props = {
  bgColor?: string,
  imgPath: string,
  titleParagraph: ITitleParagraph[],
  rev?: boolean,
  title?: string,
}

export default function CommonSection({ bgColor, imgPath, titleParagraph, rev = false, title }: props) {

  return (
    <div>
      <div className={`py-20 px-30 ${bgColor && 'bg-[#F5F3FF]'}`}>
        <h2 className="flex justify-center mb-10">{title}</h2>
        <div className="flex justify-center">
          <div className={`flex gap-20 ${rev && 'flex-row-reverse'}`}>
            <div className="flex flex-col gap-4">
              {
                titleParagraph?.map((value, i) => {
                  if (i == 0) {
                    return (
                      <div key={i}>
                        <h2 className="text-start">{value?.title}</h2>
                        <p className="text-start mt-4">{value?.paragraph}</p>
                      </div>
                    );
                  }
                  return (
                    <div key={i}>
                      <h3 className="text-start">{value?.title}</h3>
                      <p className="text-start mt-2">{value?.paragraph}</p>
                    </div>
                  );
                })
              }
            </div>
            <Image
              className="object-cover p-10"
              src={imgPath}
              width={1000}
              height={0}
              alt="Image"
            />
          </div></div>
      </div>
    </div>
  );
}
