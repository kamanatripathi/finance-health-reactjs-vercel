// manual-components/input_manual/date.tsx
"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface DatePickerProps {
  selectedDate: Date | undefined;
  onDateSelect: (date: Date | undefined) => void;
  placeholder?: string;
  minDate?: Date;
  maxDate?: Date;
  className?: string;
  contentClassName?: string;
}

export function DatePicker({
  selectedDate,
  onDateSelect,
  placeholder = "Pick a date",
  minDate,
  maxDate,
  className,
  contentClassName
}: DatePickerProps) {
  return (
    <Popover>
      {/* Ensure asChild is here and it directly wraps the Button */}
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !selectedDate && "text-muted-foreground",
            className
          )}
          // No type="text" or any other input-like attributes here
          // This button is solely for display and triggering the popover
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {/* This is the text displayed, NOT an input field */}
          {selectedDate ? format(selectedDate, "PPP") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn("w-auto p-0", contentClassName)}>
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={onDateSelect}
          initialFocus
          disabled={(date) => {
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (minDate && maxDate) {
              return date < minDate || date > maxDate;
            } else if (minDate) {
              return date < minDate;
            } else if (maxDate) {
              return date > maxDate;
            }
            return date < new Date("1900-01-01") || date > today;
          }}
        />
      </PopoverContent>
    </Popover>
  )
}