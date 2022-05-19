import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div>
            {/* Header */}
            <header className="header">
                <nav className="navbar navbar-expand-lg header-nav">
                    <div className="navbar-header">
                        <a id="mobile_btn" href="javascript:void(0);">
                            <span className="bar-icon">
                                <span />
                                <span />
                                <span />
                            </span>
                        </a>
                        <Link to="/" className="navbar-brand logo">
                            <img src="assets/img/logo.png" className="img-fluid" alt="Logo" />
                        </Link>
                    </div>
                    <div className="main-menu-wrapper">
                        <div className="menu-header">
                            <Link to="/" className="menu-logo">
                                <img src="assets/img/logo.png" className="img-fluid" alt="Logo" />
                            </Link>
                            <a id="menu_close" className="menu-close" href="javascript:void(0);">
                                <i className="fas fa-times" />
                            </a>
                        </div>
                        <ul className="main-nav">
                            <li className="active">
                                <Link to="/">Home</Link>
                            </li>
                            {/* <li className="has-submenu">
                                <a href="#">Doctors <i className="fas fa-chevron-down" /></a>
                                <ul className="submenu">
                                    <li><Link to="doctor-dashboard.html">Doctor Dashboard</Link></li>
                                    <li><Link to="appointments.html">Appointments</Link></li>
                                    <li><Link to="schedule-timings.html">Schedule Timing</Link></li>
                                    <li><Link to="my-patients.html">Patients List</Link></li>
                                    <li><Link to="patient-profile.html">Patients Profile</Link></li>
                                    <li><Link to="chat-doctor.html">Chat</Link></li>
                                    <li><Link to="invoices.html">Invoices</Link></li>
                                    <li><Link to="doctor-profile-settings.html">Profile Settings</Link></li>
                                    <li><Link to="reviews.html">Reviews</Link></li>
                                    <li><Link to="doctor-register.html">Doctor Register</Link></li>
                                </ul>
                            </li> */}
                            <li className="has-submenu">
                                <a href="#">Patients <i className="fas fa-chevron-down" /></a>
                                <ul className="submenu">
                                    <li><Link to="search.html">Search Doctor</Link></li>
                                    <li><Link to="doctor-profile.html">Doctor Profile</Link></li>
                                    <li><Link to="booking.html">Booking</Link></li>
                                    <li><Link to="checkout.html">Checkout</Link></li>
                                    <li><Link to="booking-success.html">Booking Success</Link></li>
                                    <li><Link to="patient-dashboard.html">Patient Dashboard</Link></li>
                                    <li><Link to="favourites.html">Favourites</Link></li>
                                    <li><Link to="chat.html">Chat</Link></li>
                                    <li><Link to="profile-settings.html">Profile Settings</Link></li>
                                    <li><Link to="change-password.html">Change Password</Link></li>
                                </ul>
                            </li>
                            {/* <li className="has-submenu">
                                <a href="#">Pages <i className="fas fa-chevron-down" /></a>
                                <ul className="submenu">
                                    <li><Link to="voice-call.html">Voice Call</Link></li>
                                    <li><Link to="video-call.html">Video Call</Link></li>
                                    <li><Link to="search.html">Search Doctors</Link></li>
                                    <li><Link to="calendar.html">Calendar</Link></li>
                                    <li><Link to="components.html">Components</Link></li>
                                    <li className="has-submenu">
                                        <Link to="invoices.html">Invoices</Link>
                                        <ul className="submenu">
                                            <li><Link to="invoices.html">Invoices</Link></li>
                                            <li><Link to="invoice-view.html">Invoice View</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="blank-page.html">Starter Page</Link></li>
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/register">Register</Link></li>
                                    <li><Link to="forgot-password.html">Forgot Password</Link></li>
                                </ul>
                            </li>
                            
                            <li className="login-link">
                                <Link to="/login">Login / Signup</Link>
                            </li> */}
                            <li>
                                <Link to="admin/index.html" target="_blank">Admin</Link>
                            </li>
                        </ul>
                    </div>
                    <ul className="nav header-navbar-rht">
                        <li className="nav-item contact-item">
                            <div className="header-contact-img">
                                <i style={{color: "#25D366"}} class="fab fa-whatsapp-square"></i>
                            </div>
                            <div className="header-contact-detail">
                                <a className="contact-info-header" href="https://wa.me/+918017036726/?text=urlencodedtext">Whatsapp</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link header-login" to="/login">login / Signup </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            {/* /Header */}
        </div>
    )
}

export default Header