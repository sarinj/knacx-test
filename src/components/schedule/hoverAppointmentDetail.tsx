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

export default function HoverAppointmentDetail({
  children,
}: {
  children: ReactNode
}) {
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
            <p>ทันตแพทย์ คุณหมอสมมุติ ทดสอบ</p>
          </div>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' />
          </Avatar>
        </div>
        <div className='flex justify-between gap-4'>
          <div>
            <div className='flex items-center gap-2'>
              <User2Icon size={16} className='text-green' />
              <p>6400004 | จรูญ ทดสอบ4</p>
            </div>
            <div className='flex items-center gap-2'>
              <ClipboardListIcon size={16} className='text-green' />
              <p>บริการรักษารากฟัน</p>
            </div>
            <div className='flex items-center gap-2'>
              <PhoneIcon size={16} className='text-green' />
              <p>095-646-0248</p>
            </div>
            <div className='flex items-center gap-2'>
              <ReceiptText size={16} className='text-green' />
              <p>ประเมินค่าใช้จ่าย 0.00</p>
            </div>
            <div className='flex items-center gap-2'>
              <Clock4Icon size={16} className='text-green' />
              <p>18:00-18:30</p>
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
