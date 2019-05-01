import React, { useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'




const  App = () =>  {

  const [state, setState] = useState({
    users: []
  })

  const queryUsers = async () => {

    try {
      const { data, status} = await axios.get('http://localhost:5000/api/users')
      if (status < 299) {
        setState({users: data.users })
      }
      
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    queryUsers()
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {
            state.users.map( user => (
            
             <div key={user._id}> {user.firstName}</div>,
             <div key={user._id}> {user.description}</div>      
            )
)
          }
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
