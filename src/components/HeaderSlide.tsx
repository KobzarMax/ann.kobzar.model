"use client";

import { ROUTE_ABOUT, ROUTE_CONTACT, ROUTE_HOME, ROUTE_PORTFOLIO } from "@/routes/routes";
import Link from "next/link";
import HeaderLinks from "./HeaderLinks";    
import { useHeaderStore } from "@/store/useHeaderStore";
    
export default function HeaderSlide() {
    const {close} = useHeaderStore();

    const closeMenu = () => {
        close();
    }

    return (
        <div className="absolute header-slide-inner headerSlide left-0 top-0 w-dvw z-10 h-dvh bg-white/20 backdrop-blur-[5px] opacity-0 transition-all ease-in-out duration-700 -translate-y-[100%] [.active_&]:-translate-y-0 [.active_&]:opacity-100 py-24 px-4 flex flex-col items-center justify-center gap-6">
            
                <Link
                    onClick={closeMenu}
                    className={`text-textColor text-xl uppercase relative w-fit px-4 py-2 font-bold mainLink`}
                    href={ROUTE_HOME}
                    >
                    Home
                    <span className="linkDecoration bg-textColor absolute bottom-0 left-1/2 -translate-x-1/2 h-[0.1875rem] w-[1.875rem] opacity-0 transition-all duration-300" />
                </Link>
                <Link
                    onClick={closeMenu}
                    className={`text-textColor text-xl uppercase relative w-fit px-4 py-2 font-bold mainLink`}
                    href={ROUTE_CONTACT}
                    >
                    Contact
                    <span className="linkDecoration bg-textColor absolute bottom-0 left-1/2 -translate-x-1/2 h-[0.1875rem] w-[1.875rem] opacity-0 transition-all duration-300" />
                </Link>
                
                <Link
                    onClick={closeMenu}
                    className={`text-textColor text-xl uppercase relative w-fit px-4 py-2 font-bold mainLink`}
                    href={ROUTE_PORTFOLIO}
                    >
                    Portfolio
                    <span className="linkDecoration bg-textColor absolute bottom-0 left-1/2 -translate-x-1/2 h-[0.1875rem] w-[1.875rem] opacity-0 transition-all duration-300" />
                </Link>
                <Link
                    onClick={closeMenu}
                    className={`text-textColor text-xl uppercase relative w-fit px-4 py-2 font-bold mainLink`}
                    href={ROUTE_ABOUT}
                    >
                    About
                    <span className="linkDecoration bg-textColor absolute bottom-0 left-1/2 -translate-x-1/2 h-[0.1875rem] w-[1.875rem] opacity-0 transition-all duration-300" />
                </Link>
                <div className="py-2">  
                    <HeaderLinks />
                </div>
        </div>
    )
}