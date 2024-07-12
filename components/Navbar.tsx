"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { NavigationMenu } from "@/components/ui/navigation-menu";
import { useState } from "react";
import { Button } from "./ui/button";
import GithubButton from "./ui/github-button";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="border-b-[1px] sticky top-0 z-20 bg-white bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-50">
      <div className="flex items-center justify-between px-6 py-4 sm:px-28">
        <h1 className="text-4xl text-slate-800 font-Caveat font-bold">Fragm</h1>

        {/* Small Screen */}
        <div className="flex gap-3 sm:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-align-right"
              >
                <line x1="21" x2="3" y1="6" y2="6" />
                <line x1="21" x2="9" y1="12" y2="12" />
                <line x1="21" x2="7" y1="18" y2="18" />
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>
                <a
                  href="https://github.com/R1shabh-Gupta/TextWiz"
                  target="_blank"
                >
                  GitHub
                </a>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {!isLoggedIn ? (
                <>
                  <DropdownMenuLabel>
                    <p>Login</p>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>
                    <p>Signup</p>
                  </DropdownMenuLabel>
                </>
              ) : (
                <>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>
                    <p>Sign Out</p>
                  </DropdownMenuLabel>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Large Screen */}
        <div className="hidden sm:flex">
          <ul className="flex items-center justify-center gap-1">
            <li>
              <div className="hidden gap-5 md:flex">
                <NavigationMenu className="flex gap-2">
                  {!isLoggedIn ? (
                    <div className="flex flex-wrap justify-around gap-4">
                      <Button variant="outline">Login</Button>
                      <Button variant="outline">Signup</Button>

                      <GithubButton />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-4">
                      <GithubButton />
                      <Button variant="outline">Dashboard</Button>
                      <Button variant="outline">Sign Out</Button>
                    </div>
                  )}
                </NavigationMenu>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
