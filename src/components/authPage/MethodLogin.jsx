import React from "react";


const MethodLogin = (props) => {
    return <div className={` ${props.methodLogin} hover:scale-110 inline-block bg-[] rounded-full ${props.textColor} shadow-xl w-[130px] duration-200`}>
        <a href="#" className="flex items-center justify-center ">
            <div className={`${props.methodLogin} rounded-full p-2 mr-1`}>
                {props.icon}
            </div>
            <span className="mr-2">{props.iconName}</span>
        </a>
    </div>;
};

export default MethodLogin;