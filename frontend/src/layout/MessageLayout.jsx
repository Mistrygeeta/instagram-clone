import React from 'react'
import { Outlet } from 'react-router'

const MessageLayout = () => {
  return (
    <div className='w-full h-full flex'>
        <aside className='w-[25%] text-black'>chats</aside>
        <div className='w-[75%] bg-blue-500'>
            <Outlet/>
        </div>
    </div>
  );
};

export default MessageLayout