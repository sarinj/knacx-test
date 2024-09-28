import { Appointment } from '@/components/schedule/interface'

export const DUMMY_APPOINTMENTS: Appointment[] = [
  {
    patient_id: 1,
    patientName: 'John Doe',
    doctorName: 'Dr. Smith',
    description: 'Check up',
    phone: '1234567890',
    expense: 1000,
    startTime: new Date('2022-01-01T11:00:00'),
    endTime: new Date('2022-01-01T11:30:00'),
  },
]
