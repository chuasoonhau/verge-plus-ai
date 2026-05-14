/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NewsFeed from './components/NewsFeed';
import Sidebar from './components/Sidebar';
import MemberCenter from './components/MemberCenter';
import Footer from './components/Footer';
import AnalysisModal from './components/AnalysisModal';
import DisqusForum from './components/DisqusForum';
import { Article } from './types';

const MOCK_MAIN_ARTICLE: Article = {
  id: 'main-1',
  title: 'The Future of Mobile is Folding, But the Price is still the Breaking Point',
  category: 'Featured',
  author: 'The Verve Staff',
  timestamp: 'Today',
  imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDm-TcsgKe2Okat0pARel430RqzPjTLdyNQfMqHF_LMJBzIkOfsz4D8Er9czxVofnvDenOCb5lYtFrksXJdxvUYAez1zyC5MfRa18mJUuPiefmRC24eb9e1Tom931rX2dB6HqdQHcFZN_RX4PnPyqMWMX9P5-2COSNk8E48kLXl9rmUTxK-aAtI3T3szbDEH9Ya2Tl0YqKhEhhDe2QXiG2BwojexOaonPMRJbQ5PlNyWNI5QbVvEeubcnMAHiZEQo8bNXPEGE575Mw',
};

const MOCK_SIDE_ARTICLES: Article[] = [
  {
    id: 'side-1',
    title: 'The hidden human cost of training the next GPT',
    category: 'Artificial Intelligence',
    author: 'AI Reporter',
    timestamp: '2h ago',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIuXYNBPNLeDIPJE7C60AFsnRyTvxDfTFTLj1RfRBIq4t2VQzCZ0Xx1ggNzwMfqkcBGbproo9TaVF_-mXI05RVfpewJFmpozopu3agjBA6pWb2LmOE3j8JDiCTa10rYxP9Fa7ciLp8Fqc6p7npzbeHwoiJsoWe1JLofpJebCwP4gTMzeEeCPZhPmR93EuyXlbboK7HnNkiJQ10q6pDC3xHBesQDui4X0wX5Ct8YyIy3zbeXgaQHskZVUjkyanq60w9-xt5GxK0yxQ',
  },
  {
    id: 'side-2',
    title: "Intel's gamble on the modular future might actually pay off",
    category: 'Hardware',
    author: 'Tech Guru',
    timestamp: '4h ago',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNheXxRBG02c3g6QosFnqNKSFJHXaWy_IsunKvBM8eR5ofiEQZVqHNqn7sYlUvVh0ojRkN70p8P6ZOegl-10Szs3h8KighPapYzClCYKtdQD0Wit2y5NTar2mh3PKMdXTvO6P5yytrbBSGYjKSYpk6HmPkYSrhI1jFrlW7wRM7--OVnJNdm8kC9kcIp5Iv_E7SiUnK5naQa-8wPFPAs5-ghAUU_6-v2XW-Whug5eU53DW-s3qK4b_FJzYinxzUS5FMWLkR2jQCCw8',
  },
];

const MOCK_NEWS_ARTICLES: Article[] = [
  {
    id: 'news-1',
    title: 'Valve is reportedly working on a new Steam Controller',
    excerpt: 'Leaked patent filings suggest a more ergonomic design with modular haptics and swappable trackpads.',
    category: 'Gaming',
    author: 'Sean Hollister',
    timestamp: '10:45 AM ET',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuWogBg762uZEXbjZTZkTg6xBe-NfLxKfmPTX_s8xPdzjTaKddgIvJ-wzhAMGlswcGB9LAVhUSSv30U6eP1F-XHi0_JfGrkZmasVPqv7n3ciQOf4QETs2uj6CoJ7ts4qKDYrNSN9OrbjIw9Rsj2NpaQtD-GpgDJmczv5uWg9bN4zGwVqeS_btzQ2ye57HsPJ0G7A5waPTNfl1iDhdItvI3cUP30AwcA0hAllnnOw0Uuuvls-eRdbzdAS7nU303GtrkpwjtApMB1-U',
  },
  {
    id: 'news-2',
    title: 'New fusion breakthrough brings clean energy closer to reality',
    excerpt: 'Scientists at the National Ignition Facility achieved a record-breaking net energy gain using a new laser configuration.',
    category: 'Science',
    author: 'Adi Robertson',
    timestamp: '9:12 AM ET',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhvM4g_qD_V7X3EcQLmncN6I1R3SSscNIrEwBLk4rXuFEZh5ls0NTD_XLmKx55aKc8hu1aagYhB3nDMX1g4jTRXJSU1K3GLgRfFm0lc5X_aOingMZlPq9oJJtTbo-ZNR7mJUfnuNUrPN9D944x6SkyS74V8DxbAOzaKKkS8ofABbxAK8eXZjHjAbJ1n32ZmXlg3nIrzOy9LeO8tViXo8yMf08DadjLFlzj6-vNsU8bWcl06ItU9799mgiL2e0mJzOCFnYz3g8Yq58',
  },
];

const MOCK_REVIEWS: Article[] = [
  {
    id: 'rev-1',
    title: 'Sony WH-1000XM6 Review',
    excerpt: 'The noise-canceling king gets a minor but meaningful update.',
    category: 'Reviews',
    author: 'Audio Specialist',
    timestamp: 'Today',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAV_k9StPszKwfLXuKec2voSrEbnYL6U8c3981bRVJlluknQG-VC_PUja1wAYnH8184y-X9tmuvaikvL7LihfZY_JmWhb-HuzuXpo4Kuel-61QPm_zWl5sxvtDCjyDACQCshAO0lCCKRI4wDA7TJFt_QzbJ6T28jMUUajrk3xdPwu_-hHhvV24rHo8m51NcZyM9z49UV7FQ_pKzz8nUQdheS0vTTpJYPzlY5hEgLDIyX3K-oeWK6sgePiYOpBJf53BuZE_6AVnkZW4',
    score: 8,
  },
  {
    id: 'rev-2',
    title: 'Dell XPS 14 (2024) Review',
    excerpt: 'A controversial design for a nearly perfect laptop.',
    category: 'Reviews',
    author: 'Laptop Reviewer',
    timestamp: 'Today',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZpWFFA_-NEAJztJQPclsUlRVr20XfANKNIJQXiouDPM0uKzZ8yBD5cNzrqIvDX2jw2a2icYpx2Mq_qoML0Ng-O78Gu3GsSjw4gdZp2Tdbusb2iYMXo6MorLYIfCTeNiqhYKdKMCrOYAryNv3eP1IRh7yRnrX-iq6cemuZkGuj8M17kostSAYN2KrdtMcMZIGXF4r8JdA-GJuth01pNyPEhaa2bhU_UaE34cwTj8b3cNAKo5CEPOwv6Fp_9Xqpu8xQWjzNK7S5WyU',
    score: 9,
  },
];

const MOCK_TRENDING = [
  { id: 't-1', title: "The Best Prime Day Tech Deals We've Found So Far", category: 'Shopping' },
  { id: 't-2', title: "Apple's AI features are delayed until October", category: 'Tech' },
  { id: 't-3', title: 'Elon Musk says X will move headquarters to Texas', category: 'Policy' },
  { id: 't-4', title: 'The Dyson Onrac is a serious pair of headphones', category: 'Reviews' },
  { id: 't-5', title: "Why everyone is obsessed with the 'Pink Sauce' saga", category: 'Culture' },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnalysisOpen, setIsAnalysisOpen] = useState(false);
  const [analyzingArticle, setAnalyzingArticle] = useState<string>('');

  const handleAnalyze = (title: string) => {
    setAnalyzingArticle(title);
    setIsAnalysisOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header onToggleMenu={() => setIsMenuOpen(true)} />
      <MemberCenter isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <AnalysisModal 
        isOpen={isAnalysisOpen} 
        onClose={() => setIsAnalysisOpen(false)} 
        articleTitle={analyzingArticle} 
      />

      <main className="flex-grow pt-16 max-w-[1440px] mx-auto w-full px-4 md:px-12">
        <Hero mainArticle={MOCK_MAIN_ARTICLE} sideArticles={MOCK_SIDE_ARTICLES} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16 md:mt-24">
          <div className="lg:col-span-8">
            <NewsFeed 
              articles={MOCK_NEWS_ARTICLES} 
              reviewArticles={MOCK_REVIEWS} 
              onAnalyze={handleAnalyze}
            />
          </div>
          <div className="lg:col-span-4">
            <Sidebar trendingArticles={MOCK_TRENDING} />
          </div>
        </div>

        <DisqusForum />
      </main>

      <Footer />
    </div>
  );
}
