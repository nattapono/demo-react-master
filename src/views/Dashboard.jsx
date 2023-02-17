import React from 'react'

function dashboard({logout}) {
  return (
    <div>
        <p>dashboard</p>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default dashboard