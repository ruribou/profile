export type Profile = {
  id: string;
  name: string;
  full_name: string;
  title: string;
  location: string;
  avatar_url: string;
  bio_main: string;
  bio_philosophy: string;
  bio_hobbies: string;
  badges: string[];
};

export type Career = {
  id: string;
  period: string;
  title: string;
  organization: string;
  description: string;
  icon_name: string;
  dot_color: string;
  icon_bg: string;
  url: string | null;
  sort_order: number;
};

export type Skill = {
  id: string;
  category: string;
  category_icon: string;
  category_icon_color: string;
  name: string;
  icon_name: string;
  icon_color: string;
  sort_order: number;
  category_sort_order: number;
};

export type SocialLink = {
  id: string;
  platform: string;
  handle: string;
  url: string;
  icon_name: string;
  description: string;
  icon_bg: string;
  link_type: "external" | "internal" | "email";
  sort_order: number;
};
