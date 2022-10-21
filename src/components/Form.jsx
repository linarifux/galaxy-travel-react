import React from 'react'
import './form.css'

const Form = () => {
  return (
    <div className='form'>
        <form action="">
            <label htmlFor="name">Your Name</label>
            <input type="text" id='name'/>
            <label htmlFor="email">Email</label>
            <input type="email" id='email'/>
            <label htmlFor="subject">Subject</label>
            <input type="text" id='subject'/>
            <label htmlFor="details">Details</label>
            <textarea name="details" id="details" cols="30" rows="6" placeholder='Type a short message here'></textarea>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form