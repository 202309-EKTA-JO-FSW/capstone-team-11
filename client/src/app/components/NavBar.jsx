"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import Btn from "./Button";
import { AuthContext } from "../../context/AuthContext";
import { Button } from "@/app/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenu,
} from "@/app/components/ui/dropdown-menu";

export default function navbar() {
  const { user, dispatch } = useContext(AuthContext);
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user");
  };
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Contact" },
  ];
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 w-full px-2 md:px-16 lg:px-16 xl:px-16">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="w-6/12 flex flex-wrap  items-center space-x-3 rtl:space-x-reverse">
          <Link href="/">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              EventMaster
            </span>
          </Link>
          {/* Desktop Navigation */}
          <ul className="hidden sm:flex md:flex lg:flex xl:flex">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="p-4 hover:bg-gray-300 rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
              >
                {item.text === "Home" ? (
                  <Link href="/">{item.text}</Link>
                ) : (
                  <Link href={`/${item.text.toLowerCase()}`}>{item.text}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4 md:mt-0 lg:mt-0 xl:mt-0 flex flex-wrap justify-around md:justify-center lg:justify-center xl:justify-center items-stretch md:items-start lg:items-start  xl:items-start w-full md:w-32  md:order-2 lg:w-32 lg:order-2 xl:w-32 xl:order-2 space-x-3 md:space-x-0 lg:space-x-0 xl:space-x-0 rtl:space-x-reverse md:mr-16 lg:mr-16 xl:mr-16">
          <div className="flex flex-wrap sm:flex-nowrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap justify-start sm:justify-center md:justify-center lg:justify-center xl:justify-center  mx-auto w-8/12 sm:w-0 md:w-0 lg:w-0 xl:w-0">
            {!user && (
              <Link href="/signup">
                <Btn title="Sign up" addClassName=" me-4 w-[108px]" />
              </Link>
            )}
            {!user && (
              <Link href="/login">
                <Btn title="Log in" addClassName=" me-4 w-[108px]" />
              </Link>
            )}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 mx-0"
                  size="icon"
                  variant="outline"
                >
                  <UserIcon className="h-8 w-8" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {user && (
                  <DropdownMenuItem>Hi, {user.username}</DropdownMenuItem>
                )}
                {user && (
                  <DropdownMenuItem>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                )}
                {!user && (
                  <DropdownMenuItem>
                    <Link href="/login">Login </Link>
                  </DropdownMenuItem>
                )}
                {!user && (
                  <DropdownMenuItem>
                    <Link href="/signup">Signup</Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                {user && (
                  <DropdownMenuItem onClick={handleLogout}>
                    Logout
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Navigation Icon */}
          <div
            onClick={handleNav}
            className="block sm:hidden md:hidden lg:hidden xl:hidden z-50"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={nav ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </div>
          {/* Mobile Navigation Menu */}
          <ul
            className={
              nav
                ? "fixed  right-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-200 ease-in-out duration-500 z-40"
                : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 right-[-100%] z-40"
            }
          >
            {/* Mobile Logo */}
            <h1 className="w-full text-3xl font-bold text-gray-700 m-4">
              EventMaster
            </h1>

            {/* Mobile Navigation Items  hover:bg-[#00df9a]*/}
            {navItems.map((item) => (
              <li
                key={item.id}
                className="p-4 border-b rounded-xl hover:bg-gray-300 duration-300 hover:text-black cursor-pointer border-gray-200"
              >
                {item.text === "Home" ? (
                  <Link href="/">{item.text}</Link>
                ) : (
                  <Link href={`/${item.text.toLowerCase()}`}>{item.text}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
