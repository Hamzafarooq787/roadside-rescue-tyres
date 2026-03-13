'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {

  const pathname = usePathname()
  const [open,setOpen] = useState(false)

  const navLinks = [
    { name:"HOME", href:"/" },
    { name:"MOBILE TYRES", href:"/mobile-tyres" },
    { name:"RECOVERY", href:"/recovery" }
  ]

  return (
    <header className="absolute top-0 left-0 w-full z-50">

      <div className="max-w-[1400px] mx-auto px-6 py-6 flex items-center justify-between">

        {/* LOGO / NAME */}
        <Link
          href="/"
          className="text-white text-2xl font-bold tracking-wider"
        >
          MOBILE TYRES
        </Link>


        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-10 text-white text-lg font-semibold tracking-widest">

          {navLinks.map((link)=>(
            <Link
              key={link.href}
              href={link.href}
              className={`pb-1 border-b-2 transition ${
                pathname === link.href
                ? "border-[#25E2F4]"
                : "border-transparent hover:border-[#25E2F4]"
              }`}
            >
              {link.name}
            </Link>
          ))}

        </nav>


        {/* MOBILE BUTTON */}
        <button
          onClick={()=>setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28}/> : <Menu size={28}/>}
        </button>

      </div>


      {/* MOBILE MENU */}
      {open && (

        <div className="md:hidden bg-[#102122] text-white flex flex-col items-center gap-8 py-10">

          {navLinks.map((link)=>(
            <Link
              key={link.href}
              href={link.href}
              onClick={()=>setOpen(false)}
              className="hover:text-[#25E2F4]"
            >
              {link.name}
            </Link>
          ))}

        </div>

      )}

    </header>
  )

}
