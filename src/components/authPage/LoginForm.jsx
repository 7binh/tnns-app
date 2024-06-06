import React from 'react';
import Input from '../input/Input';
import Button from "../button/Button";
import { FaLock } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";



const LoginForm = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h2 className='uppercase mt-10 text-darkGray font-bold'>Đăng nhập</h2>
            <div className="flex flex-col gap-y-4 mt-5 w-full px-28">
                <Input icon=<IoMdMail /> type='email' placeholder='Email của bạn'></Input>
                <Input icon=<FaLock /> type='password' placeholder='mật khẩu'></Input>
                <Button className='hover:shadow-2xl duration-200'>Đăng nhập</Button>
            </div>
            <a href="#" className='underline mt-3'>Quên mật khẩu?</a>
        </div>
    );
};

export default LoginForm;