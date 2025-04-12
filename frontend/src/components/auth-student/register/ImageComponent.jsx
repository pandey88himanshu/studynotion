import Image from "next/image";
import React from "react";

const ImageComponent = ({ name }) => {
  return (
    <figure>
      <div className='absolute right-40 top-40'>
        <Image
          src={`/assets/Images/${name}`}
          alt='fram-image'
          width={558}
          height={504}
        />
      </div>
      <div>
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
