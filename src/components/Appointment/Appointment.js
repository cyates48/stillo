import React, { useEffect, useState } from "react";
import { API, graphqlOperation, DataStore } from "aws-amplify";
import { Appointment as AppointmentType } from "../../models";
import { listAppointments } from "../../graphql/queries";

const initialState = {
  status: "",
  stylistId: "",
  dateTime: "",
  serviceName: "",
  duration: "",
  price: "",
};

const Appointment = () => {
  const [formState, setFormState] = useState(initialState);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchAppointments() {
    try {
      const appointmentsResponse = await API.graphql(
        graphqlOperation(listAppointments)
      );
      const appointments = appointmentsResponse.data.listAppointments.items;
      setAppointments(appointments);
    } catch (err) {
      console.log("error fetching services with API: ", err);
    }
  }

  async function addAppointment() {
    try {
      const appointment = {
        status: formState.status,
        stylistId: "69abd1ec-4d22-4b09-a40a-20b0a9836280",
        dateTime: formState.dateTime,
        serviceName: formState.serviceName,
        duration: formState.duration,
        price: formState.price,
      };
      setAppointments([...appointments, appointment]);
      setFormState(initialState);
      await DataStore.save(new AppointmentType(appointment));
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div style={styles.container}>
      <br />
      <h2>Appointments</h2>
      <input
        onChange={(event) => setInput("status", event.target.value)}
        style={styles.input}
        value={formState.status}
        placeholder="Status"
      />
      <input
        onChange={(event) => setInput("dateTime", event.target.value)}
        style={styles.input}
        value={formState.dateTime}
        placeholder="Date and Time"
      />
      <input
        onChange={(event) => setInput("serviceName", event.target.value)}
        style={styles.input}
        value={formState.serviceName}
        placeholder="Service Name"
      />
      <input
        onChange={(event) => setInput("duration", event.target.value)}
        style={styles.input}
        value={formState.duration}
        placeholder="Duration"
      />
      <input
        onChange={(event) => setInput("price", event.target.value)}
        style={styles.input}
        value={formState.price}
        placeholder="Price"
      />
      <br />
      <button style={styles.button} onClick={addAppointment}>
        Create Appointment
      </button>
      <br />
      <br />
      <br />
      {appointments.map((appointment, index) => (
        <div key={appointment.id ? appointment.id : index} style={styles.todo}>
          <p style={styles.todoName}>{appointment.status}</p>
          <p style={styles.todoName}>{appointment.serviceName}</p>
          <p style={styles.todoDescription}>{appointment.dateTime}</p>
          <p style={styles.todoDescription}>{appointment.duration}</p>
          <p style={styles.todoDescription}>{appointment.price}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    width: 400,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  todo: { marginBottom: 15 },
  input: {
    border: "none",
    backgroundColor: "#ddd",
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  todoName: { fontSize: 20, fontWeight: "bold" },
  todoDescription: { marginBottom: 0 },
  button: {
    backgroundColor: "black",
    color: "white",
    outline: "none",
    fontSize: 18,
    padding: "12px 0px",
  },
};

export default Appointment;
