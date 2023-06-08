import './About.css'
import { useSpring, config, animated } from 'react-spring';


const About = () => {
  const introAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: config.wobbly,
    delay: 500,
  });

  return (
    <animated.div className='about-page' style={introAnimation}>
      <h1>About Me</h1>
      <p>I am a passionate web developer and an ambitious legal practitioner</p>
      <p>I enjoy coding beautiful and responsive frontend UIs plus optimized backend applications.</p>
      <p>If I am to describe myself in a few words, I would say that I am a teenager, with almost two years of experience in the field. I have a programmer big brother and I love coding despite taking a law course in the university.</p>
      <p>I am a firm believer of the fact that my skills can be applied to any field. One of my projects inspiration came from this.</p>
    </animated.div>
  )
}

export default About