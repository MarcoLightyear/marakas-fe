import Image from "next/image";
import React from "react";

interface LandingImageProps {
    src: string;
}

const LandingImage: React.FC<LandingImageProps> = ({ src }) => {
    return (
        <div className="grid content-center w-full justify-center relative">
            <Image
                src={src}
                alt="Collections"
                height={1600}
                width={1600}
            />
        </div>
    );
};

export default LandingImage;