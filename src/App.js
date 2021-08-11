import React from "react";
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import io from "socket.io-client";
import Layout from './layout/Layout';
import About from './pages/About';
import Chat from './pages/Chat';
// pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';
// Layout
import Process from "./process/process";


const socket = io.connect('/');

function Appmain(props) {
  return (
    <React.Fragment>
      <div className="right">
        <Chat
          username={props.match.params.username}
          roomname={props.match.params.roomname}
          socket={socket}
        />
      </div>
      <div className="left">
        <Process />
      </div>
    </React.Fragment>
  );
}


const App = () => {
  return (
    <Layout>
      <Container>
        <Switch>
          <Route path='/' exact>
            <Home socket={socket} />
          </Route>
          <Route path="/chat/:roomname/:username" component={Appmain} />
          <Route path='/about' component={About} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </Layout>
  )
}

export default App