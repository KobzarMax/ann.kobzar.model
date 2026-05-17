"use client";

import { useHeaderStore } from "@/store/useHeaderStore";

export default function HeaderBurger() {
    const { open, openMenu, close } = useHeaderStore();

    const toggleMenu = () => {
        if (open) {
            close();
        } else {
            openMenu();
        }

    }

    return (
        <button className={`burger lg:hidden z-[60] ${open ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="burger-line top-line"></span>
          <span className="burger-line mid-line"></span>
          <span className="burger-line bot-line"></span>
        </button>
    )
}