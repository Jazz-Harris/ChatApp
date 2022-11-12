import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const style = {
  form: `h-14 w-full max-w-[728px]  rounded-md sticky bg-black  flex text-xl absolute bottom-0 z-50`,
  input: `w-full h-14 rounded-md text-xl  bg-gray-500 text-white outline-none py-0 px-4 my-0 mx-0 border-none `,
  button: `w-[14%] bg-green-500 hover:bg-green-700 rounded-md mt-0 text-white py-0 px-0 my-0 mx-0 z-50`,
};

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a valid message");
      return;
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "ChatMessages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form onSubmit={sendMessage} className={style.form}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
        type="text"
        maxlength="25"
        placeholder="Message"
        id="message"
        min="2"
      />
      <button className={style.button} type="submit">
        Send
      </button>
    </form>
  );
};

export default SendMessage;
