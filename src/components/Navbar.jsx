import React from 'react';

const Navbar = () => {
  return (
    <div className='md:px-36 md:py-10 px-2 py-4 flex justify-between'>
      <h3 className='text-2xl font-bold capitalize'>Recipe</h3>
      <ul className='flex gap-3'>
        <li>
          <a href='/login'>Login</a>
        </li>
        <li>
          <a href='/signup'>Signup</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
