export interface Activity {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  type: string;
}

export const activities: Activity[] = [
  {
    id: 1,
    title: "Hello World Hackathon 2025",
    description: "A 48-hour hackathon focused on solving local challenges using technology. AXIS members developed a Skin Cancer Risk Assessment prototype.",
    image: "/images/add-images/hello-world1.jpg", 
    date: "August 2025",
    type: "Hackathon",
  },
  {
    id: 2,
    title: "Weekly Holiday Themed Discussions",
    description: "Weekly online workshops on business management fundamentals and technological applications in healthcare and agriculture.",
    image: "/images/add-images/themed_discussions.png",
    date: "Ongoing",
    type: "Workshop",
  },
  {
    id: 3,
    title: "Visit to MUST Water Treatment Project",
    description: "Learning about water purification and engineering applications in water treatment.",
    image: "/images/add-images/outing.jpg",
    date: "October 2025",
    type: "Visit",
  },
  {
    id: 4,
    title: "Data Science Bootcamp",
    description: "Intensive training program covering data analysis, machine learning, and visualization techniques.",
    image: "/images/add-images/data_science.jpg",
    date: "December 2025",
    type: "Workshop",
  },
  {
    id: 5,
    title: "Solar Energy Symposium",
    description: "Collaboration with renewable energy experts to advance solar-powered agricultural solutions.",
    image: "/images/add-images/solar-energy.jpg",
    date: "August 2025",
    type: "Event",
  },
  {
    id: 6,
    title: "MUST Design Competition Demo Day",
    description: "Showcasing AXIS healthcare and Agricultural innovations to professionals and potential partners.",
    image: "/images/background_photos/hero3.png",
    date: "August 2025",
    type: "Demo",
  },
];