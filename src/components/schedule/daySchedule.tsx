import { cn } from '@/lib/utils'
import { generateTimeSlots } from './timeUtils'
import AppointmentCard from './appointmentCard'
import { Appointment } from '@/models/appointments'

interface DayScheduleProps {
  appointments: Appointment[]
  startTime: string
  endTime: string
  intervalMin: number
}

export default function DaySchedule({
  appointments,
  startTime,
  endTime,
  intervalMin,
}: DayScheduleProps) {
  const timeSlots = generateTimeSlots(startTime, endTime, intervalMin)

  return (
    <div className='grid grid-cols-12 gap-4'>
      {/* Time Column */}
      <div className='col-span-2'>
        {timeSlots.map((time, index) => (
          <div
            key={time}
            className={cn('flex h-16 items-center justify-center', {
              'bg-white': index % 2 === 0,
              'bg-gray-100': index % 2 !== 0,
            })}
          >
            {time}
          </div>
        ))}
      </div>

      {/* Appointment Column */}
      <div className='relative col-span-10'>
        {timeSlots.map((_, index) => (
          <div
            key={index}
            className={cn('h-16', {
              'bg-white': index % 2 === 0,
              'bg-gray-100': index % 2 !== 0,
            })}
          />
        ))}
        {appointments.map(appointment => (
          <AppointmentCard
            key={appointment.patient_id}
            appointment={appointment}
            timeSlots={timeSlots}
            intervalMin={intervalMin}
          />
        ))}
      </div>
    </div>
  )
}
