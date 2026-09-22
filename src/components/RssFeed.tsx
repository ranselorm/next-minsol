import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import Link from "next/link";
import NewsCard from "./NewsCard";
import { NewsPlaceHolder } from "./NewsPlaceHolder";

const formatDate = (dateString: string): string => {
  return moment(dateString).format("MMMM Do, YYYY");
};

type FeedItem = {
  title: string;
  link: string;
  categories?: string[];
  contentSnippet?: string;
  pubDate?: string;
  imageUrl?: string;
};

const fetchRss = async (): Promise<FeedItem[]> => {
  const response = await fetch("/api/rss");
  if (!response.ok) {
    throw new Error("Failed to fetch RSS feed");
  }
  return response.json();
};

export default function RssFeed() {
  const {
    data: rssData = [],
    isLoading,
    isError,
    error,
  } = useQuery<FeedItem[]>({
    queryKey: ["rssFeed"],
    queryFn: fetchRss,
    staleTime: 1000 * 60 * 10,
  });

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="site-shell">
        <div className="mb-10 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-main">
              Insights and updates
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-blu md:text-5xl">
              Latest news
            </h2>
          </div>
          <Link
            href="/newsroom"
            className="inline-flex w-fit items-center gap-2 border-b border-main pb-1 text-sm font-semibold text-main transition-colors hover:border-blu hover:text-blu"
          >
            View all news <span aria-hidden="true">→</span>
          </Link>
        </div>

        {isError ? (
          <p style={{ color: "red", textAlign: "center" }}>
            Error: {error?.message}
          </p>
        ) : isLoading ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <NewsPlaceHolder key={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {rssData.slice(0, 3).map((item, index) => (
              <NewsCard
                key={index}
                title={item.title}
                date={formatDate(item.pubDate || "")}
                categories={item.categories}
                imageUrl={item.imageUrl || "/placeholder-image.jpg"}
                link={item.link}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
