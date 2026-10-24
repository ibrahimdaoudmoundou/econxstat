import {
  BarChart3,
  BookOpenCheck,
  Cpu,
  GraduationCap,
  LineChart,
  Sigma,
  Users,
  type LucideProps,
} from 'lucide-react';
import type { ServiceIcon as ServiceIconName } from '../model/services';

const icons = {
  statistics: BarChart3,
  economics: LineChart,
  econometrics: Sigma,
  computing: Cpu,
  tutoring: GraduationCap,
  software: BookOpenCheck,
  capacity: Users,
} satisfies Record<ServiceIconName, unknown>;

export const ServiceIcon = ({ name, ...props }: LucideProps & { name: ServiceIconName }) => {
  const Icon = icons[name];
  return <Icon aria-hidden {...props} />;
};
