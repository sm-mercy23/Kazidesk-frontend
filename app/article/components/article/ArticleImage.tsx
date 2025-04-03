import React from "react";

interface ArticleImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export const ArticleImage: React.FC<ArticleImageProps> = ({
  src,
  alt,
  caption,
}) => {
  return (
    // <figure className="flex flex-col self-stretch relative w-full min-h-[464px] gap-2.5 text-xl text-white font-medium leading-7 px-[60px] py-[162px] rounded-[25px] max-md:max-w-full max-md:px-5 max-md:py-[100px] mb-10">
    <figure className="flex flex-col self-stretch relative w-full  gap-2.5 text-xl text-white font-medium leading-7 px-[60px] py-[162px] rounded-[25px] max-md:max-w-full max-md:px-5 max-md:py-[100px] mb-10">
      <img
        src={src}
        alt={alt}
        className="absolute h-full w-full object-cover inset-0 rounded-[25px]"
      />
      {caption && <figcaption className="relative z-10">{caption}</figcaption>}
    </figure>
  );
};

export default ArticleImage;
