import './Home.css'
import { useSpring, animated, config } from "react-spring";

// import { FaReact, FaJs, FaHtml5, FaPython, FaDatabase, FaGit, FaMobileAlt, FaServer } from "react-icons/fa";


const Home = () => {
    const introAnimation = useSpring({
        from: { opacity: 0, transform: "translateY(-50px)" },
        to: { opacity: 1, transform: "translateY(0)" },
        config: config.wobbly,
        delay: 500,
      });
    
    return (
        <div className="home-page">
            <animated.div className="intro" style={introAnimation}>
            <h1>Hi, <br /> I&apos;m Mathias</h1>
            <p>I&apos;m a fullstack Web developer.</p>
            <p>I specialize in building modern web applications using React, Python Django, and Django REST Framework (DRF).</p>
        </animated.div>
    </div>
  )
}

export default Home