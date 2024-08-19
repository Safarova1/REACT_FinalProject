// src/components/CircularList.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { fetchCirculars } from '../../redux/slices/circularsSlice';

const CircularList: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const { circulars, status, error } = useSelector((state: RootState) => state.circulars);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCirculars());
        }
    }, [status, dispatch]);

    let content;

    if (status === 'loading') {
        content = <p>Loading...</p>;
    } else if (status === 'succeeded') {
        content = circulars.map(circular => (
            <div className="circular-item" key={circular.id}>
                <h3>{circular.title}</h3>
                <p><strong>Sender:</strong> {circular.sender}</p>
                <p><strong>Recipients:</strong> {circular.recipients}</p>
                <p><strong>Date:</strong> {circular.date}</p>
                <p><strong>Status:</strong> {circular.status}</p>
                <p><strong>View Count:</strong> {circular.viewCount}</p>
                <button>{circular.action}</button>
            </div>
        ));
    } else if (status === 'failed') {
        content = <p>{error}</p>;
    }

    return (
        <div className="circular-list">
            {content}
        </div>
    );
};

export default CircularList;
