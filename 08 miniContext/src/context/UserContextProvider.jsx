import React from 'react'
import UserContext from './UserContext'
const UserContextProvider = ({children}) => {
    // Initialize user state to null. This will be updated when a user logs in.
    // and passing the data , api call
    const [user,setUser] = React.useState(null)
  return (        
                     // trough  in kr do yeh pe
     <UserContext.Provider value={{user,setUser}}>  
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider


