import React from "react";

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
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-slate-900/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-main/30 hover:shadow-xl hover:shadow-slate-900/10">
      <div className="overflow-hidden">
        <img
          src={image}
          alt=""
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div>
          <div className="mb-5 flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.12em] text-main">
            <p>
              {categories?.slice(0, 1).map((cat, index) => (
                <span key={index}>{cat}</span>
              ))}
            </p>
            <time>{date}</time>
          </div>

          <h3 className="text-xl font-semibold leading-7 tracking-[-0.02em] text-blu">
            {title}
          </h3>
        </div>
        <a
          href={`${link}`}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex w-fit items-center gap-2 border-b border-main pb-1 text-sm font-semibold text-main transition-colors hover:border-blu hover:text-blu"
        >
          Read article <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
};

export default NewsCard;
