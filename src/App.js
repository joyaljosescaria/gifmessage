import React from "react";
import "./styles.css";
import Typed from 'react-typed';

export default function App() {
  return (
    <div className="App">
        <Typed
              strings={['<h1>Dear Sruthi , <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We are happy to announce that you are the winner of the onam contest "<span>#ormayilonam</span>". Here is our gift for you. You can access your gift using the following button given below.You can use that personal website in your resumes , instagram , facebook and everywhere it\'s applicable. <br/>Stay Safe , Stay Healthy <br/> with   <span class="jacr"> &#10084; <a href="https://jacreation.netlify.app/">JA Creation</a></span> </h1>']}
              typeSpeed={50}
        />
        <br/>
        <br/>
        <a href="https://sruthibalan.netlify.app" target="blank" className="btn">GIFT LINK</a>
        <br/>
    </div>
  );
}
