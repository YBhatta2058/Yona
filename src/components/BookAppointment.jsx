import React from "react";
import "./BookAppointment.css"

const BookAppointment = () => {
  return (
    <div class="formbold-main-wrapper">
      <div class="formbold-form-wrapper">
        <h2 class="appointmentHeader">
          Book Appointment and get one free yoga class
        </h2>
        <form action="https://formbold.com/s/FORM_ID" method="POST">
          <div class="formbold-mb-5">
            <label for="name" class="formbold-form-label">
              {" "}
              Full Name{" "}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              class="formbold-form-input"
            />
          </div>
          <div class="formbold-mb-5">
            <label for="phone" class="formbold-form-label">
              {" "}
              Phone Number{" "}
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              class="formbold-form-input"
            />
          </div>
          <div class="formbold-mb-5">
            <label for="email" class="formbold-form-label">
              {" "}
              Email Address{" "}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              class="formbold-form-input"
            />
          </div>
          <div class="formbold-mb-5">
            <label for="address" class="formbold-form-label">
              {" "}
              Address{" "}
            </label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Enter your address"
              class="formbold-form-input"
            />
          </div>
          <div class="formbold-mb-5">
            <label for="timing" class="formbold-form-label">
              {" "}
              Timing{" "}
            </label>
            <input
              type="text"
              name="timing"
              id="timing"
              placeholder="Enter timing details"
              class="formbold-form-input"
            />
          </div>
          <div>
            <div class="formbold-mb-5">
              <label for="address" class="formbold-form-label">
                {" "}
                Services{" "}
              </label>
              <select name="selectors" id="selectSt">
                <option value="">Choose your required service</option>
                <option value="Online Consultation">Online Consultation</option>
                <option value="Weight Loss Program">Weight Loss Program</option>
                <option value="PCOD Reversal Program">PCOD Reversal Program</option>
                <option value="Yoga & Diet Type 2 DM Program">Yoga & Diet Type 2 DM Program</option>
                <option value="Corporate Yoga">Corporate Yoga</option>
                <option value="Prenatal Yoga">Prenatal Yoga</option>
                <option value="online diet consultation">online diet consultation</option>
                <option value="Acupuncture">Acupuncture</option>
                <option value="General Yoga for Wellness & Mental Health">General Yoga for Wellness & Mental Health</option>
              </select>
            </div>

            <button class="formbold-btn">Book Appointment</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
