import React from 'react'

const Sidebars = () => {
  return (
    <div>
        <section>
          <nav>
            <input type='text' placeholder='Email address or phone number'/> <br></br>
            <input type='Password' placeholder='password'/> <br></br>
            <button id='shift'>Log in</button> <br></br>
            <a id='tag' href='#'>forgotten password?</a> 
            <hr></hr>
            <button id='shi'>Create new account</button>
            </nav>
        </section>
    </div>
  )
}

export default Sidebars