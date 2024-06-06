import React from 'react';
import { FaUser } from "react-icons/fa";

const Input = (props) => {
    return (
        <div className='relative'>
            <input className='w-full inline-block pr-5 pl-12 py-2 border border-black border-opacity-40 rounded-full text-black' type={props.type} placeholder={props.placeholder} />
            <div className="absolute translate-x-[18px] -translate-y-2/4 top-2/4 text-darkGray">
                {props.icon}
            </div>

        </div>
    );
};

export default Input;