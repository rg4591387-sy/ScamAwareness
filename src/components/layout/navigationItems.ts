import {
  LayoutDashboard,
  Search,
  BookOpen,
  HelpCircle,
  FlaskConical,
  GraduationCap,
  Compass,
  CheckSquare,
  BarChart2,
  Bookmark,
  AlertOctagon,
  Settings,
} from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
  path: string;
  icon: any;
  badge?: string;
  isEmergency?: boolean;
}

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: 'overview',
    label: 'Overview',
    path: '/',
    icon: LayoutDashboard,
  },
  {
    id: 'analyzer',
    label: 'Scam Analyzer',
    path: '/analyzer',
    icon: Search,
    badge: 'AI',
  },
  {
    id: 'library',
    label: 'Scam Library',
    path: '/library',
    icon: BookOpen,
  },
  {
    id: 'quiz',
    label: 'Interactive Quiz',
    path: '/quiz',
    icon: HelpCircle,
  },
  {
    id: 'simulation',
    label: 'Scam Simulation Lab',
    path: '/simulation',
    icon: FlaskConical,
    badge: 'Lab',
  },
  {
    id: 'student-safety',
    label: 'Student Safety',
    path: '/student-safety',
    icon: GraduationCap,
    badge: 'Campus',
  },
  {
    id: 'learning-paths',
    label: 'Learning Paths',
    path: '/learning-paths',
    icon: Compass,
  },
  {
    id: 'checklist',
    label: 'Safety Checklist',
    path: '/checklist',
    icon: CheckSquare,
  },
  {
    id: 'progress',
    label: 'My Progress',
    path: '/progress',
    icon: BarChart2,
  },
  {
    id: 'resources',
    label: 'Cyber Safety Resources',
    path: '/resources',
    icon: Bookmark,
  },
  {
    id: 'emergency',
    label: 'Emergency Help',
    path: '/emergency',
    icon: AlertOctagon,
    isEmergency: true,
  },
  {
    id: 'settings',
    label: 'Settings',
    path: '/settings',
    icon: Settings,
  },
];
