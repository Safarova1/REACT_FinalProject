import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Navbar/Sidebar";
import MainDasboard from "./MainDasboard";
import dashboard from "../../assets/icons/Dashboard.png";

const Dashboard = () => {
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
            <div className="flex justify-between items-center  py-[26px] px-4  ">
              <Navbar image={dashboard} username="Welcome, Mr. Otor John" date="Today is Saturday, 11th November 2022." />
            </div>

            {/* Основной контент */}
            <div className="flex-1 p-8 items-center justify-center py-[26px] px-4 relative ">
              <div className="w-[1112px]  mx-auto mt-8 ">
                <MainDasboard />
              </div>

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

export default Dashboard;
