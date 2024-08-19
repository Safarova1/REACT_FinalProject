import React, { useState } from 'react';
import { CircularListProps } from '../../redux/slices/circularsSlice';



const CircularList: React.FC<CircularListProps> = ({ circulars, status, error }) => {
    const [itemsPerPage, setItemsPerPage] = useState<number>(5);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const totalPages = Math.ceil(circulars.length / itemsPerPage);
    const paginatedCirculars = circulars.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    let content;

    if (status === 'loading') {
        content = <p>Loading...</p>;
    } else if (status === 'succeeded') {
        content = (
            <div>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-white font-extrabold text-[#515151]">
                        <tr>
                            <th className="px-6 py-3 text-left text-[12px] font-extrabold">S/N</th>
                            <th className="px-6 py-3 text-left text-[12px] font-extrabold">Circular Title</th>
                            <th className="px-6 py-3 text-left text-[12px] font-extrabold">Sent From</th>
                            <th className="px-6 py-3 text-left text-[12px] font-extrabold">Sent To</th>
                            <th className="px-6 py-3 text-left text-[12px] font-extrabold">Date</th>
                            <th className="px-6 py-3 text-left text-[12px] font-extrabold">Circular Type</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {paginatedCirculars.map(circular => (
                            <tr key={circular.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{circular.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{circular.title}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{circular.sender}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{circular.recipients}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{circular.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{circular.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index}
                                className={`px-4 py-2 rounded-md ${index + 1 === currentPage ? 'border-2 border-indigo-500/75 bg-custom-btn-gradient text-white' : 'border-2 border-indigo-500/75'}`}
                                onClick={() => goToPage(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button
                            className="px-4 py-2 border-2 border-indigo-500/75 rounded-md"
                            onClick={() => goToPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            &gt;
                        </button>
                    </div>
                    <span>Page {currentPage} of {totalPages}</span>
                </div>
            </div>
        );
    } else if (status === 'failed') {
        content = <p>{error}</p>;
    }

    return (
        <div className="circular-list p-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">All Circulars</h2>
                <div className="flex items-center space-x-2">
                    <span className="text-gray-600">Showing</span>
                    <select
                        className="p-2 border border-gray-300 rounded-md"
                        value={itemsPerPage}
                        onChange={e => setItemsPerPage(Number(e.target.value))}
                    >
                        <option value={6}>6 per page</option>
                        <option value={10}>10 per page</option>
                        <option value={13}>13 per page</option>
                    </select>
                </div>
            </div>
            {content}
        </div>
    );
};

export default CircularList;
