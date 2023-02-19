import React from "react";
import '../Foot-child-style/Contact.scss'

export default function Contact() {
  return (
    <div className="container-page" >
      <div className="contact">
      <div className="contact_wrapper">
        <div className="contact_heading">Contact Us</div>
        <p className="contact_text">
          - Have question and need to talk to us? Please complete this form and
          we will get in touch as soon as possible.
        </p>
        <div className="contact_input_field">
          <div className="input-group">
          <label for="contact-email">Your email</label><br></br>
          <input
            type="text"
            className="contact-input"
            placeholder="name@example.com"
          ></input>
          </div>
          <div className="input-group">
          <label className="Label_input">Subject</label><br></br>
          <input type="text" className="contact-input" required=""></input>
          </div>
          <div className="input-group">
          <label className="Label_input">Message</label><br></br>
          <textarea
            className="contact-input"
            rows={8}
            style={{ width: "400px" }}
            required=""
          ></textarea>
          </div>
          <div className="input-group">
          <button disabled="" class="btn-send">Send</button>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
}
