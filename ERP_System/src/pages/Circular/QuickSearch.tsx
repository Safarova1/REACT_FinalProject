import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { fetchCirculars } from '../../redux/slices/circularsSlice';
import { Circular } from '../../redux/slices/circularsSlice';
import CommonButton from '../../components/Button/Button';

interface QuickSearchProps {
    onDataUpdate: (circulars: Circular[], status: 'idle' | 'loading' | 'succeeded' | 'failed', error: string | null) => void;
}

const QuickSearch: React.FC<QuickSearchProps> = ({ onDataUpdate }) => {
    const dispatch: AppDispatch = useDispatch();
    const { circulars, status, error } = useSelector((state: RootState) => state.circulars);

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filter, setFilter] = useState<string>('all');



    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCirculars());
        }
    }, [status, dispatch]);

    useEffect(() => {
        onDataUpdate(
            circulars
                .filter(circular => circular.title.toLowerCase().includes(searchTerm.toLowerCase()))
                .filter(circular => filter === 'all' || circular.status === filter),
            status,
            error
        );
    }, [searchTerm, filter, circulars, status, error, onDataUpdate]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(event.target.value);
    };

    const filteredCirculars = circulars
        .filter(circular => circular.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter(circular => filter === 'all' || circular.status === filter);


    const totalCirculars = filteredCirculars.length;


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
                <select
                    value={filter}
                    onChange={handleFilterChange}
                    className="mt-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="all">All memos</option>
                    <option value="Received">Received</option>
                    <option value="Sent">Sent</option>
                </select>
            </div>

            <CommonButton
                type="submit"
                className="p-2.5 rounded-[10px] w-[180px] bg-blue-500 text-white hover:bg-blue-600"
                label="Create Circular"
            />

        </div >
    );
};

export default QuickSearch;
