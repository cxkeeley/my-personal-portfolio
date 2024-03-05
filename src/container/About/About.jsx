// import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { AppWrap, MotionWrap } from '../../wrapper'
import { images } from '../../constants'
import './About.scss'
// import { urlFor, client } from '../../client'

// ----------- untuk update dengan skill developer --------------
const abouts = [
  {
    title: 'React Native Developer',
    description:
      'I create beautiful and functional web applications with React Native.',
    imgUrl: images.about01,
  },
  {
    title: 'Backend Developer',
    description:
      'I build reliable and scalable web apps with clean code and industry-standard languages.',
    imgUrl: images.about02,
  },
  {
    title: 'Frontend Developer',
    description:
      'I create engaging and responsive web apps with user-friendly code and exceptional experiences.',
    imgUrl: images.about03,
  },
  {
    title: 'Web Designer',
    description:
      'I design visually stunning and intuitive web experiences with creativity and industry-standard tools.',
    imgUrl: images.about04,
  },
  // { title: 'Frontend Development', description: 'I am a good web developer.', imgUrl: images.about01},
  // { title: 'Backend Development', description: 'I am a good web developer.', imgUrl: images.about02},
  // { title: 'MERN Stack', description: 'I am a good web developer.', imgUrl: images.about03},
]

const About = () => {
  // const [abouts, setAbouts] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';

  //   client.fetch(query).then(data => setAbouts(data));
  // }, []);

  return (
    <>
      <h2 className="head-text">
        Good app design is <span>essential</span>
        <br />
        for modern businesses to stay <span>competitive</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profiles-item"
            key={about.title + index}
          >
            {/* <img src={urlFor(about.imgUrl)} alt={about.title} /> */}
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg')
