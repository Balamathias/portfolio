import './Skills.css'
import { useEffect, useState } from 'react';
import { useSpring, config, animated } from 'react-spring';
import Loader from '../Loader/Loader';
import { FaDatabase, FaEdit, FaGit, FaJs, FaPython, FaReact, FaServer } from 'react-icons/fa';
import courseImage from '../../assets/images/literature1.jpg'


const Skills = () => {

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
    <div className='skills-page'>
        <animated.div className={''} style={introAnimation}>
        <h1>My Skills</h1>
        <p>I use the most modern development tools to do my job :&#41;</p>
        </animated.div>
        <div className="tools">
            <ul className='tools-list'>
                <li className='python'>
                    <FaPython />
                    <span>Python</span>
                </li>
                <li className='js'>
                    <FaJs />
                    <span>Javascript</span>
                </li>
                <li className='react'>
                    <FaReact/>
                    <span>ReactJs</span>
                </li>
                <li className='git'>
                    <FaGit/>
                    <span>Git and Github</span>
                </li>
                <li className='sql'>
                    <FaDatabase/>
                    <span>SQL</span>
                </li>
                <li className='django'>
                    <FaServer/>
                    <span>Django and Django restframework</span>
                </li>
            </ul>
        </div>
        <div className="projects">
            <h2>My projects.</h2>
            <div className="project" >
                <img src={courseImage} alt="Course Website Image" />
                <p>A Full Stack Course Study Website with HTML5, CSS3, Python:Django.</p>
                <a href="https://abulaw-production.up.railway.app/">Visit Site <FaEdit /></a>
            </div>
        </div>
    </div>
  )
}

export default Skills