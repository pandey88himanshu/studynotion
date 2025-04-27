import Image from "next/image";
import React from "react";

const ImageComponent = ({ name }) => {
  return (
    <figure className='hidden lg:block'>
      <div className='absolute right-[10rem] top-[10rem] z-10'>
        <Image
          src={`/assets/Images/${name}`}
          alt='fram-image'
          width={558}
          height={504}
        />
      </div>
      <div className='absolute right-36 top-44 '>
        <Image
          src={"/assets/Images/frame.png"}
          alt='fram-image'
          width={558}
          height={504}
        />
      </div>
    </figure>
  );
};

export default ImageComponent;
