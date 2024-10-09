import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");
const Chat = ({ email }: { email: string }) => {
  const [sendMessage, setSendMessage] = useState("");
  const [messageSender, setMessageSender] = useState("");
  const [receiveMessage, setReceiveMessage] = useState("");

  // { senderEmail, receiverEmail, message }
  const handleSendMessage = () => {
    socket?.emit("sendMessage", {
      senderEmail: email,
      receiverEmail: "zohre@gmail.com",
      message: sendMessage,
    });
  };

  useEffect(() => {
    socket?.emit("newUser", email);
    socket?.on("receiveMessage", ({ senderEmail, message }) => {
      setReceiveMessage(message);
      setMessageSender(senderEmail);
    });
  }, [socket]);
  return (
    <>
      <h3>{email}</h3>
      <br />
      <br />
      <br />
      <br />
      <input
        placeholder="Message..."
        onChange={(e) => setSendMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send Message</button>
      <h1>{messageSender}</h1>
      <p>{receiveMessage}</p>
    </>
  );
};

export default Chat;
