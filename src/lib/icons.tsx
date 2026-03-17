import {
  SiC,
  SiClaude,
  SiGo,
  SiRuby,
  SiRubyonrails,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
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
  Code,
  Layers,
  Wrench,
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
  SiClaude,
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
  Wrench,
};

export function getIcon(name: string, className?: string) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon className={className} color="currentColor" />;
}
