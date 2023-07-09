'use client';

import { FC } from 'react';
import Image from 'next/image';

interface AvartarProps {
  src: string | null | undefined
}

const Avartar: FC<AvartarProps> = ({src}) => {
  return <Image 
    className='rounded-full'
    height='30'
    width='30'
    alt= 'Avartar'
    src={src || '/images/placeholder.jpg'}
  />;
};

export default Avartar;
