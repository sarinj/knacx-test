import type { Room } from '@/models/room'
import CustomerCard from './customerCard'
import { cn } from '@/lib/utils'

interface RoomProps {
  room: Room
  isPaymentRoom?: boolean
}

export default function Room({ room, isPaymentRoom = false }: RoomProps) {
  const { name, customers } = room
  const customerCount = customers.length
  return (
    <div className='flex h-full w-full flex-col'>
      <div className='flex items-center justify-center rounded-t-md bg-green p-4 text-white'>
        <p>
          {name} ({customerCount})
        </p>
      </div>
      <div
        className={cn(
          'h-full max-h-[calc(100vh-140px)] min-w-[300px] space-y-2 overflow-y-auto rounded-b-md bg-blue-1 p-4',
          { 'bg-green-2': isPaymentRoom }
        )}
      >
        {customers.map((customer, i) => (
          <CustomerCard key={customer.id} customer={customer} index={i} />
        ))}
      </div>
    </div>
  )
}
