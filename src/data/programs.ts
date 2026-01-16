export interface Program {
  id: number;
  title: string;
  description: string;
  icon: 'Brain' | 'BarChart3' | 'Wifi' | 'Globe';
  color: 'axis-blue' | 'axis-green';
  features: string[];
}

export const programs: Program[] = [
  {
    id: 1,
    title: "AI Lab",
    description: "Exploring artificial intelligence and machine learning applications for solving real-world problems in Malawi.",
    icon: "Brain", // Lucide icon name
    color: "axis-blue",
    features: ["Machine Learning Models", "Computer Vision", "Natural Language Processing", "AI Ethics"],
  },
  {
    id: 2,
    title: "Data Science",
    description: "Analyzing data to extract insights and drive informed decision-making for socio-economic development.",
    icon: "BarChart3",
    color: "axis-green",
    features: ["Data Analysis", "Statistical Modeling", "Visualization", "Big Data Processing"],
  },
  {
    id: 3,
    title: "IoT",
    description: "Developing Internet of Things solutions for smart agriculture, healthcare, and industrial applications.",
    icon: "Wifi",
    color: "axis-blue",
    features: ["Sensor Networks", "Embedded Systems", "Cloud Integration", "Smart Devices"],
  },
  {
    id: 4,
    title: "Web Development",
    description: "Building modern web applications and platforms to showcase innovations and connect with stakeholders.",
    icon: "Globe",
    color: "axis-green",
    features: ["Frontend Development", "Backend APIs", "Database Design", "UI/UX Design"],
  },
];