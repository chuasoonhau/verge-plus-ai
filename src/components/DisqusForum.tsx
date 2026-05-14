import { useEffect } from 'react';

export default function DisqusForum() {
  useEffect(() => {
    // Only run this on the client side
    if (typeof window !== 'undefined') {
      const d = document;
      const s = d.createElement('script');
      s.src = 'https://smu-vibe.disqus.com/embed.js';
      s.setAttribute('data-timestamp', String(+new Date()));
      (d.head || d.body).appendChild(s);
    }
  }, []);

  return (
    <section className="mt-24 p-8 md:p-12 bg-stark-white border-4 border-deep-black brutalist-shadow-black">
      <div className="flex items-center gap-4 mb-12 border-b-4 border-deep-black pb-4">
        <span className="text-3xl">💬</span>
        <h3 className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter">
          Community Discussion
        </h3>
      </div>
      
      <div id="disqus_thread"></div>
      
      <noscript>
        Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
      </noscript>
    </section>
  );
}
