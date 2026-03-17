-- ============================================
-- Supabase Migration: Profile Site Data
-- ============================================

-- 1. profiles
create table profiles (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  full_name text not null,
  title text not null,
  location text not null,
  avatar_url text not null,
  bio_main text not null,
  bio_philosophy text not null,
  bio_hobbies text not null,
  badges jsonb not null default '[]',
  created_at timestamptz default now()
);

alter table profiles enable row level security;
create policy "Public read profiles" on profiles for select using (true);

-- 2. careers
create table careers (
  id uuid primary key default gen_random_uuid(),
  period text not null,
  title text not null,
  organization text not null,
  description text not null,
  icon_name text not null,
  dot_color text not null,
  icon_bg text not null,
  url text,
  sort_order int not null,
  created_at timestamptz default now()
);

alter table careers enable row level security;
create policy "Public read careers" on careers for select using (true);

-- 3. skills
create table skills (
  id uuid primary key default gen_random_uuid(),
  category text not null,
  category_icon text not null,
  category_icon_color text not null,
  name text not null,
  icon_name text not null,
  icon_color text not null,
  sort_order int not null,
  category_sort_order int not null,
  created_at timestamptz default now()
);

alter table skills enable row level security;
create policy "Public read skills" on skills for select using (true);

-- 4. social_links
create table social_links (
  id uuid primary key default gen_random_uuid(),
  platform text not null,
  handle text not null,
  url text not null,
  icon_name text not null,
  description text not null,
  icon_bg text not null,
  link_type text not null default 'external',
  sort_order int not null,
  created_at timestamptz default now()
);

alter table social_links enable row level security;
create policy "Public read social_links" on social_links for select using (true);

-- ============================================
-- Seed Data
-- ============================================

-- Profile
insert into profiles (name, full_name, title, location, avatar_url, bio_main, bio_philosophy, bio_hobbies, badges)
values (
  'ruribou',
  'Ryota Asai',
  'Software Engineer',
  '神奈川県相模原市',
  '/images/IMG_8792.PNG',
  '埼玉の山奥で大学生をしています。技術コミュニティの運営、NPO法人の運営もしています。',
  '技術は目的ではなく、手段であるということを大切にしています。',
  '趣味はアイドルマスター、写真撮影、プロ野球観戦などです。',
  '["大学院生", "ソフトウェアエンジニア"]'
);

-- Careers
insert into careers (period, title, organization, description, icon_name, dot_color, icon_bg, url, sort_order) values
  ('2022 / 4 - 2026 / 3', '学士', '東京電機大学', 'IoE/M2Mソリューション研究室に所属。音声インターフェイスとRAGを用いた案内型システムの開発を行っています。', 'GraduationCap', 'bg-blue-400', 'bg-blue-50 dark:bg-blue-500/10 text-blue-500', 'https://www.kamlab.rd.dendai.ac.jp', 1),
  ('2024 / 8', 'エンジニアインターン', 'エキサイトホールディングス株式会社', '学生エンジニアインターン「Boost!」に参加。SaaS事業部でVue.jsからReact.jsでの一部機能のリプレイス業務に携わりました。', 'Briefcase', 'bg-orange-400', 'bg-orange-50 dark:bg-orange-500/10 text-orange-500', null, 2),
  ('2024 / 9 - present', 'エンジニアインターン', 'Lovegraph Inc.', 'システムの新機能開発・改修を担当。フルスタックに近い立ち回りでプロダクト開発に携わっています。', 'Briefcase', 'bg-rose-400', 'bg-rose-50 dark:bg-rose-500/10 text-rose-500', 'https://corporate.lovegraph.me', 3),
  ('2025 / 4 - present', 'イベント事業本部 関東事業部', 'NxTEND', '東京を中心に、関東の学生がラフに話せるエンジニアコミュニティ『Ramble』の運営をしています。事業規模を拡大していくために様々な取り組みをしています。', 'Users', 'bg-violet-400', 'bg-violet-50 dark:bg-violet-500/10 text-violet-500', 'https://www.nxtend.or.jp/', 4),
  ('2025 / 6 - present', 'メイン会員', 'CA Tech Lounge', '自主学習が足りないと感じ、インプットを増やすために、CA Tech Lounge というコミュニティに参加しました。', 'BookOpen', 'bg-emerald-400', 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500', 'https://www.cyberagent.co.jp/careers/special/students/tech_lounge/', 5),
  ('2025 / 9', 'エンジニアインターン', 'DMM.com LLC', 'DMM.comのエンジニアサマーインターンの「DMM GUILD」に参加。Golangを中心にフルスタックで横断的にプロダクト開発に携わりました。', 'Briefcase', 'bg-gray-400', 'bg-gray-50 dark:bg-gray-500/10 text-gray-500', 'https://dmm-corp.com/recruit/intern/engineer/guild/', 6),
  ('2026 / 2', 'CA Tech Job', '株式会社サイバーエージェント', 'サイバーエージェントのゲーム事業部（SGE）の株式会社アプリボットにて1ヶ月間インターンを行った。ドメイン駆動設計をベースにしたレイヤードアーキテクチャで、Go言語を使用。主にゲームの新機能開発に携わった。', 'Briefcase', 'bg-teal-400', 'bg-teal-50 dark:bg-teal-500/10 text-teal-500', 'https://www.cyberagent.co.jp/careers/students/event/detail/id=32004', 7),
  ('2026 / 4 - present', '修士', '東京電機大学大学院', 'IoE/M2Mソリューション研究室に所属。学士課程での研究を発展させ、より高度な研究に取り組んでいます。', 'GraduationCap', 'bg-blue-400', 'bg-blue-50 dark:bg-blue-500/10 text-blue-500', 'https://www.kamlab.rd.dendai.ac.jp', 8);

-- Skills
insert into skills (category, category_icon, category_icon_color, name, icon_name, icon_color, category_sort_order, sort_order) values
  ('Language', 'Code', 'text-blue-500 bg-blue-50 dark:bg-blue-500/10', 'Ruby', 'SiRuby', 'text-red-500', 1, 1),
  ('Language', 'Code', 'text-blue-500 bg-blue-50 dark:bg-blue-500/10', 'Go', 'SiGo', 'text-cyan-600 dark:text-cyan-400', 1, 2),
  ('Language', 'Code', 'text-blue-500 bg-blue-50 dark:bg-blue-500/10', 'TypeScript', 'SiTypescript', 'text-blue-600 dark:text-blue-400', 1, 3),
  ('Language', 'Code', 'text-blue-500 bg-blue-50 dark:bg-blue-500/10', 'JavaScript', 'SiJavascript', 'text-amber-500', 1, 4),
  ('Language', 'Code', 'text-blue-500 bg-blue-50 dark:bg-blue-500/10', 'Python', 'SiPython', 'text-sky-600 dark:text-sky-400', 1, 5),
  ('Language', 'Code', 'text-blue-500 bg-blue-50 dark:bg-blue-500/10', 'C', 'SiC', 'text-gray-500 dark:text-gray-400', 1, 6),
  ('Framework / Library', 'Layers', 'text-purple-500 bg-purple-50 dark:bg-purple-500/10', 'Ruby on Rails', 'SiRubyonrails', 'text-red-500', 2, 1),
  ('Framework / Library', 'Layers', 'text-purple-500 bg-purple-50 dark:bg-purple-500/10', 'React', 'SiReact', 'text-cyan-500', 2, 2),
  ('Framework / Library', 'Layers', 'text-purple-500 bg-purple-50 dark:bg-purple-500/10', 'Next.js', 'SiNextdotjs', 'text-gray-800 dark:text-gray-200', 2, 3),
  ('Framework / Library', 'Layers', 'text-purple-500 bg-purple-50 dark:bg-purple-500/10', 'Vue.js', 'SiVuedotjs', 'text-emerald-500', 2, 4),
  ('Framework / Library', 'Layers', 'text-purple-500 bg-purple-50 dark:bg-purple-500/10', 'Tailwind CSS', 'SiTailwindcss', 'text-cyan-500', 2, 5),
  ('Framework / Library', 'Layers', 'text-purple-500 bg-purple-50 dark:bg-purple-500/10', 'SCSS', 'SiSass', 'text-pink-500', 2, 6),
  ('Database / Tools', 'Database', 'text-cyan-500 bg-cyan-50 dark:bg-cyan-500/10', 'MySQL', 'SiMysql', 'text-blue-600 dark:text-blue-400', 3, 1),
  ('Database / Tools', 'Database', 'text-cyan-500 bg-cyan-50 dark:bg-cyan-500/10', 'PostgreSQL', 'SiPostgresql', 'text-blue-700 dark:text-blue-300', 3, 2),
  ('Database / Tools', 'Database', 'text-cyan-500 bg-cyan-50 dark:bg-cyan-500/10', 'Docker', 'SiDocker', 'text-blue-500', 3, 3),
  ('Database / Tools', 'Database', 'text-cyan-500 bg-cyan-50 dark:bg-cyan-500/10', 'AWS', 'Cloud', 'text-amber-600 dark:text-amber-400', 3, 4),
  ('Database / Tools', 'Database', 'text-cyan-500 bg-cyan-50 dark:bg-cyan-500/10', 'Cloudflare', 'SiCloudflare', 'text-orange-500', 3, 5);

-- Social Links
insert into social_links (platform, handle, url, icon_name, description, icon_bg, link_type, sort_order) values
  ('Email', 'Y29udGFjdEBydXJpYm91LmNvbQ==', '', 'Mail', 'ご連絡やご相談はこちら', 'bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400', 'email', 1),
  ('Booking', '日程調整', '/booking', 'CalendarDays', 'ミーティングのご予約はこちら', 'bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400', 'internal', 2),
  ('X', '@ruribou_swe', 'https://x.com/ruribou_swe', 'SiX', '日々の活動について発信・DMも歓迎', 'bg-gray-50 dark:bg-gray-500/10 text-gray-700 dark:text-gray-300', 'external', 3),
  ('GitHub', '@ruribou', 'https://github.com/ruribou', 'SiGithub', '公開しているコード', 'bg-gray-50 dark:bg-gray-500/10 text-gray-700 dark:text-gray-300', 'external', 4),
  ('Qiita', '@ruribou', 'https://qiita.com/ruribou', 'SiQiita', '技術記事や個人的なアウトプット', 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400', 'external', 5),
  ('Zenn', '@eng_ryosan', 'https://zenn.dev/eng_ryosan', 'SiZenn', '組織でのアウトプットや活動記録', 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400', 'external', 6),
  ('しずかなインターネット', '@ruribou', 'https://sizu.me/ruribou', 'Feather', 'エッセイや日記', 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400', 'external', 7);
