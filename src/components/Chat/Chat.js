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
      setChat(chat[0]);
    } catch (err) {
      console.log("error fetching services with API: ", err);
    }
  }

  async function addMessage() {
    try {
      const message = {
        text: formState.text,
      };
      setChat({ ...chat, messages: [...chat.messages, message] });
      setFormState(initialState);
      console.log("chat: ", chat);
      await DataStore.save(new ChatModel(chat));
    } catch (e) {
      console.log(e);
    }
  }

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
        Create Chat
      </button>
      <br />
      <br />
      <br />
      {chat?.messages?.map((message, index) => (
        <div key={index} style={styles.todo}>
          <p style={styles.todoName}>{message.text}</p>
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

export default Chat;
