import React from 'react';
//countup
import CountUp from 'react-countup'
//icons
import { FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa';
//type animation
import { TypeAnimation } from 'react-type-animation'
//intersection observver hook
import { useInView } from 'react-intersection-observer';
//motion'
import { motion } from 'framer-motion'
//variant
import { fadeIn } from '../variants'


const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref} >
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-start lg:gap-x-20 
              lg:gap-y-0 h-screen'>
          <div className='flex flex-col gap-y-10 lg:flex-row lg:item-center lg:gap-x-12 lg:gap-y-0 lg:mt-20 h-screen'>
            {/* textos*/}
            <div className='flex-1 text-center font-secondary lg:text-left'>
              <motion.h1
                
                className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'
              >
                MOCA <span>TECH</span>
              </motion.h1>
              <motion.div

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
                  className='text-mocaPrimary'
                  wrapper='span'
                  repeat={Infinity}
                />
              </motion.div>
              <motion.p
                className='mb-8 max-w-lg mx-auto lg:mx-0'

              >
                Você quer ter um site que seja bonito, funcional e que atraia clientes?
              </motion.p>
              {/* stats */}
              <div className='flex gap-x-6 lg:gap-x-10 mb-2'>
                <div>
                  <div className='text-[40px] font-tertiary text-gradient mb-2'>
                    {
                      inView ?
                        <CountUp start={0} end={14} duration={2} /> : null}
                  </div>
                  <div className='font-primary text-sm tracking-[2px]'>
                    Anos de  <br />
                    Experiência
                  </div>
                </div>
                <div>
                  <div className='text-[40px] font-tertiary text-gradient mb-2'>
                    {
                      inView ?
                        <CountUp start={0} end={500} duration={2} /> : null}+
                  </div>
                  <div className='font-primary text-sm tracking-[2px]'>
                    Negócios   <br />
                    Fechados
                  </div>
                </div>
                <div>
                  <div className='text-[40px] font-tertiary text-gradient mb-2'>
                    {
                      inView ?
                        <CountUp start={0} end={1000} duration={2} /> : null}+
                  </div>
                  <div className='font-primary text-sm tracking-[2px]'>
                    Projetos  <br />
                    Concluidos
                  </div>
                </div>
              </div>
              <motion.div
                variants={fadeIn('right', 0.6)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 items-center mb-12'
              >
              </motion.div>
              {/*Social Medias*/}
              <motion.div
                variants={fadeIn('right', 0.6)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
                <a href='#'>
                  <FaYoutube />
                </a>
                <a href='#'>
                  <FaGithub />
                </a>
                <a href='#'>
                  <FaDribbble />
                </a>
              </motion.div>

            </div>
            {/*texto */}
            <motion.div
              variants={fadeIn('left', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className='flex-1'>
              <h2 className='h2 text-orange-600'>Sobre nós</h2>
              <h3 className='h3 mb-4'>
                Somos uma empresa Desenvolvedora Front-end, fundada por Allan Santos que possui
                mais de 14 anos atuando no segmento de tecnologia
              </h3>
              <p className='mb-6'>
                “A internet é muito mais que uma tecnologia.
                É um meio de comunicação, de interação e de organização social.”
              </p>

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

export default About;
