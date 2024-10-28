import React from "react";
import BackIcon from '../../assets/images/Back.png'

const BackButton = () => {
    return (
        <div className="w-6 h-6 items-center">
            <img src={BackIcon} loading='eager' alt="back-button icon" width='24' height='24' />
        </div>
    );
};

export default BackButton;