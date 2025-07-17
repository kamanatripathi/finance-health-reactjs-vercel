import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'
interface SelectOption {
    value: string;
    label: string;
  }

interface CustomSelectProps {
    label: string; // Text for the SelectLabel (e.g., "Fruits")
    placeholder?: string; // Placeholder text for the SelectTrigger (e.g., "Select a fruit")
    options: SelectOption[]; // Array of options to display
    onValueChange?: (value: string) => void; // Optional callback for when the value changes
    defaultValue?: string; // Optional default selected value
    className?: string; // Optional className for the SelectTrigger
  }
export const SelectApp: React.FC <CustomSelectProps> = ({
    label,
    placeholder = "Select an option", // Default placeholder
    options,
    onValueChange,
    defaultValue,
    className,
  
}) => {
  

      
  return (
    <>
        <Select onValueChange={onValueChange} defaultValue={defaultValue}>
      <SelectTrigger className={className || "w-[180px]"}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>

</>
  )
}

