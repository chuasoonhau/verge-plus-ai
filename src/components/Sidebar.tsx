import { SidebarLink } from '../types';

interface SidebarProps {
  trendingArticles: { id: string; title: string; category: string }[];
}

export default function Sidebar({ trendingArticles }: SidebarProps) {
  return (
    <aside className="flex flex-col gap-10">
      <div className="bg-deep-black text-stark-white p-8 md:p-10 sticky top-24 brutalist-shadow">
        <h3 className="text-xl md:text-2xl uppercase italic mb-8 border-b-2 border-verge-pink pb-2 inline-block">
          Trending Stories
        </h3>
        
        <ul className="flex flex-col gap-10">
          {trendingArticles.map((article, index) => (
            <li key={article.id} className="flex gap-6 group cursor-pointer">
              <span className="font-headline text-5xl md:text-6xl text-verge-pink leading-none opacity-40 group-hover:opacity-100 transition-opacity italic font-black">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="flex flex-col gap-1">
                <h4 className="text-base md:text-lg group-hover:text-verge-pink transition-colors leading-snug">
                  {article.title}
                </h4>
                <span className="font-mono text-[10px] uppercase text-surface-variant tracking-widest">
                  {article.category}
                </span>
              </div>
            </li>
          ))}
        </ul>

        {/* Newsletter Signup */}
        <div className="mt-14 border-2 border-verge-pink p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-4 text-verge-pink font-bold">Verge Newsletter</p>
          <h5 className="text-xl leading-tight mb-6 normal-case font-headline font-bold">
            The future, delivered to your inbox every morning.
          </h5>
          <div className="flex flex-col sm:flex-row gap-0 border-2 border-verge-pink">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-surface-variant text-deep-black w-full px-4 py-3 font-body focus:outline-none placeholder:text-deep-black/50"
            />
            <button className="bg-verge-pink text-stark-white px-8 py-3 uppercase font-mono text-sm font-black hover:bg-stark-white hover:text-verge-pink transition-colors border-l-0 sm:border-l-2 border-verge-pink">
              Join
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
