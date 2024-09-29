import { DUMMY_ROOMS } from '@/constants/dummyData'
import Room from './room'

export default function RoomList() {
  return (
    <div className='flex h-[calc(100vh-72px)] gap-x-4 overflow-x-auto py-2 pb-8'>
      {DUMMY_ROOMS.map(room => (
        <Room key={room.id} room={room} isPaymentRoom={room.isPaymentRoom} />
      ))}
    </div>
  )
}
