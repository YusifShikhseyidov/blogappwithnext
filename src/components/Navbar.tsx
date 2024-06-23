import Link from "next/link"
import { ThemeSwitcherButton } from "./ThemeSwitcherButton"
import { Changa_One } from "next/font/google";

const tiChny = Changa_One({ subsets: ["latin"], weight: ["400"] })

export const Navbar = () => {
  return (
    <nav className="mx-auto max-w-5xl px-6 bg-transparent">
      <div className="w-full h-16 flex justify-between items-center">
        <Link href='/'>
          <span className={`${tiChny.className} text-[#1da1f2] text-3xl`}>Demo</span>
          Blog
        </Link>
        <div>
          <ThemeSwitcherButton/>
        </div>
      </div>
    </nav>
  )
}