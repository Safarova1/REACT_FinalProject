import React from 'react';

interface CircularItemProps {
    id: string;
    title: string;
    sender: string;
    recipients: string;
    date: string;
    status: string;
    viewCount: number;
    action: string;
}

const CircularItem: React.FC<CircularItemProps> = ({
    id,
    title,
    sender,
    recipients,
    date,
    status,
    viewCount,
    action
}) => {
    return (
        <div className="circular-item flex flex-col border border-gray-300 rounded-lg shadow-md p-4 m-2">
            <p className="mb-1"><strong>ID:</strong> {id}</p>
            <p className="mb-1"><strong>Title:</strong> {title}</p>
            <p className="mb-1"><strong>Sender:</strong> {sender}</p>
            <p className="mb-1"><strong>Recipients:</strong> {recipients}</p>
            <p className="mb-1"><strong>Date:</strong> {date}</p>
            <p className="mb-1"><strong>Status:</strong> {status}</p>
            <p className="mb-1"><strong>View Count:</strong> {viewCount}</p>
            <p><strong>Action:</strong> {action}</p>
        </div>
    );
};

export default CircularItem;
