import React from "react";

interface ArticleContentProps {
  summary: string;
  content: React.ReactNode;
}

export const ArticleContent: React.FC<ArticleContentProps> = ({
  summary,
  content,
}) => {
  return (
    <article className="w-full max-md:max-w-full">
      <div className="text-[#B3443D] text-2xl font-semibold leading-8 max-md:max-w-full mb-10">
        {summary}
      </div>
      <div className="text-[#4F1919] text-xl font-medium leading-7 max-md:max-w-full">
        {content}
      </div>
    </article>
  );
};

export default ArticleContent;
