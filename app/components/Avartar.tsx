'use client';

import { FC } from 'react';
import Image from 'next/image';

interface AvartarProps {}

const Avartar: FC<AvartarProps> = ({}) => {
  return <Image 
    className='rounded-full'
    height='30'
    width='30'
    alt= 'Avartar'
    src='/images/placeholder.jpg'
  />;
};

export default Avartar;
