import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Navbar/Sidebar";
import MainOfficeBudget from "./layout/MainOfficeBudget";
import budget from "../../assets/icons/Budget.png"

const OfficeBudget = () => {
  return (
    <>
      <div className="flex items-center justify-center max-w-[1440px] mx-auto ">
        <div className=" flex  ">
          {/* Левая панель */}
          <div className="w-[260px] ">
            <Sidebar />
          </div>

          {/* Правая панель */}
          <div className="flex-1 bg-[#F8F9FD] flex flex-col  ">
            {/* Навбар */}
            <div className="flex justify-between items-center   px-4  ">
              <Navbar image={budget} username="Office Budget" date="View, create and send budget request." />
            </div>

            {/* Основной контент */}
            <div className="flex-1 p-8 items-center justify-center py-[26px] px-4 relative ">
              <div className="w-[1112px]  mx-auto mt-8 "></div>
              <MainOfficeBudget />
              <div className="text-[#383838] absolute bottom-3 left-[30%]">
                Copyright © 2022 Relia Energy. All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfficeBudget;
