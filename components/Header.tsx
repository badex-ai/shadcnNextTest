import Container from "./ui/container"
import Link from "next/link"
import {Button} from "@/components/ui/button"
import React from 'react'
import { ShoppingCart ,Sun , Moon, Menu} from "lucide-react"
import ProfileButton from "./ui/profileButton"
import { useTheme } from "next-themes"
import { Sheet ,SheetContent,SheetTrigger} from "./ui/sheet"

function Header() {

  const {theme , setTheme} = useTheme();
  const routes = [
    {href:"/",label: "Products"},
    {href: "/",label: "Categories"},
    {href: "/",label: "On Sale"}
    ]

    let navs = routes.map((route,i)=>(
      <Button key={i} asChild variant="ghost">
        <Link className="text-sm font-medium transition-colors" key={i} href={route.href}>

        {route.label}
        </Link>
      </Button>)
    )
    let smallNavs = routes.map((route,i)=>(
      <Link key={i} href={route.href} className="px-2 py-1 text-lg"></Link>
    ))

  return (
    <div>
    <header className="sm:flex sm:justify-between py-3 px-4border-b">
    <Container >
      
      <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
        
      <div className=" flex items-center">
        <Sheet>
          <SheetTrigger>
            <Menu className="h-6 md:hidden w-6"></Menu>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:[400px]" >
            <nav className="flex flex-col gap-4">
              {smallNavs}
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/" className="ml-4 lg:ml-0">
          <h1 className="font-bold text-xl">STORE NAME</h1>
        </Link>
        
      </div>
      <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
      {navs}
        
      </nav>
      <div className="flex items-center">
        <Button
        variant="ghost" size="icon" className="mr-2" aria-label="Shopping Cart">
          <ShoppingCart className="h-6 w-6"/>
           <span className="sr-only">Shopping Cart</span>
          </Button>
          <Button variant="ghost" size="icon" aria-label="Toggle Theme" className="mr-6"
           onClick={()=>setTheme(theme === "dark" ? "light" : "dark")}
           >
            <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"></Sun>
            <Moon className ="absolute h-6 w-6 rotate-90 scale-0 transition-all 
            dark:rotate-0 dark:scale-100"></Moon>
          </Button>
          <ProfileButton></ProfileButton>
      </div>
    </div>
      </Container>
    
    </header>
    </div>
  
    
  )
}

export default Header



