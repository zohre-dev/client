import { useState } from "react";
import Chat from "./chat";
function App() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState<boolean>(false);

  return (
    <>
      {user ? (
        <Chat email={email} />
      ) : (
        <>
          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={() => setUser(true)}>login</button>
        </>
      )}
    </>
  );
}

export default App;
