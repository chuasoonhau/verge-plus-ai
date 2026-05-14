export interface Article {
  id: string;
  title: string;
  excerpt?: string;
  category: string;
  author: string;
  timestamp: string;
  imageUrl: string;
  score?: number;
}

export interface SidebarLink {
  label: string;
  icon: string;
  active?: boolean;
}
