import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface Staff {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  staffId: string;
  phoneNumber: string;
  role: string;
  designation: string;
  email?: string;
  phoneNumber2?: string;
  officialEmail?: string;
}

interface StaffContextType {
  staff: Staff[] | undefined;
  setStaff: React.Dispatch<React.SetStateAction<Staff[] | undefined>>;
  addStaff: (newStaff: Staff) => void;
  updateStaff: (updatedStaff: Staff) => void;
}

const StaffContext = createContext<StaffContextType | undefined>(undefined);

export const StaffProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [staff, setStaff] = useState<Staff[]>([]);

  useEffect(() => {
    fetch("./db.json")
      .then((response) => response.json())
      .then((data) => {
        setStaff(data.staff);
      })
      .catch((error) => {
        console.error("Error fetching staff data:", error);
      });
  }, []);

  const addStaff = (newStaff: Staff) => {
    setStaff((prevStaff) =>
      prevStaff ? [...prevStaff, newStaff] : [newStaff]
    );
  };

  const updateStaff = (updatedStaff: Staff) => {
    setStaff((prevStaff) =>
      prevStaff
        ? prevStaff.map((staff) =>
            staff.id === updatedStaff.id ? updatedStaff : staff
          )
        : [updatedStaff]
    );
  };

  return (
    <StaffContext.Provider value={{ staff, setStaff, addStaff, updateStaff }}>
      {children}
    </StaffContext.Provider>
  );
};

export const useStaffContext = () => {
  const context = useContext(StaffContext);
  if (context === undefined) {
    throw new Error("useStaffContext must be used within a StaffProvider");
  }
  return context;
};
