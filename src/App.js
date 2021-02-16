import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chat from './components/Chat';
import Login from './components/Login';
import { useStateValue } from './components/StateProvider';

function App() {
  // const [user, setUser] = useState(null);
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="App">
      <Router>
        {/* <h1>Hello,Welocme to Slack Clone</h1> */}
        {!user ? (
          <>
            {/* <h1>LOGIN Page</h1> */}
            <Login />
          </>
        ) : (
          <>
            {/* Header */}
            <Header />
            <div className="app__body">
              {/* Sidebar */}
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  {/* <h1>CHAT SCREEN</h1> */}
                  <Chat />
                </Route>
                <Router path="/">
                  <h1>Welcome</h1>
                </Router>
              </Switch>
            </div>
          </>
        )}
        {/* React-Router -> Chat Screen */}
      </Router>
    </div>
  );
}

export default App;
