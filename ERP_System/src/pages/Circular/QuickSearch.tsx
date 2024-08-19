import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import CommonButton from '../../components/Button/Button';
import CircularList from './CircularList';


const QuickSearch: React.FC = () => {
    const { circulars, status, error } = useSelector((state: RootState) => state.circulars);
    const totalCirculars = circulars.length;
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredCirculars = circulars.filter(circular =>
        circular.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-white p-4 rounded-lg flex flex-row  justify-between items-center gap-4 w-[1112px] mx-auto">
            <div className="flex flex-col max-w-[350px]">
                <h2 className="text-[14px] font-semibold">Quick search a circular</h2>
                <input
                    type="text"
                    placeholder="Enter search word"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="mt-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className='flex flex-col'>
                <p className='text-2xl font-extrabold'>{totalCirculars}</p>
                <h2 className="text-gray-600 text-sm">Total circulars</h2>
            </div>

            <div className='flex flex-col'>
                <p className="text-gray-600 text-sm">Filter circulars</p>
                <select className="mt-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="all">All memos</option>
                    <option value="filter1">Filter 1</option>
                    <option value="filter2">Filter 2</option>
                </select>
            </div>

            <CommonButton
                type="submit"
                className="p-2.5 rounded-[10px] w-[180px] bg-blue-500 text-white hover:bg-blue-600"
                label="Create Circular"
            />

        </div>
    );
};

export default QuickSearch;
