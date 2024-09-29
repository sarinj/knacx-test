export type Appointment = {
  patient_id: number
  patientName: string
  doctorName: string
  description: string
  phone: string
  expense: number
  startTime: Date
  endTime: Date
}

export type Doctor = {
  id: string
  name: string
  type: string
  startTime: string
  endTime: string
}
export type DoctorAppointment = {
  doctor: Doctor
  appointments: Appointment[]
}
