import React from 'react';

const Error = ({ message }) => {
    return (
        <div className="flex flex-col items-center justify-center p-4 border rounded-md bg-red-100 border-red-400 text-red-700">
            <h2 className="text-xl font-bold">Something went wrong!</h2>
            <p className="my-2">{message}</p>
        </div>
    );
};

export default Error;
