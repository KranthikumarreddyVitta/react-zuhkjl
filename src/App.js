import React from "react";
import "./style.css";
import Person from './Person/Person';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Person name="kranthi" age="28"/>
      <Person name="kumar" age="28"/>
      <Person name="reddy" age="28"/>
    </div>
  );
}
