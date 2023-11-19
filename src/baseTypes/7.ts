/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Days{
  Monday = "Monday",
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = "Saturday",
  Sunday="Sunday"
}

function isWeekend(day: Days): boolean{
  if (day === Days.Saturday || day === Days.Sunday) return true
  return false
}

isWeekend(Days.Friday)