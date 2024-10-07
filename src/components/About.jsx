import React from 'react'
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: {
    duration: 10,
    ease: "easeInOut",
  },
};

const parentVariants = {
  initial: {
    opacity: 0,
    transition: { staggerChildren: 0.2}, // Staggers child animations by 0.2 seconds
  },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.5 }, // Applies the same staggering effect when animating to full opacity
  },
};

const childVariants = {
  initial: { opacity: 0, y: 20 }, // Start hidden and slightly translated down
  animate: { opacity: 1, y: 0 }, // Fade in and move to original position
};


function About() {


  
  return (
    <> 
    
    <motion.div>
    <p className='sm:text-[18px] text-[14px] text-white uppercase text-center p-2 tracking-wider'>Sneha Patidar</p>
    <h2 className='text-white  md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>React JS Developer</h2>
    </motion.div>

    <motion.p
      variants={fadeIn}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.5 }}
        
        className='mt-4 text-[#aaa6c3] text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in 
        JavaScript, and expertise in frameworks like React and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <motion.div
       animate={{ x: 100 }}
       transition={{ duration: 1, ease: "easeInOut"}}

       className='text-white  md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'
       >
         Languages
       </motion.div>

       <motion.div
  variants={parentVariants}
  initial="initial"
  animate="animate"
  className='text-white  md:text-[40px] sm:text-[50px] xs:text-[40px] text-[30px]'

>
  <motion.div variants={childVariants}>HTML</motion.div>
  <motion.div variants={childVariants}>CSS</motion.div>
  <motion.div variants={childVariants}>JavaScript</motion.div>
  <motion.div variants={childVariants}>React js</motion.div>
  <motion.div variants={childVariants}>Bootstrap</motion.div>
  <motion.div variants={childVariants}>Tailwind</motion.div>

</motion.div>

 {/* <Tilt 
  options={{
    max: 25,
    scale: 1.1,
    speed: 200,
    glare: true,
    maxGlare: 0.7,
    reverse: true,
    reset: false,
  }}
  className='xs:w-[250px] w-full'
>

  <span className="tilt-content">Hover over me!</span>
</Tilt>  */}
</>
  )}
  export default About;




//*************************************************************************************************************************************************************** */
