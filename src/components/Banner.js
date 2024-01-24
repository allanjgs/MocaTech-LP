import React from 'react';
//images
import Image from '../assets/new/dv2.jpg';
//icons
import { FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa';
//type animation
import { TypeAnimation } from 'react-type-animation'
//countup
import CountUp from 'react-countup'
//intersection observver hook
import { useInView } from 'react-intersection-observer';
//motion'
import { motion } from 'framer-motion'
//variant
import { fadeIn } from '../variants'


const Banner = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:item-center lg:gap-x-12 lg:gap-y-0 lg:mt-20 h-screen'>
          {/* textos*/}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'
            >
              MOCA <span>TECH</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'
            >
              <span className='text-white mr-4'>Seu</span>
              <TypeAnimation sequence={[
                'Desenvolvedor',
                2000,
                'Desing',
                2000,
                'Consultor',
                2000
              ]}
                speed={50}
                className='text-orange-600'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              className='mb-8 max-w-lg mx-auto lg:mx-0'
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
            >
              Você quer ter um site que seja bonito, funcional e que atraia clientes?
            </motion.p>
            <motion.div
              variants={fadeIn('down', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 items-center mb-12'
            >
              <button className='btn btn-lg mr-2'>Nos Contate</button>
              <a href="#" className='text-gradient btn-link'>Nosso Portifolio</a>
            </motion.div>
            {/*Social Medias*/}
            <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='#'>
                <FaYoutube />
              </a>
              <a href='#'>
                <FaGithub />
              </a>
              <a href='#'>
                <FaDribbble />
              </a>
            </div>

          </div>
          {/* Imagem
                    <div className='hidden lg:flex flex-1 max-w-[620px] lg:max-w-[480px] h-auto '>
            <img src={Image} alt='' className='rounded-3xl'/>*/}
          <div className='hidden lg:flex flex-1 max-w-[620px] lg:max-w-[780px] h-auto '>
            {/*texto */}
            <motion.div
              variants={fadeIn('left', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className='flex-1'>
              <h3 className='h3 mb-4'>
                Somos uma empresa Desenvolvedora Front-end, fundada por Allan Santos que possui
                mais de 14 anos atuando no segmento de tecnologia
              </h3>
              <p className='mb-6'>
                “A internet é muito mais que uma tecnologia.
                É um meio de comunicação, de interação e de organização social.”
              </p>
              {/* stats */}
              <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
                <div>
                  <div className='text-[40px] font-tertiary text-gradient mb-2'>+
                  {
                    inView?
                    <CountUp start={0} end={14} duration={1}/> : null
                  }
                  </div>
      
                </div>

              </div>
              <div className='flex gap-x-8 items-center'>
                <button className='btn btn-lg'>Entre em Contato</button>
                <a href='#' className='text-gradient btn-link'>
                  Nosso Portifolio
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>)
};

export default Banner;
