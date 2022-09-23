import { useState, useEffect } from "react";
import "components/Application.scss";
import "components/Appointment";
import axios from "axios";

export default function useApplicationData(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  useEffect(() => {
    Promise.all([
      axios.get("api/days"),
      axios.get("api/appointments"),
      axios.get("api/interviewers"),
    ]).then((all) => {
      const daysData = all[0].data;
      const appointmentsData = all[1].data;
      const interviewersData = all[2].data;

      setState((prev) => ({
        ...prev,
        days: daysData,
        appointments: appointmentsData,
        interviewers: interviewersData,
      }));
    });
  }, []);

  //obtains number of spots left for the specific day
  //gets spots
  const getSpotsForDays = function (day, appointments) {
    let spots = 0;
    for (const id of day.appointments) {
      const appointment = appointments[id];
      if (!appointment.interview) {
        spots++;
      }
    }

    return spots;
  };
  //after getting spots, updates the spots with the remaining spots
  const updateSpots = function (state, appointments, id) {
    const dayObj = state.days.find((day) => day.name === state.day);

    const spots = getSpotsForDays(dayObj, appointments);

    const day = { ...dayObj, spots };

    return state.days.map((d) => (d.name === state.day ? day : d));
  };

  const bookInterview = function (id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.put(`/api/appointments/${id}`, { interview }).then(() => {
      setState((prevState) => {
        const days = updateSpots(state, appointments);
        return { ...prevState, appointments, days };
      });
    });
  };
  //cancel interview function that updates the database (deletes item) and makes changes to reflex empty MODE
  const cancelInterview = function (id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.delete(`api/appointments/${id}`, appointment).then(() => {
      setState((prevState) => {
        const days = updateSpots(state, appointments);
        return { ...prevState, appointments, days };
      });
    });
  };

  const setDay = (day) => setState({ ...state, day });

  return { state, setDay, bookInterview, cancelInterview };
}
