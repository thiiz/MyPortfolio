import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';
import Link from 'next/link';

interface ProjectsCardProps {
  title: string;
  image: string | StaticImageData;
  alt: string;
  description: string;
}

export const ProjectsCard: FC<ProjectsCardProps> = ({ title, image, alt, description, ...rest }) => {
  const btnPrimaryIcon = '<~>'
  const btnSecondaryIcon = '>='
  return (
    <div {...rest} className="max-w-full rounded overflow-hidden shadow-lg border-2 border-gray-50">
      <Link href={'#'}>
        <Image
          width={0}
          height={0}
          className="w-full object-cover"
          src={image} alt={alt} />
      </Link>
      <div className="px-2 py-2 border-y-2 border-gray-50 flex flex-wrap gap-y-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 text-sm font-semibold text-gray-700 mr-2">HTML</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 text-sm font-semibold text-gray-700 mr-2">SCSS</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 text-sm font-semibold text-gray-700 mr-2">Python</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 text-sm font-semibold text-gray-700 mr-2">Flask</span>
      </div>
      <div className='px-4'>
        <Link href={'#'}>
          <div className="font-bold text-xl mt-4">{title}</div>
        </Link>
        <p className="text-gray-50 text-base my-3 text-ellipsis line-clamp-4">
          {description}
        </p>
      </div>
      <div className='pb-4 px-4 flex gap-x-4 items-center'>
        <button className='px-4 py-2 border border-primary'>
          Primario {btnPrimaryIcon}
        </button>
        <button>
          Secondario
          {btnSecondaryIcon}
        </button>
      </div>
    </div>
  )
}