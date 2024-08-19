// src/components/StaffTable.tsx
import React from 'react';

interface Staff {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    staffId: string;
    phoneNumber: string;
    role: string;
    designation: string;
}

interface StaffTableProps {
    staff: Staff[];
    currentPage: number;
    itemsPerPage: number;
    handleViewMore: (id: number) => void;
}

const StaffTable: React.FC<StaffTableProps> = ({ staff, currentPage, itemsPerPage, handleViewMore }) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = staff.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <table className="min-w-full bg-white rounded-md overflow-hidden shadow-lg">
            <thead>
                <tr>
                    <th className="p-3 text-left">S/N</th>
                    <th className="p-3 text-left">First Name</th>
                    <th className="p-3 text-left">Last Name</th>
                    <th className="p-3 text-left">Gender</th>
                    <th className="p-3 text-left">Staff ID</th>
                    <th className="p-3 text-left">Phone Number</th>
                    <th className="p-3 text-left">Role</th>
                    <th className="p-3 text-left">Designation</th>
                    <th className="p-3 text-left">Action</th>
                </tr>
            </thead>
            <tbody>
                {currentItems.map((staff, index) => (
                    <tr key={staff.id} className="border-t">
                        <td className="p-3">
                            {index + 1 + (currentPage - 1) * itemsPerPage}
                        </td>
                        <td className="p-3">{staff.firstName}</td>
                        <td className="p-3">{staff.lastName}</td>
                        <td className="p-3">{staff.gender}</td>
                        <td className="p-3">{staff.staffId}</td>
                        <td className="p-3">{staff.phoneNumber}</td>
                        <td className="p-3">{staff.role}</td>
                        <td className="p-3">{staff.designation}</td>
                        <td
                            onClick={() => handleViewMore(staff.id)}
                            className="p-3 text-blue-500 cursor-pointer hover:underline hover:text-blue-600 transition duration-300 ease-out hover:ease-in"
                        >
                            View more
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default StaffTable;
