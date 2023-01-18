import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function Logo() {
  return (
    
    <Link href='/'>
    <div className='w-[100px] md:w-[129px] md:h-[30px] h-[38px]'>
      <Image
        className='cursor-pointer'
        src='/knowhere.png'
        alt='logo'
        width={120} height={40}
      />
    </div>
  </Link>
  )
}

export default Logo