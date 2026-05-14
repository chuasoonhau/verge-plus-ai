import { Article } from '../types';

interface HeroProps {
  mainArticle: Article;
  sideArticles: Article[];
}

export default function Hero({ mainArticle, sideArticles }: HeroProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-1 bg-deep-black border-2 border-deep-black overflow-hidden mt-8">
      {/* Main Feature */}
      <div className="md:col-span-8 relative group cursor-pointer overflow-hidden aspect-[16/9] md:aspect-auto border-b md:border-b-0 md:border-r border-deep-black">
        <img
          src={mainArticle.imageUrl}
          alt={mainArticle.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full">
          <span className="inline-block bg-verge-pink text-stark-white px-3 py-1 font-mono text-xs uppercase tracking-widest mb-4">
            {mainArticle.category}
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-stark-white group-hover:text-verge-pink transition-colors leading-[1.05]">
            {mainArticle.title}
          </h1>
        </div>
      </div>

      {/* Side Features */}
      <div className="md:col-span-4 flex flex-col divide-y divide-deep-black">
        {sideArticles.map((article) => (
          <div key={article.id} className="relative group cursor-pointer h-1/2 overflow-hidden min-h-[300px]">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-deep-black/50 group-hover:bg-deep-black/20 transition-colors" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <span className="text-verge-pink font-mono text-xs uppercase mb-2 tracking-wider">
                {article.category}
              </span>
              <h2 className="text-xl md:text-2xl text-stark-white leading-tight">
                {article.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
