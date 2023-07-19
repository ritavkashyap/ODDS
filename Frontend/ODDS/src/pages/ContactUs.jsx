import React from 'react'
import Maps from '../components/Maps'
import '../styles/contact.css'

function ContactUs() {
  return (
    <div className="contactContainer">
      <div className="contactBox">
        <div className="contactLeft">
          <div className="map">
            <Maps />
          </div>
          <div className="address">
            <div className='para'>
              <p><span className="textstyle">Contact No:</span> +91 03842-242009 </p>
              <p><span className="textstyle">Email:</span> course-sil@cdac.in </p>
              <div className="addressmain">
                <div className="addressleft">
                  <p><span className="textstyle">Address:</span></p>
                </div>
                <div className="addressright">
                  <p>Production Building,</p>
                  <p>NIT Silchar Campus, </p> 
                  <p>NIT Road, Silchar,</p> 
                  <p>Assam, 788010</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contactRight">
          <h2 className='h2'>Contact Us</h2>
          <div className="contactus">
            <div className="name">
              <input type="text" className='inputBox' placeholder='First Name' />
              <input type="text" className='inputBox' placeholder='Last Name' />
            </div>
            <input type="email" className='inputbox' placeholder='Email' />
            <input type="int" className='inputbox' placeholder='Contact No' />
            <input type="text-area" className='textbox' placeholder='Message' />
          </div>
          <div className='btndiv'><button className='btn'>Submit</button></div>
        </div>
      </div>
    </div>

  )
}

export default ContactUs