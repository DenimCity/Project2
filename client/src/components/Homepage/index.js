import React, { Fragment, useEffect, useState} from 'react';
import { apiRoutes, fetch } from '../../lib'

 const Homepage = () => {


  const [state, setState] = useState({
    users: []
  })

  const queryUsers = async () => {
    try {
      const results = await fetch(queryUsers.name, 'GET', apiRoutes.getUsers)
      if(results){
        return setState({users: results.users })
      }
      throw new Error('Error retrieving data.')
    } catch (e) {
      console.log(e.message)
    }
  }

  const myFunction = () => {
    
  }

  useEffect(() => {
    queryUsers()
  },[])


  return (
    <div>
      {state.users.map(user => (
                <div className="UserOptionContainer" key={user._id}>
                <h1>Meet: {user.firstName} {user.lastName}</h1>
                <div>
              
                  <div className="functionContainer">
              
                    <div className="functions">
                      {/* <a href="/users/{{user._id}}/edit">Edit</a> */}
                    </div>
                    <button  onClick={() => myFunction()} className="functions">
                      {/* <a href="/users/{{user._id}}/delete">Delete</a> */}
                    </button>
                    <div className="functions">
                      {/* <a href="/users/{{user._id}}/influencer"> */}
                      {/* <div>View More</div></a> */}
                    </div>
              
                  </div>
                </div>
              </div>
      ))}
    </div>
  )
}
export default Homepage;
