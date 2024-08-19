import { useState } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Navbar/Sidebar";
import circularsImg from "../../assets/icons/Dashboard.png";
import QuickSearch from "./QuickSearch";
import CircularList from "./CircularList";
import { Circular } from '../../redux/slices/circularsSlice';



const MainCircular = () => {
  const [circulars, setCirculars] = useState<Circular[]>([]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'succeeded' | 'failed'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleDataUpdate = (newCirculars: Circular[], newStatus: 'idle' | 'loading' | 'succeeded' | 'failed', newError: string | null) => {
    setCirculars(newCirculars);
    setStatus(newStatus);
    setError(newError);
  };

  return (
    <>
      <div className="flex items-center justify-center max-w-[1440px] mx-auto ">
        <div className="flex">
          {/* Левая панель */}
          <div className="w-[260px]">
            <Sidebar />
          </div>

          {/* Правая панель */}
          <div className="flex-1 bg-[#F8F9FD] flex flex-col">
            {/* Навбар */}
            <div className="flex justify-between items-center  py-[26px] px-4  ">
              <Navbar image={circularsImg} username="Circulars" date="Search for and view all circulars" />
            </div>

            {/* Основной контент */}
            <div className="flex-1 p-8 items-center justify-center py-[26px] px-4 relative ">
              <div className="w-[1112px]  mx-auto mt-8 container">
                <QuickSearch onDataUpdate={handleDataUpdate} />
                <CircularList circulars={circulars} status={status} error={error} />
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

export default MainCircular;
