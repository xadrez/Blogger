import { IKImage } from "imagekitio-react";

const Image = ({ src, className, alt, w, h }) => {

  return (
        <IKImage 
            urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT} 
            path={src} 
            className={className} 
            alt={alt} 
            width={w}
            height={h}
        />
  )
}

export default Image