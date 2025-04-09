import Image from "next/image";
import React from "react";

const ImageComponent = () => {
  return (
    <div>
      <div className='absolute right-36 top-36'>
        <Image
          src={"/assets/Images/signup.webp"}
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
    </div>
  );
};

export default ImageComponent;
