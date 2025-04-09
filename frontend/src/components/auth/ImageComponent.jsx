import Image from "next/image";
import React from "react";

const ImageComponent = () => {
  return (
    <div>
      <div>
        <Image
          src={"/assets/images/frame.png"}
          alt='fram-image'
          width={558}
          height={504}
        />
      </div>
    </div>
  );
};

export default ImageComponent;
