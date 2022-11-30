import React from "react";
import "./App.scss";
import Input from "./Components/Input";

function App(props) {
  let value;
  props.user_logined_in?value="loged":value="log in"
  return (
    <div className="App">
      <div className="signupSection">
  <div className="info">
    <h2>Mission to Deep Space</h2>
    <i className="icon ion-ios-ionic-outline" aria-hidden="true"></i>
    <p>The Future Is Here</p>
  </div>
  <form action="#" method="POST" className="signupForm" name="signupform">
    <h2>Sign Up</h2>
    <ul className="noBullet">
      <Input lname="username" tag="input" className="inputFields" type="text" id="username" name="username" placeholder="username" req="requires"/>
      <li>
        <Input lname="password" tag="input" className="inputFields" type="text" id="password" name="password" placeholder="password" req="requires"/>
      </li>
      <li>
        <Input lname="email" tag="input" className="inputFields" type="text" id="email" name="email" placeholder="Email" req="requires"/>
      </li>
      <li id="center-btn">
        

        <input type="submit" id="join-btn" name="join" alt="Join" value={value}/>

      </li>
    </ul>
  </form>
</div>
    </div>
  );
}

export default App;
