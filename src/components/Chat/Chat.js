import React, { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { Chat as ChatModel } from "../../models";

const initialState = {
  text: "",
};

const Chat = () => {
  const [formState, setFormState] = useState(initialState);
  const [chat, setChat] = useState({});

  useEffect(() => {
    fetchChat();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchChat() {
    try {
      const chat = await DataStore.query(ChatModel);
      console.log("chat: ", chat);
      setChat(chat);
    } catch (err) {
      console.log("error fetching services with API: ", err);
    }
  }

  async function addMessage() {
    const prevMessages = JSON.parse(chat[0].messages)?.text;
    try {
      const message = {
        text: [...prevMessages, formState.text],
      };
      console.log(JSON.stringify(message));
      const temp = await DataStore.save(
        ChatModel.copyOf(chat[0], (updated) => {
          updated.messages = JSON.stringify(message);
        })
      );
      setChat([temp]);
      console.log(temp);
      setFormState(initialState);
    } catch (e) {
      console.log(e);
    }
  }

  const text = chat[0] ? JSON.parse(chat[0].messages)?.text : "Empty";

  return (
    <div style={styles.container}>
      <br />
      <h2>Chats</h2>
      <input
        onChange={(event) => setInput("text", event.target.value)}
        style={styles.input}
        value={formState.text}
        placeholder="Message"
      />
      <br />
      <button style={styles.button} onClick={addMessage}>
        Add Message
      </button>
      <br />
      <br />
      <br />
      {chat[0] && chat[0].messages && (
        <div style={styles.todo}>
          <p style={styles.todoName}>
            {text.map((message) => (
              <div>{message}</div>
            ))}
          </p>
        </div>
      )}
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

export default Chat;
