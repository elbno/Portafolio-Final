export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  tags: string[];
  featured: boolean;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
}