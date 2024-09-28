import { timeToString } from '@/lib/utils'
import { getAppointmentPosition } from './timeUtils'
import { Appointment } from './interface'

interface AppointmentProps {
  appointment: Appointment
  timeSlots: string[]
  intervalMin: number
}

export default function AppointmentCard({
  appointment,
  timeSlots,
  intervalMin,
}: AppointmentProps) {
  const { startTime, endTime, description, patientName, patient_id, phone } =
    appointment
  const { height, startPosition } = getAppointmentPosition(
    timeSlots,
    intervalMin,
    timeToString(startTime),
    timeToString(endTime)
  )

  return (
    <div
      key={patient_id}
      className='absolute left-0 right-0 rounded-lg bg-orange p-2 shadow-lg'
      style={{
        height: `${height}rem`,
        top: `${startPosition}rem`,
        zIndex: 10,
      }}
    >
      <p>
        {patientName} | {description} | {patient_id} | {phone} |{' '}
        {timeToString(startTime)}-{timeToString(endTime)} น.
      </p>
    </div>
  )
}
