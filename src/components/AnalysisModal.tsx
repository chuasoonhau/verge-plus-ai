import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, ShieldAlert, ShieldQuestion } from 'lucide-react';
import { useState, useEffect } from 'react';

interface AnalysisModalProps {
  articleTitle: string;
  isOpen: boolean;
  onClose: () => void;
}

interface AnalysisResult {
  truthScore: number;
  verdict: 'REAL' | 'FAKE' | 'MIXED';
  summary: string;
  redFlags: string[];
  publisherAnalysis: string;
}

const mockResults: Record<string, AnalysisResult> = {
  default: {
    truthScore: 92,
    verdict: 'REAL',
    summary: 'This article from The Verve is highly credible. It provides factual reporting on tech trends with verified sources and objective analysis.',
    redFlags: ['No major red flags detected.'],
    publisherAnalysis: 'The Verve is a reputable technology news outlet with established editorial standards.'
  }
};

export default function AnalysisModal({ articleTitle, isOpen, onClose }: AnalysisModalProps) {
  const [stage, setStage] = useState<'scanning' | 'result'>('scanning');
  const [status, setStatus] = useState('Initializing VeriTruth Engine...');
  const [result, setResult] = useState<AnalysisResult | null>(null);

  useEffect(() => {
    if (isOpen) {
      setStage('scanning');
      setResult(null);
      runSimulation();
    }
  }, [isOpen]);

  const runSimulation = async () => {
    setStatus('Analyzing linguistic patterns...');
    await new Promise(r => setTimeout(r, 1200));
    
    setStatus('Cross-referencing global news databases...');
    await new Promise(r => setTimeout(r, 1500));
    
    setStatus('Evaluating publisher reputation...');
    await new Promise(r => setTimeout(r, 1000));
    
    setResult(mockResults.default);
    setStage('result');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-deep-black/60 backdrop-blur-md"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-stark-white w-full max-w-2xl border-4 border-deep-black brutalist-shadow-black overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-deep-black text-stark-white p-6 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🛡️</span>
                <h3 className="font-mono text-sm uppercase tracking-[0.2em] font-black">VeriTruth AI Analysis</h3>
              </div>
              <button onClick={onClose} className="hover:text-verge-pink transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="p-8 md:p-12 overflow-y-auto max-h-[80vh]">
              {stage === 'scanning' ? (
                <div className="flex flex-col items-center justify-center py-12 gap-8">
                  <div className="relative w-full max-w-md h-48 bg-surface-variant border-2 border-deep-black overflow-hidden">
                    <motion.div 
                      animate={{ top: ['0%', '100%', '0%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute left-0 right-0 h-1 bg-verge-pink shadow-[0_0_15px_var(--verge-pink)] z-10"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-center px-6 font-headline italic font-bold text-lg text-deep-black/40">
                        "{articleTitle}"
                      </p>
                    </div>
                  </div>
                  <p className="font-mono text-xs uppercase tracking-widest text-verge-pink font-black animate-pulse">
                    {status}
                  </p>
                </div>
              ) : result && (
                <div className="flex flex-col gap-10">
                  <div className="flex flex-col md:flex-row gap-8 items-center border-b-4 border-deep-black pb-10">
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      <svg className="w-full h-full -rotate-90">
                        <circle cx="64" cy="64" r="58" fill="none" stroke="currentColor" strokeWidth="8" className="text-surface-variant" />
                        <motion.circle 
                          cx="64" cy="64" r="58" fill="none" stroke="currentColor" strokeWidth="8" 
                          strokeDasharray={364}
                          initial={{ strokeDashoffset: 364 }}
                          animate={{ strokeDashoffset: 364 - (364 * result.truthScore) / 100 }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className={result.truthScore > 80 ? 'text-electric-purple' : 'text-verge-pink'}
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-3xl font-black italic">{result.truthScore}%</span>
                        <span className="text-[8px] uppercase font-mono font-bold">Truth Score</span>
                      </div>
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <div className={`inline-block px-4 py-1 font-mono text-xs font-black uppercase tracking-widest mb-3 ${
                        result.verdict === 'REAL' ? 'bg-electric-purple text-stark-white' : 'bg-verge-pink text-stark-white'
                      }`}>
                        Verdict: {result.verdict}
                      </div>
                      <h4 className="text-3xl font-headline font-black italic leading-none uppercase">Analysis Complete</h4>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-8">
                    <div className="bg-surface-variant p-6 border-2 border-deep-black">
                      <h5 className="font-mono text-[10px] uppercase font-black text-verge-pink mb-3">AI Insights</h5>
                      <p className="text-sm md:text-base leading-relaxed">{result.summary}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h5 className="font-mono text-[10px] uppercase font-black text-verge-pink mb-4">Red Flags</h5>
                        <ul className="flex flex-col gap-2">
                          {result.redFlags.map((flag, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <span className="text-verge-pink">🚩</span>
                              <span>{flag}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-mono text-[10px] uppercase font-black text-verge-pink mb-4">Publisher Context</h5>
                        <p className="text-sm italic">{result.publisherAnalysis}</p>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={onClose}
                    className="mt-4 bg-deep-black text-stark-white font-mono py-4 uppercase tracking-widest font-black italic hover:bg-verge-pink transition-colors"
                  >
                    Close Analysis
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
