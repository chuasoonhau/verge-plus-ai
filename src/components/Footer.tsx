import { Share2, Globe, Rss } from 'lucide-react';

export default function Footer() {
  const links = ['Privacy Policy', 'Terms of Use', 'Ad Choices', 'Accessibility', 'Contact Us'];

  return (
    <footer className="w-full mt-24 bg-deep-black border-t-8 border-verge-pink pt-16 pb-20 px-4 md:px-12 text-center">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        <a href="/" className="font-headline text-5xl md:text-8xl font-black italic tracking-tighter text-stark-white uppercase mb-12">
          The Verve
        </a>

        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-16">
          {links.map((link) => (
            <a 
              key={link} 
              href="#" 
              className="font-body text-surface-variant hover:text-verge-pink transition-colors text-sm md:text-base underline underline-offset-4 decoration-verge-pink/30 hover:decoration-verge-pink"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex flex-col items-center gap-8">
          <p className="font-body text-surface-variant/60 text-sm">
            © 2024 Vox Media, LLC. All Rights Reserved
          </p>
          
          <div className="flex gap-8">
            <button className="text-surface-variant/40 hover:text-verge-pink transition-colors">
              <Share2 size={24} />
            </button>
            <button className="text-surface-variant/40 hover:text-verge-pink transition-colors">
              <Globe size={24} />
            </button>
            <button className="text-surface-variant/40 hover:text-verge-pink transition-colors">
              <Rss size={24} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
