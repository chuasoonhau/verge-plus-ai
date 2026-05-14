import { Article } from '../types';

interface NewsFeedProps {
  articles: Article[];
  reviewArticles: Article[];
  onAnalyze: (title: string) => void;
}

export default function NewsFeed({ articles, reviewArticles, onAnalyze }: NewsFeedProps) {
  return (
    <div className="flex flex-col gap-12">
      {/* Latest News Title */}
      <div className="flex items-center justify-between border-b-2 border-deep-black pb-2">
        <h3 className="text-2xl md:text-3xl font-black italic tracking-tighter uppercase">Latest News</h3>
        <span className="font-mono text-xs text-verge-pink font-bold">UPDATED 2M AGO</span>
      </div>

      {/* Article List */}
      <div className="flex flex-col gap-12">
        {articles.map((article, index) => (
          <article 
            key={article.id} 
            className="grid grid-cols-1 md:grid-cols-12 gap-6 group cursor-pointer"
          >
            <div className="md:col-span-4 aspect-[4/3] bg-surface-variant overflow-hidden border border-deep-black">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:col-span-8 flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-[10px] text-verge-pink border border-verge-pink px-1.5 py-0.5 tracking-wide">
                  {article.category.toUpperCase()}
                </span>
                <span className="font-mono text-[10px] text-on-surface-variant">
                  {article.timestamp}
                </span>
              </div>
              <h4 className="text-2xl md:text-3xl mb-3 group-hover:text-verge-pink transition-colors leading-tight">
                {article.title}
              </h4>
              <p className="text-on-surface-variant font-body text-sm md:text-base line-clamp-2 mb-4">
                {article.excerpt}
              </p>
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-deep-black" />
                  <span className="font-mono text-[10px] uppercase font-black hover:text-verge-pink transition-colors">
                    {article.author}
                  </span>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onAnalyze(article.title);
                  }}
                  className="bg-deep-black text-stark-white px-3 py-1 font-mono text-[10px] uppercase font-black italic hover:bg-verge-pink transition-colors brutalist-shadow-small"
                >
                  Verify with AI
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Featured Reviews */}
      <section className="bg-surface-container-highest p-6 md:p-8 border-2 border-deep-black">
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-verge-pink mb-8 font-black">Featured Reviews</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviewArticles.map((review) => (
            <div 
              key={review.id} 
              className="bg-stark-white border-2 border-deep-black group cursor-pointer hover:brutalist-shadow transition-all relative"
            >
              <div className="relative h-56 overflow-hidden border-b-2 border-deep-black">
                <img
                  src={review.imageUrl}
                  alt={review.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-verge-pink text-stark-white w-12 h-12 flex items-center justify-center text-2xl font-headline italic font-bold">
                  {review.score}
                </div>
              </div>
              <div className="p-6">
                <h5 className="text-xl md:text-2xl mb-2 group-hover:text-verge-pink transition-colors">
                  {review.title}
                </h5>
                <p className="text-on-surface-variant font-body text-sm line-clamp-2">
                  {review.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
