import CustomerCard from './customerCard'

interface RoomProps {
  name: string
}

export default function Room({ name }: RoomProps) {
  return (
    <div className='flex h-full flex-col'>
      <div className='bg-green flex items-center justify-center rounded-t-md p-4 text-white'>
        <p>{name}</p>
      </div>
      <div className='bg-green-2 h-full max-h-[calc(100vh-137px)] space-y-2 overflow-y-auto rounded-b-md p-4'>
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
      </div>
    </div>
  )
}
