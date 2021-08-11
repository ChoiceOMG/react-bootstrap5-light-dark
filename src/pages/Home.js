import React, { useState } from "react";
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Meta from '../components/Meta';

const Home = ({ socket }) => {

  const [username, setusername] = useState("");
  const [roomname, setroomname] = useState("");

  const sendData = () => {
    if (username !== "" && roomname !== "") {
      socket.emit("joinRoom", { username, roomname })
    } else {
      console.log("requre username and roomname", username, roomname)
      window.location.reload()
    }
  }

  // page content
  const pageTitle = 'Home'
  const pageDescription = 'welcome to react bootstrap template'

  return (
    <>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />
      <Container className="container-fluid pb-3">
        <input
          placeholder="Input username"
          value={username}
          onChange={ (event) => setusername(event.target.value) }
        ></input>
        <input
          placeholder="Room"
          value={roomname}
          onChange={ (event) => {setroomname(event.target.value)} }
        ></input>

        <Link to={`/chat/${roomname}/${username}`}>
          <button onClick={sendData}> Join </button>
        </Link>
        
        <div className="d-grid gap-3 app_window">
          <div className="border rounded-3 p-4">
            Section 1
          </div>
          <div className="border rounded-3 p-4">
            Section 2
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home