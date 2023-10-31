'use client'

import Link from 'next/link'
import React from 'react'
import { Popover } from '@headlessui/react'
import { Transition } from '@headlessui/react';
import { PopoverButtonProps } from '@headlessui/react';

import {AiFillHome, AiOutlineMenu} from 'react-icons/ai'
import { BiCalendarEdit } from "react-icons/bi";
import {LuBadgeInfo} from 'react-icons/lu'


const Navbar = () => {
  return (
    <nav>
      <header>
    
      {/* Responsive Navbar  */}  
      <Popover className=' hidden sm:flex bg-blue-200 h-20 text-lg font-bold justify-evenly  '>

          <div className='flex items-center'>
            <img  src="https://cdn.discordapp.com/attachments/1159699541164036137/1164945821184307330/dda922dc54b34944b310af368fbb5137-capybara-with-a-bird-atop-its-back-flat-image.png?ex=65450f57&is=65329a57&hm=00266bcef7d8088057ac9e76f52e74c563e9ed86ea3e5264e9866cca5aa09b9a&" 
                  alt="logo empresa" 
                  width="90" height="90"
                  className=''
                  />
          </div>

          {/* Primer div (enlaces) */}
          <div className='hidden  space-x-10 items-center font-bold sm:flex md:space-x-20 lg:space-x-28 '>
            <Link href={'/'}>Homepage</Link>
            <Link href={'/registro'}>Registro</Link>
            <Link href={'/veregistro'}>Ver Registro</Link>
          </div>

          {/* Segundo div (Login | Signin) */}
          <div className='hidden md:flex '>
            <button className=' '> Sign in | Sign up </button>
          </div>
          
      </Popover>
      

      {/*Responsive Menu*/}

      <Popover className='sm:hidden font-bold bg-blue-200 h-20 flex justify-between  '>

        <Popover.Button className='text-3xl  p-6 '>
          <AiOutlineMenu />
        </Popover.Button>

        <div className='flex items-center'>
            <img  src="https://images.vexels.com/media/users/3/319217/isolated/lists/828739434d6c7701e24c3f6cca3d47bd-capybara-head-flat-image.png" 
                  alt="idk citas" 
                  width="72" height="72"
                  className='p-2'
                  />
          </div>

        <Popover.Overlay className="fixed inset-0 " />

        <Popover.Panel className=" absolute top-16 w-60 left-7  bg-violet-500 p-5 rounded-md shadow-2xl  ">
          <div className='flex flex-col gap-5 text-white'>
            <div className='flex items-center'>
              <AiFillHome className='text-2xl mr-2' />
              <Link href='/'>Inicio</Link>
            </div>
            <div className='flex items-center'>
              <BiCalendarEdit className='text-2xl mr-2' />
              <Link href='/registro'>Registro</Link>
            </div>
            <div className='flex items-center'>
              <LuBadgeInfo className='text-2xl mr-2' />
              <Link href='/veregistro'>Ver Regitro</Link>
            </div>
          </div>
        </Popover.Panel>

        
      </Popover>


     
   </header>
    </nav>
  )
}

export default Navbar
