// Type definition for project details
export type ProjectDetail = {
  id: number                // Unique identifier for the project
  title: string            // Project title
  company: string          // Company name
  overview: string         // Brief project overview
  mainImage: string        // Main project image path
  link: string            // Live project URL
  github?: string         // Optional GitHub repository URL
  features: {             // List of project features
    title: string         // Feature title
    description: string   // Feature description  
    image: string | string[] // Feature image(s) path
  }[]
  techStack: {            // Technical stack groupings
    category: string      // Tech category name
    items: string[]       // List of technologies
  }[]
  achievements: {         // Quantifiable achievements
    metric: string        // Achievement metric name
    value: string         // Achievement value
    change: number        // Numerical change/improvement
  }[]
}

// Project data mapping object
export const PROJECT_DATA: Record<number, ProjectDetail> = {
  1: {
    id: 1,
    title: "SaladBar Meals",
    company: "Theqah", 
    overview: "Project 1 Overview",
    mainImage: "/portfolio/projects/saladbar.png",
    link: "https://saladbar.sa",
    features: [
      {
        title: "Feature 1",
        description: "Feature 1 Description",
        image: "/portfolio/example1/feature1.png"
      }
    ],
    techStack: [
      {
        category: "Frontend",
        items: ["Flutter", "Bloc"]
      },
      {
        category: "Backend",
        items: ["Laravel","Firebase"]
      }
    ],
    achievements: [
      {
        metric: "Performance Improvement",
        value: "50%",
        change: 50
      }
    ]
  },
  2: {
    id: 2,
    title: "Fushati",
    company: "Theqah", 
    overview: "Project 2 Overview",
    mainImage: "/portfolio/projects/saladbar.png",
    link: "https://fushati.com",
    features: [
      {
        title: "Feature 1",
        description: "Feature 1 Description",
        image: "/portfolio/example1/feature1.png"
      }
    ],
    techStack: [
      {
        category: "Frontend",
        items: ["Flutter", "Bloc"]
      },
      {
        category: "Backend",
        items: ["Laravel","Firebase"]
      }
    ],
    achievements: [
      {
        metric: "Performance Improvement",
        value: "50%",
        change: 50
      }
    ]
  },
  3: {
    id: 2,
    title: "Evsion",
    company: "Evision - Freelance",
    overview: "Project 2 Overview", 
    mainImage: "/portfolio/projects/evision.png",
    link: "https://evision-edu.com",
    features: [
      {
        title: "Feature 1",
        description: "Feature 1 Description",
        image: "/portfolio/example2/feature1.png"
      }
    ],
    techStack: [
      {
        category: "Backend",
        items: ["Node.js", "Express"]
      }
    ],
    achievements: [
      {
        metric: "User Satisfaction",
        value: "95%",
        change: 95
      }
    ]
  }
}

// Helper function: Get project by ID
export const getProjectById = (id: number): ProjectDetail | undefined => {
  if (!Object.keys(PROJECT_DATA).length) {
    console.warn('PROJECT_DATA is empty');
    return undefined;
  }
  return PROJECT_DATA[id] || Object.values(PROJECT_DATA)[0];
}