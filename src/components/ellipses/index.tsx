import { FC } from "react";

interface EllipsesProps {
  number: number;
}

const Ellipses: FC<EllipsesProps> = ({ number }) => {
  const ellipseQty = Array.from({ length: number }, (_, index) => index + 1);
  return (
    <div className="absolute grid grid-cols-5 items-center w-20 bottom-7 right-0">
      {ellipseQty.map((ellipse) => (
        <>
          <svg key={ellipse} className="h-4 w-3">
            <circle cx="4" cy="4" r="2.5" className="fill-gray-50" />
            Sorry, your browser does not support inline SVG.
          </svg>
          <svg key={ellipse} className="h-4 w-3">
            <circle cx="4" cy="4" r="2.5" className="fill-gray-50" />
            Sorry, your browser does not support inline SVG.
          </svg>
          <svg key={ellipse} className="h-4 w-3">
            <circle cx="4" cy="4" r="2.5" className="fill-gray-50" />
            Sorry, your browser does not support inline SVG.
          </svg>
          <svg key={ellipse} className="h-4 w-3">
            <circle cx="4" cy="4" r="2.5" className="fill-gray-50" />
            Sorry, your browser does not support inline SVG.
          </svg>
          <svg key={ellipse} className="h-4 w-3">
            <circle cx="4" cy="4" r="2.5" className="fill-gray-50" />
            Sorry, your browser does not support inline SVG.
          </svg>
        </>
      ))}
    </div>
  );
}

export default Ellipses;