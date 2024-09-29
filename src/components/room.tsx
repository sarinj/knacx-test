import CustomerCard from './customerCard'

interface RoomProps {
  name: string
}

export default function Room({ name }: RoomProps) {
  return (
    <div className='flex h-full flex-col'>
      <div className='flex items-center justify-center rounded-t-md bg-green p-4 text-white'>
        <p>{name}</p>
      </div>
      <div className='h-full max-h-[calc(100vh-140px)] space-y-2 overflow-y-auto rounded-b-md bg-green-2 px-4'>
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
      </div>
    </div>
  )
}
