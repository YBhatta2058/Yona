import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className="footer" id="contact">
        <div className="section__container footer__container">
          <div className="footer__col">
            <div className="footer__logo">
              <a href="/#Home"><img style = {{width: '140px'}} src="./logo.png" alt="" /></a>
            </div>
          </div>
          <div className="footer__col">
            <h2>Contact Us and Book Us for Consultation</h2>
            <div>91-6009696208</div>
            <div>yonawellnessandhealthcare@gmail.com</div>
            <div className="footer__socials">
              <a href="#">
                <i className="ri-instagram-line"></i>
              </a>
            </div>
            <div style = {{paddingTop: '1rem'}}>
              <Link to = "/book" className="btnFooter">Book Appointment</Link>
            </div>
          </div>
          <div className="locationMap">
            <iframe
              width="100%"
              height="200"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115150.23442200756!2d91.89243714999999!3d25.590131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37507e8f34bd207f%3A0x62482df7108f882b!2sShillong%2C%20Meghalaya!5e0!3m2!1sen!2sin!4v1708101309626!5m2!1sen!2sin"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
            <br />
          </div>
        </div>
        Image by <a href="https://www.freepik.com/free-photo/tender-fresh-flower-twigs_4298233.htm#query=pink%20flowers%20background&position=2&from_view=keyword&track=ais&uuid=280534ce-cd64-4038-bcc7-c4ca09baf633">Freepik</a>
        <div className="section__container footer__bar">
          Copyright © 2023 Yona. All rights reserved.
        </div>
      </footer>
  )
}

export default Footer