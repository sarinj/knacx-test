import { BanIcon } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'

export default function CustomerCard() {
  return (
    <div className='w-[300px] items-center rounded-md bg-white p-1 shadow-lg'>
      <div className='relative flex gap-x-2'>
        <Avatar className='mt-6 size-12'>
          <AvatarImage src='https://github.com/shadcn.png' />
        </Avatar>
        <div className='size-full'>
          <div className='flex h-[80px] w-full justify-between'>
            <div>
              <p className='text-blue text-lg font-semibold'>วรภัทธ บารมี</p>
              <p className='text-blue text-lg font-semibold'>6401023</p>
            </div>
            <div className='flex flex-col items-end justify-between'>
              <p className='bg-blue rounded-tr-md p-2 text-xs text-white'>05</p>
              <button className='hover:cursor-pointer'>
                <BanIcon size={20} color='red' />
              </button>
            </div>
          </div>
        </div>
        <div className='bg-green absolute left-0 top-0 rounded-tl-md px-4 py-2 text-xs font-semibold text-white'>
          01
        </div>
      </div>
      <p className='text-center text-sm text-gray-400'>9 วัน</p>
    </div>
  )
}
