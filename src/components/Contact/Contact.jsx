import { useState } from 'react';
import './Contact.css'
import { useSpring, animated, config } from 'react-spring';


const Contact = () => {

  const introAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: config.wobbly,
    delay: 500,
  });
  
  const [formData, setFormData] = useState({})
  
  const handleFormChange = (e) => {
    setFormData(() => {
      formData[e.target.name] = e.target.value
      return formData
    })
  }
  
    const submitMessage = (e) => {
      e.preventDefault()
      const url = '/'
      fetch(url, {
        method: 'POST',
        body: formData,
      })
      .then(res => res.json())
      .then(data => alert(data))
    }

  return (
    <animated.div className='contact-page' style={introAnimation}>
      <h1>Contact Me</h1>
      <p>I am available for work at anytime :&#41; Below is a contact form you can use to reach out to me.</p>
      <div className="send-email">
        <h2>Send Me a Message:</h2>
        <form action="" method="post" onSubmit={submitMessage}>
          <input type="text" name="fname" placeholder='First Name' onChange={handleFormChange} value={formData.fname}/>
          <input type="text" name="lname" placeholder='Last Name' onChange={handleFormChange} value={formData.lname}/>
          <input type="email" name="email" placeholder='Email' onChange={handleFormChange} value={formData.email}/>
          <textarea name="message" id="" cols="30" rows="10" onChange={handleFormChange} placeholder='Your message...' value={formData.message}></textarea>
          <button className='send-message-btn'>Send</button>
        </form>
      </div>
    </animated.div>
  )
}

export default Contact