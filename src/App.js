import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const usernameRef = useRef();
  const mailRef = useRef();
  const phonenumberRef = useRef();
  const passwordRef = useRef();
  const profilepicRef = useRef();
  const upiIdRef = useRef();


  const handleevent = (e) => {
    e.preventDefault();
  }

  const handlesubmit = () => {

    console.log('submission in progress');
    var userDetailObj = {
      "username": usernameRef.current.value,
      "mailid": mailRef.current.value,
      "phonenumber": phonenumberRef.current.value,
      "password": passwordRef.current.value,
      "profilepic": profilepicRef.current.value,
      "upiid": upiIdRef.current.value,
    }

    fetch("http://localhost:1112/receiver", {
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userDetailObj)
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
  }


  return (
    <div className="App">
      <form onSubmit={handleevent} id="form_tag">
        <label>username</label>
        <input ref={usernameRef} type="text"></input>
        <label>email</label>
        <input ref={mailRef} type="email"></input>
        <label>phonenumber</label>
        <input ref={phonenumberRef} type="number"></input>
        <label>password</label>
        <input ref={passwordRef} type="password"></input>
        <label>profile pic</label>
        <input ref={profilepicRef} type="file"></input>
        <label>upiId</label>
        <input ref={upiIdRef} type="text"></input>
        <button onClick={handlesubmit}>submit</button>
      </form>
    </div>
  );
}

export default App;
