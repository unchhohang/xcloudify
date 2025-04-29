import Image from "next/image"
import DemoBtn from "./DemoBtn";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex justify-between pt-2 mb-18 mx-42">
      <div className="hidden sm:block"><Link href={'/'}><Image src={'/logo-nav.png'} height={50} width={100} alt="Logo" /></Link>
      </div>
      <div className="block sm:hidden"><Link href={'/'}><Image src={'/logo-nav.png'} height={50} width={70} alt="Logo" /></Link>
      </div>
      <div className="menu-btn sm:hidden">Button</div>
      <div className="hidden sm:flex  text-xs ">
        <div className="p-3 "><Link href='/features' className="hover:cursor-pointer">Features</Link></div>
        <div className="p-3 "><Link href={'/services'} className="hover:cursor-pointer">Deployment and Services</Link></div>
        <div className="p-3 ">Contact US</div>
        <div className="ml-4 "><DemoBtn /></div>
      </div>
    </div>


  );
}
