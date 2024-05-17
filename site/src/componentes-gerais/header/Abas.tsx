import React from 'react';

interface AbasProps {
    label: string;
    onClick: () => void;
}

export const Abas: React.FC<AbasProps> = (props) => {
    return (
        <div
            className="cursor-pointer transition duration-500 ease-in-out hover:bg-white hover:text-blue-900 p-2 rounded"
            onClick={props.onClick}
        >
            {props.label}
        </div>
    );
}
