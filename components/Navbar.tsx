'use client'
import Image from "next/image";
import Logo from "@/public/s_logo.png";
import {AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineFacebook} from 'react-icons/ai';
import { useState } from "react";
import Link from "next/link";

const Navbar = ()=>{

    const [menuOpen,setMenuOpen] = useState(false);

    const handleNav = () =>{
        setMenuOpen(!menuOpen);
        console.log(menuOpen);
    }

    return(
        <nav className="fixed w-full h-24 shadow-xl bg-white">            
        <div className="flex justify-between px-4 2xl:px16 pt-2 items-center h-full w-full">
            <Link href="/">
                <Image 
                    src={Logo}
                    width={75}
                    height={75}
                    alt ="logo image"
                />
            </Link>
            {/* Десктопное меню */}
            <div  className="hidden sm:flex">
                <ul className="hidden sm:flex gap-6 px-2">
                    <Link href="/vip">
                        <li>Vip signals</li>
                    </Link>
                    <Link href="topBrokers">
                        <li>Top Brokers</li>
                    </Link>
                    <Link href="timeZone">
                        <li>Timezone</li>
                    </Link>
                    
                </ul>
            </div>
            {/* Мобильное меню */}
            <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
                <AiOutlineMenu size={25}/>
            </div>
            <div className={
                menuOpen
                ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-amber-100 p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }>
            
                <div className="flex w-full items-center justify-end">
                    <div onClick={handleNav} className="cursor-pointer">
                        <AiOutlineClose size={25}/>
                    </div>
                </div>
                <div className="flex-col py-4 gap-4">
                    <ul>
                        <Link href="vip">
                            <li onClick={()=>setMenuOpen(false)} className="py-4 cursor-pointer">Vip signals</li>
                        </Link>
                        <Link href= "topBrokers">
                            <li onClick={()=>setMenuOpen(false)} className="py-4 cursor-pointer">Top Brokers</li>
                        </Link>
                        <Link href = "timeZone">
                            <li onClick={()=>setMenuOpen(false)} className="py-4 cursor-pointer">Timezone</li>
                        </Link>
                    </ul>
                </div>
            <div className="flex flex-row justify-around items-center pt-50">
                <AiOutlineInstagram size={30} className="cursor-pointer"/>
                <AiOutlineFacebook size={30} className="cursor-pointer"/>
            </div>
            
            </div>        
        </div>        
        </nav>
    )
}

export default Navbar;