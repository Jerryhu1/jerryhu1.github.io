import React from "react"

const Contacts = () => {
  return (
    <div className="flex w-full bg-primary-100 justify-center text-primary-500 py-10">
      <div className="md:w-1/2">
        <span className="text-2xl font-serif">Send me a message!</span>
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