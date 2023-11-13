import React from 'react';
//icon
import { BsArrowUpRight } from 'react-icons/bs';

//motion
import {motion} from 'framer-motion'
//variants
import {fadeIn} from '../variants'

//services data
const services = [
 {
  name: 'UI/UX Design',
  desciption: 'Lorem ipsum dolor sit amet, consectetur,nt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conseq',
  link: 'Learn More',
}, 

{
  name: 'Development',
  desciption: 'Lorem ipsum dolor sit amet, consectetur,nt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con ',
  link: 'Learn More',
},
{
  name: 'Digital Marketing',
  desciption: 'Lorem ipsum dolor sit amet, consectetur,nt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ',
  link: 'Learn More',
},
{
  name: 'Product Branding',
  desciption: 'Lorem ipsum dolor sit amet, consectetur,nt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ',
  link: 'Learn More',
},

]



const Services = () => {
  return <section className='section' id='services'>
    <div className='container mx-auto '>
       <div className='flex flex-col lg:flex-row '>
        {/*text & image */}
        <motion.div 
         variants={fadeIn('right', 0.3)}
         initial= "hidden" 
         whileInView={"show"}
         viewport={{once:false, amount: 0.3}}
        className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-accent mb-6 '>What I Do.</h2>
          <h3 className='h3 max-w-[455px] mb-16'>I'm Freelance Front-end Developer with over 5 years of experience.</h3>
          <button className='btn btn-sm'>See my work</button>
        </motion.div>
        {/*services*/}
        <div>
           {/*service list*/}
           <motion.div 
            variants={fadeIn('left', 0.5)}
            initial= "hidden" 
            whileInView={"show"}
            viewport={{once:false, amount: 0.3}}
           className='flex-1'>
            {services.map((service, index) =>{
              //destructure service
              const {name, desciption, link} = service;
             return (
             <div className='border-b border-white/20 h-[146px] mb-[38px] flex'
              key={index}>
              <div className='max-w-[476px]'>
                <h4 className='text-[20px] tracking-wider
                 font-primary font-semibold mb-6'>{name}</h4>
                <p className='font-secondary leading-tight'>{desciption}</p>
                </div>
              <div className='flex flex-col flex-1 items-end'>

              <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center
              items-center'>
                <BsArrowUpRight/>
                </a>
              <a href='#' className='text-gradient text-sm'>
            {link}
                </a>
              </div>
             </div>);
             
            })}
           </motion.div>
        </div>
       </div>
       </div>
    
    </section>;
};

export default Services;
