
import Link from "next/link";
import { useState } from "react";
import { api } from "../src/utils/api";
import {HiHome} from 'react-icons/hi';

const Navigation=()=>{


    return(
      <>
   <div className="bg-black">
  <header className="sticky top-0 z-30 w-full pa2 bg-slate-300 sm:px-4 shadow-xl">
    <div className="flex items-center justify-between mx-auto max-w-7xl  ">
      <a href="/">
        <img src="/pokemon-logo.png" alt="logo" className="w-13 h-14"/>
      </a>
      <div className="flex items-center space-x-1">
        <ul className="hidden space-x-2 md:inline-flex">
          <li><Link href="/" className="px-4 py-2 font-semibold text-black rounded hover:bg-black hover:text-white">Home</Link></li>
          <li><Link href="/pokemon" className="px-4 py-2 font-semibold text-black rounded hover:bg-black hover:text-white">View</Link></li>
          <li><Link href="/createPokemon" className="px-4 py-2 font-semibold text-black rounded hover:bg-black hover:text-white">Create</Link></li>
          

        </ul>
      </div>
    </div>
  </header>
  </div>
  


</>


    )
}

export default Navigation;