import * as React from 'react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Check, ChevronDown } from 'lucide-react'
import { DUMMY_DOCTORS } from '@/constants/dummyData'
import { Avatar, AvatarImage } from './ui/avatar'
import { Input } from './ui/input'
import { useEffect, useMemo } from 'react'

interface SelectDoctorProps {
  value: string
  onChange: (value: string) => void
}

export function SelectDoctor({ value, onChange }: SelectDoctorProps) {
  const [searchText, setSearchText] = React.useState('')
  const [open, setOpen] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState('')

  const filteredDoctors = useMemo(
    () =>
      DUMMY_DOCTORS.filter(doctor =>
        doctor.name.toLowerCase().includes(searchText.toLowerCase())
      ),
    [, searchText]
  )

  function handleSelect(currentValue: string) {
    setOpen(false)
    setSelectedValue(currentValue === selectedValue ? '' : currentValue)
    setSearchText('')
    onChange(currentValue)
  }

  useEffect(() => {
    if (value) {
      setSelectedValue(value)
    }
  }, [value])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-full justify-between'
        >
          {value
            ? DUMMY_DOCTORS.find(doctor => doctor.id === value)?.name
            : 'Select Doctor'}
          <ChevronDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='p-0'>
        <Command>
          <Input
            placeholder='Search for doctor name'
            className='h-9'
            onChange={e => setSearchText(e.target.value)}
          />
          <CommandList>
            <CommandEmpty>No doctor found.</CommandEmpty>
            <CommandGroup>
              {filteredDoctors.map(doctor => (
                <CommandItem
                  key={doctor.id}
                  value={doctor.id}
                  onSelect={handleSelect}
                >
                  <div className='flex items-center gap-4'>
                    <Avatar>
                      <AvatarImage src='src/assets/placeholder.png' />
                    </Avatar>
                    <p>{doctor.name}</p>
                  </div>
                  <Check
                    className={cn(
                      'ml-auto h-4 w-4',
                      value === doctor.id ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
