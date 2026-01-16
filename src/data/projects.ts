export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "PuriMadzi",
    description: "Solar-grid UV+RO water purifier designed for Malawi's water challenges",
    image: "/images/add-images/puri-madzi.jpg", 
    tags: ["IoT", "Water Purification", "Solar Energy"],
    demoUrl: "#", // Replace with actual demo link
    repoUrl: "#", // Replace with GitHub repo
  },
  {
    id: 2,
    title: "Lathu Phala",
    description: "Fortified banana porridge for children to combat malnutrition",
    image: "/images/add-images/lathu-phala.jpg", 
    tags: ["Food Science", "Nutrition", "Agriculture"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 3,
    title: "Clinic Flow",
    description: "AI-powered clinical management system for efficient healthcare delivery",
    image: "/images/add-images/clinic_flow.jpg", 
    tags: ["AI", "Healthcare", "Data Science"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 4,
    title: "SunFlake Drier",
    description: "Hybrid solar agri-drier for sustainable food preservation",
    image: "/images/background_photos/sunflake.jpg", 
    tags: ["Solar Energy", "Agriculture", "IoT"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 5,
    title: "Skin Cancer Risk Assessment",
    description: "AI diagnostic tool for early skin cancer detection",
    image: "/images/add-images/skin_cancer.jpg", 
    tags: ["AI", "Healthcare", "Machine Learning"],
    demoUrl: "#",
    repoUrl: "#",
  },
];