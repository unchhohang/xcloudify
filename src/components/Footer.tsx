import Image from "next/image";
import DemoBtn from "./DemoBtn";

export default function Footer() {
  return (
    <div>
      <div className="flex justify-center my-12">
        <div className="bg-offWhite px-10 pt-10  w-[70%] rounded-2xl flex gap-10">
          <div className="flex flex-col gap-3">
            <h2>Ready to Explore a More Modern Approach?</h2>
            <p className="text-xs text-[#909090] text-start">Contact Us to discuss how our platform can transform your GPU cloud strategy.</p>
            <div className="w-fit">
              <DemoBtn />
            </div>
          </div>
          <Image
            src={'/looking-man.png'}
            width={500}
            height={0}
            alt="Modern man image looking"
          />


        </div>
      </div>
      <div className="bg-[url(/footer-bg-image.png)] flex flex-col items-center justify-center gap-10 pt-18 pb-5 ">
        <div className="grid grid-cols-8 text-white w-[70%] gap-10 items-center">
          <div className="flex flex-col gap-3 col-span-3">
            <Image
              src={'/logo-white.png'}
              width={160}
              height={0}
              alt="logo for footer"
            />
            <p className="text-xs text-start leading-5">Streamline your business\'s financial management with our intuitive, scalable SaaS platform. Designed for U.S.
              enterprises, our solutions simplify complex processes.</p>
          </div>
          <div className="flex flex-col text-xs col-span-1 gap-2">
            <span className="text-xs font-bold">Userful Link</span>
            <span className="text-xs">Home</span>
            <span className="text-xs">Features</span>
            <span className="text-xs">Deployment and Services</span>
            <span className="text-xs">Contact Us</span>
          </div>
          <div className="flex flex-col col-span-1 gap-2">
            <span className="text-xs">Terms & Conditions</span>
            <span className="text-xs">Privacy Policy</span>
          </div>
          <div className="flex flex-col col-span-3 gap-2">
            <p className="text-start">Get In Touch With Us!</p>
            <span className="text-xs"> If you're ready to sign up with us, or if you have any questions, please get in touch.</span>
            <div className="flex gap-2">
              <div className="p-[2px] rounded-full w-10 h-10 border border-[#5596E6] border-dashed">
                <Image
                  className="bg-offWhite object-cover rounded-full p-2 "
                  src={'/phone.svg'}
                  width={50}
                  height={50}
                  alt="Phone icon for footer"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-start text-xs">Contact Us</span>
                <span className="text-start text-sm">+1 (801) 893-3654</span>
              </div>

            </div>
          </div>


        </div>

        <div className="w-[70%] border border-t-[#9F9F9F] border-b-0 border-x-0 text-white text-xs flex justify-center mt-6">
          <span className="mt-5">© 2025 xcloudify. All rights reserved.</span>
        </div>

      </div>
    </div>
  );
}
