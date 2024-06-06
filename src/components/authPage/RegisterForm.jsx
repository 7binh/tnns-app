import React from 'react';
import Input from '../input/Input';
import { FaLock, FaUser } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import Button from '../button/Button';

const RegisterForm = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h2 className='uppercase mt-10 text-darkGray font-bold'>Đăng ký thành viên mới</h2>
            <div className="flex flex-col gap-y-4 mt-5 w-full px-28">
                <Input icon=<FaUser /> type='text' placeholder='Họ'></Input>
                <Input icon=<FaUser /> type='text' placeholder='Tên'></Input>
                <Input icon=<IoMdMail /> type='email' placeholder='Email'></Input>
                <Input icon=<FaLock /> type='password' placeholder='mật khẩu'></Input>
                <Input icon=<FaLock /> type='password' placeholder='nhập lại mật khẩu'></Input>
                <Button className='hover:shadow-2xl duration-200'>Đăng nhập</Button>
            </div>
        </div>
    );
};

export default RegisterForm;