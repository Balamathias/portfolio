import { useEffect, useState } from 'react';
import './Home.css'
import { useSpring, animated, config } from "react-spring";
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';

// import { FaReact, FaJs, FaHtml5, FaPython, FaDatabase, FaGit, FaMobileAlt, FaServer } from "react-icons/fa";


const Home = () => {

  const [loader, setLoader] = useState(true)
    const introAnimation = useSpring({
        from: { opacity: 0, transform: "translateY(-50px)" },
        to: { opacity: 1, transform: "translateY(0)" },
        config: config.wobbly,
        delay: 500,
      });

    useEffect(() => {
      setTimeout(() => setLoader(false), 3500)
    }, [])

    if (loader) {
      return <Loader></Loader>
    }
  
    return (
        <div className="home-page">
            <animated.div className="intro" style={introAnimation}>
            <h1>Hi, <br /> I&apos;m Mathias</h1>
            <p>I&apos;m a fullstack Web developer.</p>
            <p>I specialize in building modern web applications using React, Python Django, and Django REST Framework (DRF).</p>
            <p>If you are looking out for a professional developer with frontend and backend technologies, then you are at the right place. <br />
            You can check out my stack on my <Link to='/skills'>skills page</Link>.
            </p>
        </animated.div>
    </div>
  )
}

export default Home