import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn";
import LogOut from "./LogOut";

const style = {

 
};

const NavBar = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <div >
      <div >
        <div className={style.chatbg}>
          <div className={style.logins}>{user ? <LogOut /> : <SignIn />}</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
