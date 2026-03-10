import {
  faBolt,
  faBuilding,
  faChartBar,
  faCheck,
  faClock,
  faDollarSign,
  faGear,
  faMapLocationDot,
  faRightFromBracket,
  faTag,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NAV_LINKS = [
  { label: "About", to: "/about" },
  { label: "Contact Us", to: "/contact-us" },
];

export const RINGS = [
  { id: "services", label: "Services", target: "services" },
  { id: "how-it-works", label: "How it works", target: "how-it-works" },
  { id: "pricing", label: "Pricing", target: "pricing" },
];

export const MENU_ITEMS: MenuEntry[] = [
  {
    label: "Settings",
    icon: <FontAwesomeIcon icon={faGear} width={14} />,
  },
  {
    label: "Earnings",
    icon: <FontAwesomeIcon icon={faDollarSign} width={14} />,
  },
  {
    label: "Dashboard",
    icon: <FontAwesomeIcon icon={faChartBar} width={14} />,
  },
  { sep: true },
  {
    label: "Sign out",
    danger: true,
    icon: <FontAwesomeIcon icon={faRightFromBracket} width={14} />,
  },
];

export const STEPS = [
  {
    id: "step1",
    number: "01",
    title: "Register your company",
    description:
      "Sign up, configure your delivery company profile, set your service regions and pricing. Live in minutes.",
    icon: <FontAwesomeIcon icon={faBuilding} />,
  },
  {
    id: "step2",
    number: "02",
    title: "Add your drivers",
    description:
      "Onboard your delivery team, assign roles and regions, and manage your fleet from one central dashboard.",
    icon: <FontAwesomeIcon icon={faUserPlus} />,
  },
  {
    id: "step3",
    number: "03",
    title: "Receive & deliver orders",
    description:
      "Customers place delivery requests. Your team picks up, tracks in real time, and delivers — customers follow every step on the map.",
    icon: <FontAwesomeIcon icon={faBolt} />,
  },
];

export const SERVICES = [
  {
    id: "orders",
    label: "01",
    title: "Order Management",
    description:
      "Customers submit delivery requests with pickup and drop-off addresses. Your team receives, assigns, and manages every order in one place.",
    icon: <FontAwesomeIcon icon={faCheck} />,
  },
  {
    id: "tracking",
    label: "02",
    title: "Live GPS Tracking",
    description:
      "Customers track their delivery on a live map from pickup to drop-off. Real-time driver location, route display, and ETA — always up to date.",
    icon: <FontAwesomeIcon icon={faMapLocationDot} />,
  },
  {
    id: "status",
    label: "03",
    title: "Order Status & ETA",
    description:
      "Every order flows through clear states — Ordered, In Progress, Delivered. Customers always know where their parcel is and when it arrives.",
    icon: <FontAwesomeIcon icon={faClock} />,
  },
  {
    id: "pricing",
    label: "04",
    title: "Region-Based Pricing",
    description:
      "Each company sets fixed delivery prices per region. Customers see the exact price before confirming — no hidden fees, no surprises.",
    icon: <FontAwesomeIcon icon={faTag} />,
  },
];

export const PLANS: Plan[] = [
  {
    id: "commission",
    name: "Pay per order",
    price: "5%",
    period: "per order",
    description:
      "No upfront cost. We take a small commission on each delivery you complete.",
    highlight: false,
    features: [
      "Unlimited employees",
      "Unlimited orders",
      "Live GPS tracking",
      "Order status & ETA",
      "Region-based pricing",
      "Email support",
    ],
  },
  {
    id: "flat",
    name: "Flat monthly",
    price: "₾100",
    period: "/ month",
    description:
      "One predictable monthly fee. Keep 100% of every delivery you earn.",
    highlight: true,
    features: [
      "Unlimited employees",
      "Unlimited orders",
      "Live GPS tracking",
      "Order status & ETA",
      "Region-based pricing",
      "Priority support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: null,
    description: "Large fleets and custom needs. Let's talk.",
    highlight: false,
    features: [
      "Everything in Flat monthly",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantees",
      "White-label option",
    ],
  },
];
