import React from 'react';
//images
import Logo from '../assets/logomocatech-sf.png'

const Header = () => {
  return <header id='Header' className='py-0'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href='#'>
          <img src={Logo} alt='logo' className='max-w-[180px]' />
        </a>
        {/* button */}
        <button className='btn btn-sm'>Nos Contate</button>
      </div>
    </div>
  </header>;
};

export default Header;
