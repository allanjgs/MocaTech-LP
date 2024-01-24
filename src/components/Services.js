import React from 'react';
//icon
import { BsArrowUpRight } from 'react-icons/bs'
//motion
import { motion } from 'framer-motion'
//import
import { fadeIn } from '../variants'

//service data
const services = [
  {
    name: 'Web Desing',
    description:
      'Criamos experiências visuais que vão além da estética, mergulhando na essência da sua marca para transmitir uma narrativa envolvente. Não apenas cativamos o público, mas também impulsionamos o seu impacto digital, transformando sua imagem e presença na web',
    link: 'Saiba Mais',
  },
  {
    name: 'Soluções em Tecnologia',
    description:
      'Oferecendo soluções amplas, desde serviços essenciais, como domínio e hospedagem, até uma gestão completa e suporte técnico avançado. Garantimos eficiência operacional, prevenindo falhas e otimizando o ambiente tecnológico para o sucesso do seu negócio.',
    link: 'Saiba Mais',
  },
  {
    name: 'Consultoria Estratégica em TI',
    description:
      'Focados no mapeamento preciso de necessidades, identificação e resolução de problemas, oferecendo orientações personalizadas. Nosso planejamento estratégico, aliado à execução eficiente e práticas de gestão, garante soluções tecnológicas alinhadas ao seu negócio.',
    link: 'Saiba Mais',
  },
  {
    name: 'UI/UX Design',
    description:
      'Transformamos a experiência digital com nosso design UX/UI exclusivo. Desenvolvemos interfaces cativantes e funcionais, destacando-nos por soluções visuais que fazem a diferença. Potencialize sua presença online com nosso toque único em design. ',
    link: 'Saiba Mais',
  },
];

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:mb-12'>
          {/* texto e imagem*/}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat 
          mix-blend-lighten mb-12 lg:mb-0 lg:ml-6'>
            <h2 className='h2 text-orange-700 mb-6 mt-10'>Desperte o extraordinário</h2>
            <h3 className='h3 max-w-[455px] mb-16 '>
             Transformamos ideias em realidade digital.
            </h3>
            <button className='hidden btn btn-sm justify-content align-bottom'>Nosso Trabalho</button>
          </motion.div>
          {/* serviço */}
          <motion.div
            className='flex-1'>
            {/* lista de serviços */}
            <div >
              {services.map((service, index) => {
                //destruturar service
                const { name, description, link } = service;
                return (
                  <div
                    className='border-b border-orange-700/20 h-[146px] mb-[38px] flex justify-center item ' 
                    key={index}
                  >
                    <div className='max-w-[576px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-4'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href='#' className='btn w-6 h-6 mb-[42px] flex justify-center items-center'>
                        <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-gradient text-sm '>
                        {link}
                      </a>
                    </div>
                  </div>);
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
