import Image from "next/image";

type props = {
  imgPath: string,
}
export default function Icon({imgPath}: props) {
  return(
    <div className={`bg-softPurple h-10 w-10 rounded-full flex justify-center items-center`}>
                    <Image
                      src={imgPath}
                      width={20}
                      height={20}
                      alt="full sdn icon"
                    />
                  </div>
  );
}
