import React from 'react';
//motion
import { motion } from 'framer-motion'
//variants
import { fadeIn } from '../variants'

const Contact = () => {
  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* texto */}
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 flex justify-start items-center'>
            <div >
              <h4 className='text-xl uppercase text-[#101820] font-medium mb-2 tracking-wide'>Entre em contato</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Vamos Trabalhar <br /> Juntos!!
              </h2>
            </div>
          </motion.div>


          {/* Formulario */}
          <motion.form 
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 border rouded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start border-mocaPrimary'>
            <input
              className='bg-transparent border-b py-3 outline-none w-full border-mocaPrimary
              placeholder:text-[white] focus:border-[#101820] trasition-all'
              type='text'
              placeholder='Seu nome'
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full border-mocaPrimary
              placeholder:text-white focus:border-[#101820] trasition-all resize-none mb-12'
              type='text'
              placeholder='Seu Email'
            />
            <textarea
              className='bg-transparent border-b py-12 outline-none w-full border-mocaPrimary
              placeholder:text-white focus:border-[#101820] trasition-all'
              placeholder='Deixe sua mensagem'></textarea>
            <button
              className='btn btn-lg'>Enviar</button>
          </motion.form>
        </div>
      </div>
    </section>);
};

export default Contact;
