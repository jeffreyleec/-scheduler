export function getAppointmentsForDay(state, day) {
  const result = []

  const daysArry = state.days
  const appts = daysArry.find(item => item.name === day);
  if (!appts) {
    return []

  }
  const apptsForDay = appts.appointments

  for (let appointmentsDays of apptsForDay) {
    const appointments = state.appointments
    result.push(appointments[appointmentsDays])
  }

  return result
}




export function getInterview(state, interview) {
  
  if (!interview) {
    return null
  }
   return {
    "student": interview.student,
    "interviewer": state.interviewers[interview.interviewer]
  }
}





export function getInterviewersForDay(state, day) {
  const result = []

  const daysArry = state.days
  const appts = daysArry.find(item => item.name === day);
  
  if (!appts) {
    return []

  }

  const interviewersForDays = appts.interviewers
  
  for (let interviewers of interviewersForDays) {
    const interviewerState = state.interviewers
    result.push(interviewerState[interviewers])
  }
  
  return result
}