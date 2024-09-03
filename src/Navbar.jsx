import React from 'react'

export default function Navbar() {
  return (
    
 <nav className="navbar navbar-expand-lg navbar-light bg-light">  
  <div className="container">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav m-auto gap-5 mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">abou</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Register</a>
        </li>
       
      </ul>
    </div>
  </div>
  
</nav>

  )
}
