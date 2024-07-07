"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export const ThemeSwitcherButton = () => {
  const {theme, setTheme} = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(()=>{
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <button className="hover:bg-[#000] hover:text-white dark:hover:bg-white dark:hover:text-black p-2 rounded-full transition duration-150 ease-linear" 
      onClick={()=> setTheme(theme==="light" ? "dark" : "light")}>
      {theme==="light" ? <Moon/> : <Sun/>}
    </button>
  )
}