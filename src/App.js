import React from "react";
import Navbar from "./components/Navbar";
import Chat from "./components/Chat";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const style = {
  appContainer: `max-w-[728px] bg-30 md:mt-2 mx-auto text-center text-white`,
  sectionContainer: `flex flex-col h-[90vh]  mt-10 shadow-xl border `,
};

function App() {
  const [user] = useAuthState(auth);
  //  console.log(user)
  return (
    <div className={style.appContainer}>
      <section className="{style.sectionContainer}">
        {/* Navbar */}
        <Navbar />

        {user ? <Chat /> : null}
      </section>
    </div>
  );
}

export default App;
