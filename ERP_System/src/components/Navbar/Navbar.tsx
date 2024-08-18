import { Component } from "react";
import ring from "../../components/Navbar/images_icons/ring.png";
import profil_image from "../../components/Navbar/images_icons/profil_image.png";


export default class Navbar extends Component {
  render() {
    return (
      <>
        <div className="">
          <h1 className="text-[25px] font-bold">Welcome, Mr. Otor John</h1>
          <p className="text-sm ">Today is Saturday, 11th November 2022.</p>
        </div>
        <div className="flex flex-r items-center gap-3 ">
          <img src={ring} alt="ring" className=" size-6" />
          <img src={profil_image} alt="profil_image" className="size-10" />
          <div className="text-sm">
            <h1 >Otor John</h1>
            <p className="text-gray-500">HR Office</p>
          </div>
        </div>
      </>
    );
  }
}