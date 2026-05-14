import { Menu, Search } from 'lucide-react';

interface HeaderProps {
  onToggleMenu: () => void;
}

export default function Header({ onToggleMenu }: HeaderProps) {
  const categories = ['Tech', 'Reviews', 'Science', 'Entertainment', 'AI', 'More'];

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-surface border-b-4 border-deep-black h-16">
      <div className="max-w-[1440px] h-full mx-auto px-4 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="font-headline text-3xl md:text-5xl font-black italic tracking-tighter text-deep-black uppercase">
            The Verve
          </a>
          <nav className="hidden lg:flex items-center gap-6">
            {categories.map((cat, i) => (
              <a
                key={cat}
                href={`#${cat.toLowerCase()}`}
                className={`font-headline text-sm uppercase tracking-tighter transition-colors hover:text-verge-pink ${
                  i === 0 ? 'text-verge-pink border-b-2 border-verge-pink' : 'text-deep-black'
                }`}
              >
                {cat}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-1 hover:text-verge-pink transition-colors">
            <Search size={24} />
          </button>
          <button 
            onClick={onToggleMenu}
            className="p-1 hover:text-verge-pink transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
