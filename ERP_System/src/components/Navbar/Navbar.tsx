import { Component } from "react";
import ring from "../../components/Navbar/images_icons/ring.png";
import profil_image from "../../components/Navbar/images_icons/profil_image.png";

interface NavbarProps {
  username: string;
  date: string;
  image: string;
}

export default class Navbar extends Component<NavbarProps> {
  render() {
    const { username, date, image } = this.props;
    return (
      <>
        <div className="">
          <h1 className="text-[25px] font-bold flex items-center">
            <img src={image} alt="icon" className="w-6 h-6 mr-2" />
            {username}
          </h1>
          <p className="text-sm ">{date}</p>
        </div>
        <div className="flex flex-row items-center gap-3">
          <img src={ring} alt="ring" className="w-6 h-6" />
          <img src={profil_image} alt="profil_image" className="w-10 h-10" />
          <div className="text-sm">
            <h1>{username}</h1>
            <p className="text-gray-500">HR Office</p>
          </div>
        </div>
      </>
    );
  }
}
