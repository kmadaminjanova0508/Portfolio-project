import React from 'react';
// motion
import {motion} from 'framer-motion'
//variants
import {fadeIn} from '../variants'
//img
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'

const Work = () => {
  return (
    <section  container="true" className='section' id='work'>
    <div container="true"  className='container mx-auto '>
      <motion.div 
       variants={fadeIn('left', 0.2)}
       initial= "hidden" 
       whileInView={"show"}
       viewport={{once:false, amount: 0.3}}
      className='flex flex-col lg:flex-row gap-x-10'>
        <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
        {/*text*/}
        <div>
          <h2 className='h2 leading-tight text-accent'>My latest <br/> Work</h2>
          <p className='max-w-sm mb-16'>Lorem ipsum dolor ammet consedor adpisising elit.
            Repelete hic! Harum quiz, cum velit neque esse eos molets
            dolorque explicabol
          </p>
          <button className='btn btn-sm'>View all Projects</button>
          </div>
          {/*img*/}
          <div className=' group relative overflow-hidden
          border-2 border-white/50 rounded-xl'>
            <div>
               {/*overlay*/}
               <div className='group-hover:bg-black/70 w-full h-full absolute
               z-40 transition-all duration-300'></div>
                {/*img*/}
                <img className='group-hover:scale-125 transition-all duration-500' src={Img1} />
                 {/*pretitle*/}
                 <div className=' absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'> UI/UX Designs</span>
                 </div>
                 {/*title*/}
                 <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'> 
                  <span className='text-3xl text-white'>Project title</span></div>
            </div>
          </div>
      </div>
      <div className='flex-1 flex flex-col gap-y-10'>
        {/*img2*/}
        <div className=' group relative overflow-hidden
          border-2 border-white/50 rounded-xl'>
            <div>
               {/*overlay*/}
               <div className='group-hover:bg-black/70 w-full h-full absolute
               z-40 transition-all duration-300'></div>
                {/*img*/}
                <img className='group-hover:scale-125 transition-all duration-500' src={Img2} />
                 {/*pretitle*/}
                 <div className=' absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'> UI/UX Designs</span>
                 </div>
                 {/*title*/}
                 <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'> 
                  <span className='text-3xl text-white'>Project title</span></div>
            </div>
          </div>
            {/*img2*/}
            <div className=' group relative overflow-hidden
          border-2 border-white/50 rounded-xl'>
            <div>
               {/*overlay*/}
               <div className='group-hover:bg-black/70 w-full h-full absolute
               z-40 transition-all duration-300'></div>
                {/*img*/}
                <img className='group-hover:scale-125 transition-all duration-500' src={Img3} />
                 {/*pretitle*/}
                 <div className=' absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'> UI/UX Designs</span>
                 </div>
                 {/*title*/}
                 <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'> 
                  <span className='text-3xl text-white'>Project title</span></div>
            </div>
          </div>
      </div>
      

    </motion.div>
    </div>
    </section>
  )}
 


export default Work;
