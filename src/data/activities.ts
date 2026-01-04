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
    image: "/images/activity-hackathon.jpg", // Replace with Django {{ activity.image.url }}
    date: "August 2025",
    type: "Hackathon",
  },
  {
    id: 2,
    title: "AI Workshop Series",
    description: "Monthly workshops on artificial intelligence fundamentals and applications in healthcare and agriculture.",
    image: "/images/activity-ai-workshop.jpg",
    date: "Ongoing",
    type: "Workshop",
  },
  {
    id: 3,
    title: "Industry Visit to Malawi Breweries",
    description: "Learning about industrial processes and chemical engineering applications in beverage production.",
    image: "/images/activity-industry-visit.jpg",
    date: "February 2024",
    type: "Visit",
  },
  {
    id: 4,
    title: "Data Science Bootcamp",
    description: "Intensive training program covering data analysis, machine learning, and visualization techniques.",
    image: "/images/activity-data-bootcamp.jpg",
    date: "January 2024",
    type: "Workshop",
  },
  {
    id: 5,
    title: "Solar Energy Symposium",
    description: "Collaboration with renewable energy experts to advance solar-powered agricultural solutions.",
    image: "/images/activity-solar-symposium.jpg",
    date: "April 2024",
    type: "Event",
  },
  {
    id: 6,
    title: "Healthcare Technology Demo Day",
    description: "Showcasing AXIS healthcare innovations to medical professionals and potential partners.",
    image: "/images/activity-healthcare-demo.jpg",
    date: "May 2024",
    type: "Demo",
  },
];