// components/NewsCard.tsx
import React from "react";
import Link from "next/link";

interface NewsCardProps {
  title: string;
  date?: string;
  categories?: string[];
  imageUrl?: string;
  link: string;
  contentSnippet?: string;
  pubDate?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  date,
  categories,
  imageUrl: image,
  link,
  contentSnippet,
}) => {
  console.log(categories);
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="relative group">
        <img src={image} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"></div>
      </div>
      <div className="flex flex-col justify-between p-4 h-full">
        <div>
          <p className="text-sm text-gray-500 mb-1">
            {categories?.slice(0, 1).map((cat, index) => (
              <span key={index} className="">
                {cat}
              </span>
            ))}
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
        </div>
        <Link
          href={`${link}`}
          className="text-secondary font-semibold mt-4 self-start"
        >
          More &rarr;
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
