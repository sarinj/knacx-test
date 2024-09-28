export function convertTimeToMinutes(time: string) {
  const [hours, minutes] = time.split(':').map(Number)
  return hours * 60 + minutes
}

export function getAppointmentPosition(
  timeSlots: string[],
  intervalMin: number,
  startTime: string,
  endTime: string
) {
  const startMinutes = convertTimeToMinutes(startTime)
  const endMinutes = convertTimeToMinutes(endTime)

  const totalSlotHeight = 60 / intervalMin
  const height = ((endMinutes - startMinutes) / intervalMin) * totalSlotHeight

  const startPosition =
    ((startMinutes - convertTimeToMinutes(timeSlots[0])) / intervalMin) *
    totalSlotHeight

  return { height, startPosition }
}

export function generateTimeSlots(
  startTime: string,
  endTime: string,
  interval: number
) {
  const slots = []
  let current = new Date(`1970-01-01T${startTime}:00`)
  const end = new Date(`1970-01-01T${endTime}:00`)

  while (current <= end) {
    slots.push(current.toTimeString().substring(0, 5))
    current.setMinutes(current.getMinutes() + interval)
  }

  return slots
}
