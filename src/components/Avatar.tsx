// import React from 'react';
import avatar from '../assets/hero/avatar.jpg'; // Adjust the path as necessary
export default function Avatar() {
    return (
        <div className="w-32 h-32 sm:w-54 sm:h-54 rounded-full flex justify-center items-center overflow-hidden bg-gradient-to-tl from-[#FF8660] to-[#8000FF] shadow-lg">
            <img src={avatar} alt="User Avatar" className="w-[95%] rounded-full h-[95%] object-cover" />
        </div>
    );
}
