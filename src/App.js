import React, { useEffect, useState } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { createService } from "./graphql/mutations";
import { listServices } from "./graphql/queries";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Auth, DataStore, Storage } from "aws-amplify";
import { Service } from "./models";
// import Appointment from "./components/Appointment/Appointment";
import Album from "./components/Album/Album";
// import Chat from "./components/Chat/Chat";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

export const stylistId = "69abd1ec-4d22-4b09-a40a-20b0a9836280";
export const clientId = "1ad7d9b4-1858-429d-a8c1-f1b963111909";

const initialState = { serviceName: "", serviceDuration: "", servicePrice: "" };

const App = () => {
  const [formState, setFormState] = useState(initialState);
  const [services, setServices] = useState([]);
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchServicesDataStore();
    getUser();
    getFiles();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchServicesAPI() {
    try {
      const serviceData = await API.graphql(graphqlOperation(listServices));
      const services = serviceData.data.listServices.items;
      setServices(services);
      console.log("services fetched: ", services);
    } catch (err) {
      console.log("error fetching services with API: ", err);
    }
  }

  async function fetchServicesDataStore() {
    try {
      const services = await DataStore.query(Service);
      setServices(services);
      console.log("services fetched: ", services);
    } catch (err) {
      console.log("error fetching services with Data Store: ", err);
    }
  }

  async function addServiceDataStore() {
    try {
      const service = {
        name: formState.serviceName,
        duration: formState.serviceDuration,
        price: formState.servicePrice,
      };
      setServices([...services, service]);
      setFormState(initialState);
      await DataStore.save(new Service(service));
    } catch (e) {
      console.log(e);
    }
  }

  async function addServiceAPI() {
    try {
      const service = {
        name: formState.serviceName,
        duration: formState.serviceDuration,
        price: formState.servicePrice,
      };
      setServices([...services, service]);
      setFormState(initialState);
      await API.graphql(graphqlOperation(createService, { input: service }));
    } catch (err) {
      console.log("error creating services with API:", err);
    }
  }

  const onChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadPhoto = (e) => {
    Storage.put("rootFolder/childFolder/" + `chris.png`, file)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  function getFiles() {
    Storage.get("c_sunset.png")
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
    Storage.list("rootFolder/childFolder/")
      .then((result) => {
        result.sort((a, b) => a.lastModified - b.lastModified);
        setFiles(result);
        console.log(result);
      })
      .catch((err) => console.log(err));
  }

  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  async function getUser() {
    let user = await Auth.currentAuthenticatedUser();
    console.log("user: ", user);
  }

  const showServicesMenu = () => {
    return (
      <div style={styles.container}>
        <br />
        <h2>Services</h2>
        <input
          onChange={(event) => setInput("serviceName", event.target.value)}
          style={styles.input}
          value={formState.serviceName}
          placeholder="Name"
        />
        <input
          onChange={(event) => setInput("serviceDuration", event.target.value)}
          style={styles.input}
          value={formState.serviceDuration}
          placeholder="Duration"
        />
        <input
          onChange={(event) => setInput("servicePrice", event.target.value)}
          style={styles.input}
          value={formState.servicePrice}
          placeholder="Price"
        />
        <br />
        <button style={styles.button} onClick={addServiceDataStore}>
          Create Service (DataStore)
        </button>
        <br />
        <button style={styles.button} onClick={addServiceAPI}>
          Create Service (API)
        </button>
        <br />
        <br />
        <br />
        {services.map((service, index) => (
          <div key={service.id ? service.id : index} style={styles.todo}>
            <p style={styles.todoName}>{service.name}</p>
            <p style={styles.todoDescription}>{service.duration}</p>
            <p style={styles.todoDescription}>{service.price}</p>
          </div>
        ))}
        <br />
        <br />
      </div>
    );
  };

  return (
    <div style={styles.container}>
      {/* {showServicesMenu()} */}
      {/* <Appointment services={services} /> */}
      {/* <Chat /> */}
      <Album />
      <button style={styles.button} onClick={signOut}>
        Sign Out
      </button>
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

export default withAuthenticator(App);
