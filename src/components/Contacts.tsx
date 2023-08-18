import React from "react"

const Contacts = () => {
  return (
    <div className="contact container-fullwidth">
      <div className="contact-content">
        <div className="contact-header header">
          <h1>Send me a message!</h1>
        </div>
        <div className="contact-form-container">
          <form className="contact-form">
            <ul className="contact-form-outer">
              <li>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter your name"/>
              </li>
              <li>
                <label htmlFor="email">Email</label>
                <input type="text" id="name" placeholder="Enter your email"/>
              </li>
              <li>
                <label htmlFor="message">Message</label>
                <textarea rows={6} id="name" placeholder="Enter your message"/>
              </li>
              <li>
                <button type="submit">Submit</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contacts