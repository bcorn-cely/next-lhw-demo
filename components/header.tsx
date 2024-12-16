'use client'

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ChevronDown, Globe, HelpCircle, ShoppingBag, User, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Header() {
  const [language, ] = useState("ENGLISH")
  
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-4">
            <Image
              src="/placeholder.svg"
              alt="LHW Logo"
              width={80}
              height={80}
              className="h-16 w-auto"
            />
          </Link>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-white text-xs">
              <HelpCircle className="h-4 w-4 mr-2" />
              HELP
            </Button>
            <div className="relative">
              <Button variant="ghost" size="sm" className="text-white text-xs">
                <Globe className="h-4 w-4 mr-2" />
                {language}
                <ChevronDown className="h-3 w-3 ml-1" />
              </Button>
            </div>
            <Button variant="ghost" size="sm" className="text-white text-xs">
              <User className="h-4 w-4 mr-2" />
              LOG IN
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="text-white text-xs border-white hover:bg-white hover:text-black transition-colors bg-transparent rounded-full px-6"
            >
              JOIN NOW
            </Button>
            <Button variant="ghost" size="sm" className="text-white">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white">
              <ShoppingBag className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <nav className="mt-8">
          <div className="flex justify-center space-x-16">
            <Link href="/find-hotel" className="text-white hover:text-gray-200 text-sm tracking-wider">
              FIND A HOTEL
            </Link>
            <Link href="/inspired" className="text-white hover:text-gray-200 text-sm tracking-wider">
              GET INSPIRED
            </Link>
            <Link href="/offers" className="text-white hover:text-gray-200 text-sm tracking-wider">
              OFFERS
            </Link>
            <Link href="/club" className="text-white hover:text-gray-200 text-sm tracking-wider">
              LEADERS CLUB
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

