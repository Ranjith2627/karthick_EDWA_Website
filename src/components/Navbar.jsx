import React from 'react'
import { Link, Outlet } from 'react-router'
// import logo from '../assets/EDWA_Logo.png'
import logo from '../assets/logo.png'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top p-0">
                <div className="container-fluid bg-white">
                    <div>
                        <p className="navbar-brand text-center m-0 p-0" href="#">EDWA</p>
                        <p className="navbar-brand m-0 p-0" href="#">Design Studio</p>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 gap-4 align-items-center">
                            <li className="nav-item">
                                <Link to="/services" className="nav-link">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/portfolio" className="nav-link">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link"><img className='logo' src={logo} alt="" /></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section>
                <Outlet />
            </section>
        </>
    )
}

export default Navbar
