import React from "react";
import ReactDOM from "react-dom/client";
import Events from "./Components/Events/Events";
// import Timer from "./Components/Timer";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import Strike from "./Components/Strike";
// import Count from "./Components/Count";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App user_loged_in={false} /> */}
    {/* <Strike/> */}
    {/* <Count/> */}
   {/* <Timer/> */}
   <Events/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
