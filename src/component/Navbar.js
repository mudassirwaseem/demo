import React from 'react'

function Navbar() {
    return (
        <div>


 <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img style={{width:230 , height:60}} src="Assets/2.png" alt=""/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Post a free job  <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Employer & Agency</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Job seekers</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link " href="#">Jobs</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link " href="#">Service</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link " href="#">Pricing</a>
            </li>
          </ul>
                <h4 style={{marginRight:10}}>Login</h4>
            <button style={{width:100,backgroundColor:"#ff1a75" ,color:"black", borderRadius:20,border:"none",height:40}}>Sign In</button>
        </div>
      </nav>  
            </div>
    )
}

export default Navbar
