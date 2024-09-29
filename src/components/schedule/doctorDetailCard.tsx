import { ClockIcon } from 'lucide-react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Doctor } from '@/models/appointments'

interface DoctorDetailCardProps {
  doctor: Doctor
}

export default function DoctorDetailCard({ doctor }: DoctorDetailCardProps) {
  const { type, startTime, endTime } = doctor
  return (
    <div className='mt-2'>
      <div className='flex items-center justify-between rounded-md bg-blue p-2'>
        <p className='text-2xl font-semibold text-white'>{type}</p>
        <Avatar>
          <AvatarImage src='src/assets/placeholder.png' />
        </Avatar>
      </div>
      <div className='flex items-center justify-center gap-2 rounded-md bg-green-1 p-1'>
        <ClockIcon size={20} className='text-white' />
        <p className='text-white'>
          เวลาเข้างาน {startTime} - {endTime} น.
        </p>
      </div>
    </div>
  )
}
