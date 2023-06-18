import { useEffect, useState } from 'react';
import './Contact.css'
import { useSpring, animated, config } from 'react-spring';
import Loader from '../Loader/Loader';
import { FaCheck, FaTimes } from 'react-icons/fa';
// import MapComponent from '../Map/MapComponent';

const Contact = () => {
  
  const [loader, setLoader] = useState(true)
  const [message, setMessage] = useState({
    message: '',
    code: ''
  })
  const [showModal, setShowModal] = useState(false);

  const introAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: config.wobbly,
    delay: 500,
  });

  useEffect(() => {
    setTimeout(() => setLoader(false), 5000)
  }, [])

  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    message: '',
  });

  const handleFormChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitMessage = (e) => {
    e.preventDefault();
    const url = 'https://abulaw-production.up.railway.app/api/server/mail';
    fetch('http://127.0.0.1:8000/api/server/mail', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage({
          message:data.message,
          code:data.code
        });
        setShowModal(true);
        setFormData({
          fname: '',
          lname: '',
          email: '',
          message: '',
        });
      });
  };

  if (loader) {
    return <Loader></Loader>
  }

  return (
    <div className='contact-page'>
      <animated.div style={introAnimation}>
        <h1>Contact Me</h1>
        <p>I am available for work at anytime :&#41; Below is a contact form you can use to reach out to me.</p>
        <p>If you are curious to look out for me via my social handles, gently look at the left handside of the site. :&#41; <br />
        Those Social Icons are a great way to get in touch with me. Let us build something cool...
        </p>
        <div className="send-email">
          <h2>Send Me a Message:</h2>
          <form action="" method="post" onSubmit={submitMessage}>
            <input type="text" name="fname" placeholder='First Name' onChange={handleFormChange} value={formData.fname} required />
            <input type="text" name="lname" placeholder='Last Name' onChange={handleFormChange} value={formData.lname} required />
            <input type="email" name="email" placeholder='Email' onChange={handleFormChange} value={formData.email} required />
            <textarea name="message" cols="30" rows="10" onChange={handleFormChange} placeholder='Your message...' value={formData.message} required></textarea>
            <button type='submit' className='send-message-btn'>Send</button>
          </form>
        </div>
      </animated.div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <p className='message'>{message.message ? message.message : ''} {message.code ==200 ? <FaCheck color='green' />: <FaTimes color='red' />}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Contact;
