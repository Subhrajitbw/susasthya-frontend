import React from 'react'
import "./kyd.css"
import {Link} from "react-router-dom"
function KYD() {
  return (
    <div class="container my-4 py-5 ">
      <h3 className='text-center'>Know Your Disease</h3>
      <form className="contact-form row justify-content-center">
        <div className="form-field col-lg-6">
          <input id="name" className="input-text js-input" type="text" required />
          <label className="label" htmlFor="name">Name</label>
        </div>
        <div className="form-field col-lg-6 ">
          <input id="email" className="input-text js-input" type="email" required />
          <label className="label" htmlFor="email">E-mail</label>
        </div>
        <div className="form-field col-lg-6 ">
          <input id="company" className="input-text js-input" type="text" required />
          <label className="label" htmlFor="company">Phone Number</label>
        </div>
        <div className="form-field col-lg-6 ">
          <input id="company" className="input-text js-input" type="text" required />
          <label className="label" htmlFor="company">Age</label>
        </div>
        <div className="form-field col-lg-6 ">
          <textarea id="phone" className="input-text js-input" rows={5} columns={5} type="text" required />
          <label className="label" htmlFor="phone">Problem</label>
        </div>
        <div className="form-field col-lg-6">
          <select class="custom-select" id="gender2">
            <option selected>Gender</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
          </select>
        </div>
        <div className="form-field col-lg-6">
          <select class="custom-select" id="gender2">
            <option selected disabled>Preferred Contact Method</option>
            <option value="1">Phone</option>
            <option value="2">Whatsapp</option>
          </select>
        </div>
        
        <div className="form-field col-lg-12">
        <Link to="/know-your-disease" className="btn btn-primary search-btn"><span className="p-2">Submit</span><i className="p-2 fas fa-arrow-right" /> </Link>
        </div>
      </form>
    </div>
  )
}

export default KYD