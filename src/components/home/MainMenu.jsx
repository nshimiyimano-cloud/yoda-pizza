import React from 'react'
import yodaLogo from '../../assets/Images/cropped-cropped-Yoda-2-1-e1667248094621.png'

function MainMenu() {
  return (
    <nav className="navbar navbar-expand-lg mb-5">
  <div className='container-fluid'>
    <a className="navbar-brand" href="#">
      <img src={yodaLogo} width="250" style={{filter:'brightness(90%)'}}/>

      </a>

    <button className="navbar-toggler nav-toggle-btn" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
      aria-label="Toggle navigation">

      <div className="bar-line"></div>
      <div className="bar-line"></div>
      <div className="bar-line"></div>

    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

      </ul>
      <ul className="d-flex navbar-nav justify-content-center align-items-center">
      <li className="nav-item">
          <a className="nav-link" href="/">
            Home
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/blog">
            Blog
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/about">
           About
          </a>
        </li>



        <li className="nav-item">
          <a className="nav-link" href="/menu">
            Menu
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="contact-us">
            BNB and TRIP Plan
          </a>
        </li>

        
      </ul>
    </div>
  </div>

  </nav>
  )
}

export default MainMenu