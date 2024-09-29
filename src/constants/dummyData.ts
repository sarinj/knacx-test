import { Appointment, Doctor } from '@/models/appointments'

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
  {
    patient_id: 1,
    patientName: 'John Doe',
    doctorName: 'Dr. Smith',
    description: 'Check up',
    phone: '1234567890',
    expense: 1000,
    startTime: new Date('2022-01-01T09:45:00'),
    endTime: new Date('2022-01-01T10:15:00'),
  },
]

export const DUMMY_DOCTORS: Doctor[] = [
  {
    id: '1',
    name: 'คุณหมอสมมุติ ทดสอบ',
    type: 'ทันตแพทย์',
    startTime: '09:00',
    endTime: '19:00',
  },
  {
    id: '2',
    name: 'Dr. Brown Smith',
    type: 'Orthopedic',
    startTime: '10:00',
    endTime: '18:00',
  },
  {
    id: '3',
    name: 'Dr. White Johnson',
    type: 'Pediatric',
    startTime: '08:00',
    endTime: '18:00',
  },
]

export const DUMMY_DOCTOR_APPOINTMENTS = [
  {
    doctor: DUMMY_DOCTORS[0],
    appointments: [
      {
        patient_id: 6401002,
        patientName: 'ภัทราพร ชัยเพชร์',
        doctorName: 'คุณหมอสมมุติ ทดสอบ',
        description: 'ครอบฟันหรือสะพานฟัน',
        phone: '1234567890',
        expense: 1000,
        startTime: new Date('2022-01-01T11:00:00'),
        endTime: new Date('2022-01-01T11:30:00'),
      },
      {
        patient_id: 6401024,
        patientName: 'John Doe',
        doctorName: 'Dr. Smith',
        description: 'Check up',
        phone: '1234567890',
        expense: 1000,
        startTime: new Date('2022-01-01T09:45:00'),
        endTime: new Date('2022-01-01T10:15:00'),
      },
    ],
  },
  {
    doctor: DUMMY_DOCTORS[1],
    appointments: [
      {
        patient_id: 1,
        patientName: 'John Doe',
        doctorName: 'Dr. Smith',
        description: 'Check up',
        phone: '1234567890',
        expense: 1000,
        startTime: new Date('2022-01-01T10:15:00'),
        endTime: new Date('2022-01-01T10:45:00'),
      },
    ],
  },
  {
    doctor: DUMMY_DOCTORS[2],
    appointments: [
      {
        patient_id: 1,
        patientName: 'John Doe',
        doctorName: 'Dr. Smith',
        description: 'Check up',
        phone: '1234567890',
        expense: 1000,
        startTime: new Date('2022-01-01T09:45:00'),
        endTime: new Date('2022-01-01T10:15:00'),
      },
      {
        patient_id: 1,
        patientName: 'John Doe',
        doctorName: 'Dr. Smith',
        description: 'Check up',
        phone: '1234567890',
        expense: 1000,
        startTime: new Date('2022-01-01T09:45:00'),
        endTime: new Date('2022-01-01T10:15:00'),
      },
    ],
  },
]
