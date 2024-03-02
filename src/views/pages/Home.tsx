import { useState } from "react";
import { Hero } from "./components/Hero";
import { TbFishHook } from "react-icons/tb";
import Link from "next/link";
import { IoLogoGithub, IoIosSunny, IoIosSearch } from "react-icons/io";

export function HomePage() {
  const INITIAL_LINKS = [
    {
      href: "/docs",
      name: "Docs",
    },
    {
      href: "/hooks",
      name: "Hooks",
    },
  ];

  return (
    <main className="w-full flex flex-col items-center text-gray-900">
      <div className="w-full flex items-center justify-center bg-gray-50/50 border-b border-gray-300 h-14">
        <div className="w-[80%] mx-auto p-2 flex gap-8 justify-between items-center">
          <Link href={"/"}>
            <div className="flex items-center gap-1">
              <TbFishHook size={24} className="rotate-[13deg]" />
              <h2 className="font-semibold">ReactSnapHooks</h2>
            </div>
          </Link>
          <div className=" w-full flex gap-5 items-center text-gray-500 ">
            {INITIAL_LINKS.map(({ href, name }) => (
              <Link
                href={href}
                className="hover:text-gray-900 transition-color duration-100 ease-in"
              >
                {name}
              </Link>
            ))}
          </div>
          <div className="items-center justify-center hidden w-[60%] md:flex">
            <button
              type="button"
              className="hover:bg-gray-100 transition-colors duration-100 ease-in gap-2 text-gray-500 flex relative ps-4 pe-1 py-1 h-9 border border-gray-300 outline-none  pointer items-center text-start w-full rounded-md align-middle text-sm"
            >
              <IoIosSearch size={20} />
              <p>Nombre del hook, descripcion, evento del dom...</p>
            </button>
          </div>
          <div className="flex gap-4 items-center">
            <IoLogoGithub size={22} />
            <IoIosSunny size={24} />
          </div>
        </div>
      </div>
      <Hero />
    </main>
  );
}
