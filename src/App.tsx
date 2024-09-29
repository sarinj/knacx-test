import { RotateCwIcon } from 'lucide-react'
import DaySchedule from './components/schedule/daySchedule'
import { Button } from './components/ui/button'
import { DUMMY_DOCTOR_APPOINTMENTS } from './constants/dummyData'
import { useMemo, useState } from 'react'
import { SelectDoctor } from './components/selectDoctor'
import DoctorDetailCard from './components/schedule/doctorDetailCard'
import RoomList from './components/roomList'

function App() {
  const [selectedDoctor, setSelectedDoctor] = useState('1')

  const doctorAppointments = useMemo(() => {
    return (
      DUMMY_DOCTOR_APPOINTMENTS?.filter(
        appointment => appointment.doctor.id === selectedDoctor
      )?.flatMap(appointment => appointment.appointments) || []
    )
  }, [selectedDoctor])

  const doctorDetails = useMemo(() => {
    return DUMMY_DOCTOR_APPOINTMENTS.find(
      appointment => appointment.doctor.id === selectedDoctor
    )?.doctor
  }, [selectedDoctor])

  return (
    <div className='grid h-screen grid-cols-10 gap-12 overflow-hidden px-4 py-8'>
      <div className='col-span-4'>
        <SelectDoctor value={selectedDoctor} onChange={setSelectedDoctor} />
        {doctorDetails && <DoctorDetailCard doctor={doctorDetails} />}
        <div className='my-2 h-[calc(100vh-176px)] overflow-y-auto'>
          <DaySchedule
            appointments={doctorAppointments}
            startTime={doctorDetails?.startTime || '08:00'}
            endTime={doctorDetails?.endTime || '18:00'}
            intervalMin={15}
          />
        </div>
      </div>
      <div className='col-span-6'>
        <div className='flex items-center justify-between px-2'>
          <p className='text-3xl font-semibold'>วันที่ 30 ม.ค. 2564</p>
          <div className='flex items-center gap-4'>
            <p className='bg-blue-1 px-10 py-2 text-orange'>
              รายได้ทั้งหมด 0.00 บาท
            </p>
            <Button
              size='sm'
              variant='outline'
              className='border-orange shadow-lg'
            >
              <RotateCwIcon size={20} className='text-orange' />
            </Button>
          </div>
        </div>
        <RoomList />
      </div>
    </div>
  )
}

export default App
