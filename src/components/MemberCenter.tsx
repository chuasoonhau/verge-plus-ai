import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, Newspaper, Cpu, Mic, Star } from 'lucide-react';

interface MemberCenterProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: 'Latest', icon: Clock, active: true },
  { label: 'Longform', icon: Newspaper },
  { label: 'Circuit Breaker', icon: Cpu },
  { label: 'Decoder', icon: Mic },
  { label: 'The Vergecast', icon: Mic },
  { label: 'Reviews', icon: Star },
];

export default function MemberCenter({ isOpen, onClose }: MemberCenterProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-deep-black/20 backdrop-blur-sm z-40"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-80 md:w-96 bg-stark-white border-l-4 border-deep-black z-50 flex flex-col p-8 md:p-12 brutalist-shadow-black"
          >
            <div className="flex justify-between items-start mb-12">
              <div className="flex flex-col gap-2">
                <h2 className="text-3xl md:text-4xl font-black italic text-deep-black uppercase leading-none">
                  Member<br />Center
                </h2>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-60">
                  Manage your subscription
                </p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:text-verge-pink transition-colors"
              >
                <X size={32} />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className={`flex items-center gap-5 py-4 px-6 transition-all group ${
                    item.active 
                      ? 'bg-electric-purple text-stark-white' 
                      : 'hover:bg-verge-pink/10 text-deep-black'
                  }`}
                >
                  <item.icon className={`w-5 h-5 ${item.active ? '' : 'group-hover:text-verge-pink'}`} />
                  <span className="font-mono text-sm uppercase tracking-widest font-black">
                    {item.label}
                  </span>
                </a>
              ))}
            </nav>

            <button className="mt-auto bg-deep-black text-stark-white font-mono py-5 uppercase tracking-[0.2em] font-black italic hover:bg-verge-pink transition-colors text-lg">
              Subscribe Now
            </button>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
