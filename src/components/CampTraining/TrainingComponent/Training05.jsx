import React,{useState} from 'react'
import PhoneInput from "react-phone-number-input"
import 'react-phone-number-input/style.css'


export default function Training05() {
  const [value, setValue] = useState()
  return (
    <div className='training05-main-container'>
      <div className="contact05-content">
        <h1>Join the 300+ companies that are leveraging our platform</h1>
        <p>Our expert will assist you with the best solutions for your company</p>
      </div>
      <div className="contact05-form">
        <form action="">
          <input type="text" name="" id="" placeholder='Name' />
          <PhoneInput
          className='phone05'
            placeholder="Enter phone number"
            value={value}
            onChange={setValue} />

          <input type="email" name="" id="" placeholder='Your Official Email ID*'required />
          <input type="text" name="" id="" placeholder='Company Name*' required />
          <input type="text" name="" id="" placeholder='Designation*' required/>
          <button type="submit">Request Callback</button>
        </form>
      </div>
    </div>
  )
}
