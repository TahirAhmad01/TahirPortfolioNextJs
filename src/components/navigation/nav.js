import avatar from "@/assets/images/logo.webp";
import menuList from "@/utils/manuList";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useWindowDimensions from "../../hook/getWindowDimensions";
import MobileDrawer from "./mobileDrawer";

export default function Navbar({ theme, toggleDarkMode }) {
  const [toggleEvent, setToggleEvent] = useState(0);

  const { width } = useWindowDimensions();

  const toggle = () => setToggleEvent(Date.now());

  const location = useRouter();
  const path = location.pathname;
  const [isSidebarOpen, setSidebarOpen] = useState(width > 768);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <React.Fragment>
      <div
        className={`backdrop-blur-xl bg-[#f1f5f9]/30 dark:bg-[#0b1327]/50 w-full top-0 left-0 fixed z-50 py-4 transition-all duration-200 border-b-2 border-inherit dark:border-gray-800/60 my-collapsible my-collapsible 
       
        `}
      >
        <div className="containerCustom flex items-center justify-between h-full">
          <div>
            <Link
              href="/"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <h4 className="flex items-center text-xl">
                <div className="h-9 w-9 overflow-hidden rounded-full bg-transparent">
                  <Image src={avatar} alt="avatar" width={0} height={0} />
                </div>
                <div className="ml-3">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18c8fd] to-purple-600 font-extrabold text-2xl">
                    Tahir Ahmad
                  </span>
                </div>
              </h4>
            </Link>
          </div>
          <div className="flex items-center">
            <div className=" hidden md:block">
              <ul className="flex">
                {menuList.map((menu, idx) => (
                  <Link href={menu?.link} className="capitalize" key={idx}>
                    <li
                      className={`px-3 hover:text-transparent bg-clip-text bg-gradient-to-r from-[#18c8fd] to-purple-600 font-medium ${
                        path === menu?.link || path === menu?.link + "/"
                          ? "text-transparent font-semibold"
                          : ""
                      }`}
                    >
                      {menu.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
            <div className="w-7 flex justify-end">
              <DarkModeSwitch
                checked={
                  theme === null ? true : theme === "dark" ? true : false
                }
                onChange={toggleDarkMode}
                size={19}
              />
            </div>
            <div
              className="md:hidden flex flex-col items-start text-[1.9rem] ml-2"
             onClick={toggleSidebar}
            >
              <i className='bx bx-menu-alt-left'></i>
            </div>
          </div>
        </div>
        {/* <SlideToggle duration={500} toggleEvent={toggleEvent} collapsed>
          {({ setCollapsibleElement }) => (
            <div className={`${width > 768 && "hidden"}`}>
              <div
                className={`transition-all containerCustom my-collapsible__content `}
                ref={setCollapsibleElement}
              >
                <ul className="pt-5 ">
                  {menuList.map((menu, idx) => (
                    <Link
                      href={menu?.link}
                      onClick={() => {
                        toggle();
                        toggleMenu();
                      }}
                      key={idx}
                    >
                      <li
                        key={idx}
                        className={`py-1 px-4 block w-full capitalize rounded-lg overflow-hidden ${
                          path === menu?.link || path === menu?.link + "/"
                            ? "bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white"
                            : "active:bg-gray-300 dark:active:bg-gray-600"
                        }`}
                      >
                        {menu.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </SlideToggle> */}
        <MobileDrawer setSidebar={setSidebarOpen} isOpen={isSidebarOpen} />
      </div>
    </React.Fragment>
  );
}
