import { ReactNode } from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card'
import { Avatar, AvatarImage } from '../ui/avatar'
import {
  ClipboardListIcon,
  Clock4Icon,
  Edit2Icon,
  PhoneIcon,
  PrinterIcon,
  ReceiptText,
  User2Icon,
} from 'lucide-react'
import { Appointment } from '@/models/appointments'
import { timeToString } from '@/lib/utils'

export default function HoverAppointmentDetail({
  children,
  appointment,
}: {
  children: ReactNode
  appointment: Appointment
}) {
  const {
    doctorName,
    patientName,
    description,
    patient_id,
    phone,
    startTime,
    endTime,
    expense,
  } = appointment
  return (
    <HoverCard>
      <HoverCardTrigger>{children}</HoverCardTrigger>
      <HoverCardContent
        className='h-full w-[350px] border border-black text-[14px]'
        align='start'
        side='top'
        sideOffset={20}
      >
        <div className='flex items-center justify-between gap-4'>
          <div className='p-1 font-semibold text-green'>
            <p>นัดหมาย</p>
            <p>ทันตแพทย์ {doctorName}</p>
          </div>
          <Avatar>
            <AvatarImage src='src/assets/placeholder.png' />
          </Avatar>
        </div>
        <div className='flex justify-between gap-4'>
          <div>
            <div className='flex items-center gap-2'>
              <User2Icon size={16} className='text-green' />
              <p>
                {patient_id} | {patientName}
              </p>
            </div>
            <div className='flex items-center gap-2'>
              <ClipboardListIcon size={16} className='text-green' />
              <p>{description}</p>
            </div>
            <div className='flex items-center gap-2'>
              <PhoneIcon size={16} className='text-green' />
              <p>{phone}</p>
            </div>
            <div className='flex items-center gap-2'>
              <ReceiptText size={16} className='text-green' />
              <p>ประเมินค่าใช้จ่าย {expense}</p>
            </div>
            <div className='flex items-center gap-2'>
              <Clock4Icon size={16} className='text-green' />
              <p>
                {timeToString(startTime)}-{timeToString(endTime)}
              </p>
            </div>
          </div>
          <div className='flex items-end gap-4'>
            <button>
              <PrinterIcon size={24} className='text-green' />
            </button>
            <button>
              <Edit2Icon size={24} className='text-green' />
            </button>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
