import {
  SiC,
  SiGo,
  SiRuby,
  SiRubyonrails,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiCloudflare,
  SiVuedotjs,
  SiSass,
  SiJavascript,
  SiPython,
  SiX,
  SiGithub,
  SiQiita,
  SiZenn,
} from "@icons-pack/react-simple-icons";
import {
  GraduationCap,
  Briefcase,
  Users,
  BookOpen,
  MapPin,
  Feather,
  Mail,
  CalendarDays,
  Cloud,
  Code,
  Layers,
  Database,
} from "lucide-react";
import { type ComponentType, type SVGProps } from "react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string; color?: string }>;

const iconMap: Record<string, IconComponent> = {
  // Simple Icons (brands)
  SiC,
  SiGo,
  SiRuby,
  SiRubyonrails,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiCloudflare,
  SiVuedotjs,
  SiSass,
  SiJavascript,
  SiPython,
  SiX,
  SiGithub,
  SiQiita,
  SiZenn,
  // Lucide (UI)
  Cloud,
  GraduationCap,
  Briefcase,
  Users,
  BookOpen,
  MapPin,
  Feather,
  Mail,
  CalendarDays,
  Code,
  Layers,
  Database,
};

export function getIcon(name: string, className?: string) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon className={className} color="currentColor" />;
}
