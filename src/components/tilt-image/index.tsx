'use client'

import { FC } from 'react';
import Image, { StaticImageData } from "next/image";
import Tilt from 'react-parallax-tilt';

interface TiltImageProps {
  image: string | StaticImageData;
  alt: string;
}

export const TiltImage: FC<TiltImageProps> = ({ image, alt = '' }) => {
  return (
    <Tilt>
      <Image src={image} alt={alt}
        width={0}
        height={0}
        className="w-full object-cover" />
    </Tilt>
  );
}

