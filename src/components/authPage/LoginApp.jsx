import React from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import MethodLogin from "./MethodLogin";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const LoginApp = () => {
    return (
        <div className="my-10">
            <div className="mb-10">
                <h3 className="uppercase text-center text-darkGray my-5">
                    Đăng nhập bằng
                </h3>
                <div className="flex justify-center gap-4">
                    <MethodLogin
                        textColor='text-white'
                        methodLogin="bg-[#1772e8] "
                        icon=<FaFacebookF />
                        iconName="Facebook"
                    ></MethodLogin>
                    <MethodLogin
                        textColor='text-black'
                        methodLogin="bg-white "
                        icon=<FaGoogle />
                        iconName="Google"
                    ></MethodLogin>
                </div>
            </div>
            <div className="">
                <div className="relative border-t border-darkGray border-opacity-20">
                    <span className="uppercase absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 text-darkGray bg-white font-semibold px-5">Hoặc</span>
                </div>
                <div className="flex">
                    <div className="left w-1/2">
                        <LoginForm></LoginForm>
                    </div>
                    <div className="right w-1/2">
                        <RegisterForm></RegisterForm>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LoginApp;
