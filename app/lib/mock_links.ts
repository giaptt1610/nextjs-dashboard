import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";

type NavLink = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

export const links: NavLink[] = [
  {
    label: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    label: "Customers",
    href: "/customer",
    icon: UserGroupIcon,
  },
  {
    label: "Invoices",
    href: "/invoices",
    icon: DocumentDuplicateIcon,
  },
];
