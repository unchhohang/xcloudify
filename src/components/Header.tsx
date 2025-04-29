
import NavBar from "./NavBar";

type props = {
  title?: string,
}
export default function Header({ title}: props) {
  return (
    <div className="bg-[url(/bg-dots-crop.png)] bg-[center_90%] bg-cover 
      pb-28
      "
    >
      <NavBar />
      <div className="flex flex-col items-center mx-42">
        <div className="mx-12 my-6"><h2>{title}</h2></div>
      </div>
    </div>
  );
}
