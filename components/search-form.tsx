'use client'

import { format } from "date-fns"
import { CalendarIcon } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import React from "react"

export function SearchForm() {
  const [checkIn, setCheckIn] = React.useState<Date>()
  const [checkOut, setCheckOut] = React.useState<Date>()

  return (
    <div className="bg-white/90 p-6 rounded-none backdrop-blur-sm max-w-7xl mx-auto">
      <form className="flex items-center justify-center gap-4">
        <Input
          type="text"
          placeholder="Hotel, City Or Country"
          className="w-64 bg-white"
        />
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-44 justify-start text-left font-normal bg-white",
                !checkIn && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {checkIn ? format(checkIn, "MMM dd, yyyy") : <span>Check-In</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={checkIn}
              onSelect={setCheckIn}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-44 justify-start text-left font-normal bg-white",
                !checkOut && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {checkOut ? format(checkOut, "MMM dd, yyyy") : <span>Check-Out</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={checkOut}
              onSelect={setCheckOut}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <Select defaultValue="1">
          <SelectTrigger className="w-28 bg-white">
            <SelectValue placeholder="Rooms" />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4, 5].map((num) => (
              <SelectItem key={num} value={num.toString()}>
                {num} {num === 1 ? 'Room' : 'Rooms'}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select defaultValue="2">
          <SelectTrigger className="w-28 bg-white">
            <SelectValue placeholder="Adults" />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4].map((num) => (
              <SelectItem key={num} value={num.toString()}>
                {num} {num === 1 ? 'Adult' : 'Adults'}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select defaultValue="0">
          <SelectTrigger className="w-28 bg-white">
            <SelectValue placeholder="Children" />
          </SelectTrigger>
          <SelectContent>
            {[0, 1, 2, 3].map((num) => (
              <SelectItem key={num} value={num.toString()}>
                {num} {num === 1 ? 'Child' : 'Children'}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
          SEARCH
        </Button>
      </form>
    </div>
  )
}

