"use client"

import { motion, useScroll } from "framer-motion"
import { useEffect, useState } from "react"
import { ModeToggle } from "@/components/mode-toggle"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50)
    })
  }, [scrollY])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.span 
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"
            whileHover={{ scale: 1.05 }}
          >
            JZP
          </motion.span>

          <div className="flex items-center space-x-4">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className="px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-primary/10"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector(item.href)
                  element?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {item.name}
              </motion.a>
            ))}
            <div className="ml-2">
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
