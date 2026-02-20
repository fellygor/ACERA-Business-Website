import { 
  Monitor, 
  Settings, 
  Code2, 
  Database, 
  Rocket, 
  Globe 
} from 'lucide-react';

export const servicesData = [
  {
    title: "Website Design",
    description: "Creating visually stunning and user-friendly designs tailored to your brand.",
    price: "$1,000 - $3,000",
    icon: Monitor // Notice: No brackets here
  },
  {
    title: "Website Maintenance",
    description: "Keeping your site secure, updated, and performing at its best 24/7.",
    price: "$500 - $1,500",
    icon: Settings
  },
  {
    title: "Front-End Development",
    description: "Building responsive, fast, and interactive user interfaces using modern tech.",
    price: "$1,500 - $4,000",
    icon: Code2
  },
  {
    title: "Back-End Development",
    description: "Robust server-side logic and database management for complex applications.",
    price: "$2,000 - $5,000",
    icon: Database
  },
  {
    title: "Full-Stack Development",
    description: "End-to-end solutions covering both client-side and server-side needs.",
    price: "$3,500+",
    icon: Rocket
  },
  {
    title: "Website Hosting",
    description: "Reliable and fast hosting solutions to keep your business online.",
    price: "$100 - $500",
    icon: Globe
  }
];

