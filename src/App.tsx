import Room from './components/room'
import DaySchedule from './components/schedule/daySchedule'
import { Button } from './components/ui/button'
import { DUMMY_APPOINTMENTS } from './constants/dummyData'

function App() {
  return (
    <div className='grid h-screen grid-cols-5 gap-4 px-4 py-8'>
      <div className='col-span-2'>
        <DaySchedule
          appointments={DUMMY_APPOINTMENTS}
          startTime='09:00'
          endTime='19:00'
          intervalMin={15}
        />
      </div>
      <div className='col-span-3'>
        <div className='flex items-center justify-between px-2'>
          <p className='text-3xl font-semibold'>วันที่ 30 ม.ค. 2564</p>
          <div className='flex items-center gap-4'>
            <p className='bg-blue-1 px-10 py-2 text-orange'>
              รายได้ทั้งหมด 0.00 บาท
            </p>
            <Button size='icon'>r</Button>
          </div>
        </div>
        <div className='mt-1 flex h-full gap-x-4 overflow-x-auto'>
          <Room name='Room 1' />
          <Room name='Room 1' />
          <Room name='Room 1' />
          <Room name='Room 1' />
        </div>
      </div>
    </div>
  )
}

export default App
