// Type definition for project details
export type ProjectDetail = {
  id: number                // Unique identifier for the project
  title: string             // Project title
  company: string           // Company name
  overview: string          // Brief project overview
  mainImage: string         // Main project image path
  link: string              // Live project URL
  github?: string           // Optional GitHub repository URL
  features: {               // List of project features
    title: string           // Feature title
    description: string     // Feature description
    image: string | string[] // Feature image(s) path
  }[]
  techStack: {              // Technical stack groupings
    category: string        // Tech category name
    items: {
      label: string         // Display name shown under the icon
      icon?: string         // Optional icon filename override (without .svg). Falls back to label-derived name.
      invert?: boolean      // Whether to apply dark:invert on the icon. Defaults to true.
    }[]
  }[]
  achievements: {           // Quantifiable achievements
    metric: string          // Achievement metric name
    value: string           // Achievement value
    change: number          // Numerical change/improvement
  }[]
}

// Project data mapping object — IDs match the card list in Projects.tsx
export const PROJECT_DATA: Record<number, ProjectDetail> = {
  1: {
    id: 1,
    title: "Marcom Attend",
    company: "Marcom Arabia",
    overview: "A Flutter HRM mobile app for employee attendance tracking, check-in/out management, leave requests, and working hours monitoring. Features native iOS Live Activities and Android home screen widgets for real-time attendance visibility, Google Maps geofencing for location-based check-ins, and an AI-powered attendance assistant built with Gemini.",
    mainImage: "/portfolio/projects/attendance.png",
    link: "https://apps.apple.com/sa/app/marcom-attend/id6756225584",
    features: [
      {
        title: "Google Maps Geofencing",
        description: "Integrated Google Maps with geofencing to trigger location-based push notifications and alerts when users exit a defined zone, ensuring attendance is only recorded on-site.",
        image: "/portfolio/projects/attendance_screenshot/location.png"
      },
      {
        title: "iOS Live Activities & Home Widgets",
        description: "Built native iOS Live Activities and Android/iOS home screen widgets that surface real-time attendance status directly on the lock screen and home screen, reducing missed check-out incidents.",
        image: "/portfolio/projects/attendance_screenshot/home_widget.png"
      },
      {
        title: "AI Attendance Assistant (Gemini)",
        description: "An AI-powered assistant built with Google Gemini that answers employee questions about attendance records, leave balances, and company policies conversationally.",
        image: "/portfolio/projects/attendance.png"
      },
      {
        title: "Leave Management",
        description: "Employees submit leave requests through the app; managers review, approve, or reject them with instant push notifications keeping both parties informed.",
        image: "/portfolio/projects/attendance_screenshot/leaves.png"
      },
      {
        title: "Attendance Reports & Analytics",
        description: "Real-time dashboards show daily attendance summaries, late arrivals, absences, and total working hours. Firebase Analytics drives data-informed in-app review prompts targeting highly engaged users.",
        image: "/portfolio/projects/attendance_screenshot/reports.png"
      }
    ],
    techStack: [
      {
        category: "Mobile",
        items: [
          { label: "Flutter" },
          { label: "Dart" },
          { label: "iOS Live Activities", icon: "swift" },
          { label: "Android Widgets", icon: "android" },
        ]
      },
      {
        category: "State Management & Architecture",
        items: [
          { label: "Bloc/Cubit", icon: "bloc" },
          { label: "Freezed", icon: "dart" },
          { label: "Clean Architecture", icon: "cleanarchitecture", invert: true },
        ]
      },
      {
        category: "AI & Maps",
        items: [
          { label: "Gemini AI", icon: "gemini" },
          { label: "Google Maps", icon: "googlemaps" },
          { label: "Geofencing", icon: "googlemaps" },
        ]
      },
      {
        category: "Backend & Services",
        items: [
          { label: "Laravel" },
          { label: "Firebase Analytics", icon: "firebase" },
          { label: "Firebase Crashlytics", icon: "firebase" },
          { label: "Firebase Cloud Messaging", icon: "firebase" },
          { label: "Firebase Remote Config", icon: "firebase" },
        ]
      },
      {
        category: "Project Management",
        items: [
          { label: "Scrum", icon: "jira" },
          { label: "Jira" },
        ]
      }
    ],
    achievements: [
      {
        metric: "Missed Check-outs Reduced",
        value: "Significantly",
        change: 70
      },
      {
        metric: "App Size Reduction",
        value: "10%",
        change: 10
      },
      {
        metric: "Code Refactored",
        value: "10,000+ lines",
        change: 100
      },
      {
        metric: "Combined Downloads",
        value: "3,000+",
        change: 100
      }
    ]
  },

  2: {
    id: 2,
    title: "Esri Mena User Conference 2026",
    company: "Marcom Arabia",
    overview: "Official mobile app for the Esri Middle East and North Africa User Conference, providing attendees with full event schedules, session agendas, registration, attendee networking, and real-time chat messaging. One of two event management apps that reached 3,000+ combined downloads.",
    mainImage: "/portfolio/projects/esri.png",
    link: "https://apps.apple.com/sa/app/esri-mena-user-conference-2026/id6754825295",
    features: [
      {
        title: "Session Schedule & Agenda",
        description: "Attendees browse the complete conference agenda, filter sessions by track or speaker, and bookmark sessions to build a personalised schedule.",
        image: "/portfolio/projects/esri.png"
      },
      {
        title: "Event Registration",
        description: "Users register for the conference and individual sessions in-app, with QR-code tickets generated for on-site check-in at the venue.",
        image: "/portfolio/projects/esri.png"
      },
      {
        title: "Attendee Networking",
        description: "A searchable attendee directory lets participants discover and connect with other conference goers based on industry, role, or interests.",
        image: "/portfolio/projects/esri.png"
      },
      {
        title: "Real-time Chat Messaging",
        description: "One-on-one chat powered by Firebase Firestore, enabling attendees to message each other before, during, and after the event.",
        image: "/portfolio/projects/esri.png"
      },
      {
        title: "App Store & Play Store Release",
        description: "Handled end-to-end release management including App Store and Google Play submissions, versioning, and post-launch monitoring with Firebase Crashlytics.",
        image: "/portfolio/projects/esri.png"
      }
    ],
    techStack: [
      {
        category: "Mobile",
        items: [
          { label: "Flutter" },
          { label: "Dart" },
        ]
      },
      {
        category: "State Management & Architecture",
        items: [
          { label: "Bloc/Cubit", icon: "bloc" },
          { label: "Freezed", icon: "dart" },
          { label: "Clean Architecture", icon: "cleanarchitecture", invert: true },
        ]
      },
      {
        category: "Backend & Services",
        items: [
          { label: "Django" },
          { label: "Firebase Firestore", icon: "firebase" },
          { label: "Firebase Cloud Messaging", icon: "firebase" },
          { label: "Firebase Crashlytics", icon: "firebase" },
        ]
      },
      {
        category: "Project Management",
        items: [
          { label: "Scrum", icon: "jira" },
          { label: "Jira" },
        ]
      }
    ],
    achievements: [
      {
        metric: "Combined Downloads",
        value: "3,000+",
        change: 100
      },
      {
        metric: "Platforms Shipped",
        value: "iOS & Android",
        change: 100
      },
      {
        metric: "Attendee Engagement",
        value: "+65%",
        change: 65
      }
    ]
  },

  3: {
    id: 3,
    title: "SaladBar Meals",
    company: "Theqah",
    overview: "A food subscription app for SaladBar's smart vending network placed across companies, gyms, and corporate locations. Users browse meals, manage subscriptions, top up wallets, and trigger vending machine dispensing via QR code scanning. Integrated Moyasar for secure card and Apple Pay payments, with 500+ active users.",
    mainImage: "/portfolio/projects/saladbar.png",
    link: "https://saladbar.sa",
    features: [
      {
        title: "Moyasar Payment Integration",
        description: "Secure subscription payments via Moyasar, supporting credit cards and Apple Pay. Followed functional programming approaches for API integrations with robust error handling.",
        image: "/portfolio/projects/saladbar.png"
      },
      {
        title: "QR Code Vending Machine Dispensing",
        description: "Implemented QR code scanning and backend integration to trigger vending machine meal drops — subscribers scan to instantly collect their meal without queuing.",
        image: "/portfolio/projects/saladbar.png"
      },
      {
        title: "Customizable Meal Plans",
        description: "Users build personalised weekly subscription plans, choosing meals, portion sizes, and collection days with custom animations beyond the original Figma designs.",
        image: "/portfolio/projects/saladbar.png"
      },
      {
        title: "Flutter Flavors & Multi-environment",
        description: "Configured Flutter Flavors to manage separate development and production environments with distinct Firebase configurations and API endpoints.",
        image: "/portfolio/projects/saladbar.png"
      },
      {
        title: "Push Notifications",
        description: "Firebase Cloud Messaging delivers subscription confirmations, daily meal reminders, and wallet top-up receipts to keep users informed.",
        image: "/portfolio/projects/saladbar.png"
      }
    ],
    techStack: [
      {
        category: "Mobile",
        items: [
          { label: "Flutter" },
          { label: "Dart" },
        ]
      },
      {
        category: "State Management & Architecture",
        items: [
          { label: "Bloc/Cubit", icon: "bloc" },
          { label: "Freezed", icon: "dart" },
          { label: "Clean Architecture", icon: "cleanarchitecture", invert: true },
          { label: "GetIt", icon: "getit" },
          { label: "Flutter Flavors", icon: "flutter" },
        ]
      },
      {
        category: "Payments",
        items: [
          { label: "Moyasar" },
          { label: "Apple Pay", icon: "applepay", invert: true },
        ]
      },
      {
        category: "Backend & Services",
        items: [
          { label: "Laravel" },
          { label: "Firebase Cloud Messaging", icon: "firebase" },
          { label: "Firebase Crashlytics", icon: "firebase" },
          { label: "Firebase Analytics", icon: "firebase" },
        ]
      }
    ],
    achievements: [
      {
        metric: "Active Users",
        value: "500+",
        change: 100
      },
      {
        metric: "Payment Success Rate",
        value: "99.5%",
        change: 99
      },
      {
        metric: "Crash-free Sessions",
        value: "99.8%",
        change: 99
      }
    ]
  },

  4: {
    id: 4,
    title: "Fushati",
    company: "Theqah",
    overview: "A parental-control canteen app that lets parents remotely top up their children's school canteen wallets, set daily spending limits, restrict specific food items, and review full purchase histories. Part of the two-app portfolio at Theqah serving 500+ combined active users.",
    mainImage: "/portfolio/projects/fushati.png",
    link: "https://fushati.com/",
    features: [
      {
        title: "Wallet Recharge",
        description: "Parents top up their child's canteen card balance instantly from the app using credit/debit cards, with transaction receipts stored in-app.",
        image: "/portfolio/projects/fushati.png"
      },
      {
        title: "Daily Spending Limits",
        description: "Set per-child daily caps to prevent overspending; the canteen POS automatically declines purchases that would exceed the configured limit.",
        image: "/portfolio/projects/fushati.png"
      },
      {
        title: "Food Item Restrictions",
        description: "Parents block specific snack categories or individual items (e.g. sugary drinks, chips) from their child's purchasing options.",
        image: "/portfolio/projects/fushati.png"
      },
      {
        title: "Purchase History & Insights",
        description: "A detailed transaction log shows what was bought, when, and how much was spent, with weekly spending summaries for each child.",
        image: "/portfolio/projects/fushati.png"
      },
      {
        title: "Clean Architecture & DDD",
        description: "Built with Clean Architecture, Domain-Driven Design, Bloc/Freezed for state management, and GetIt for dependency injection — ensuring scalability and maintainability.",
        image: "/portfolio/projects/fushati.png"
      }
    ],
    techStack: [
      {
        category: "Mobile",
        items: [
          { label: "Flutter" },
          { label: "Dart" },
        ]
      },
      {
        category: "State Management & Architecture",
        items: [
          { label: "Bloc/Cubit", icon: "bloc" },
          { label: "Freezed", icon: "dart" },
          { label: "Clean Architecture", icon: "cleanarchitecture", invert: true },
          { label: "GetIt", icon: "getit" },
          { label: "Flutter Flavors", icon: "flutter" },
        ]
      },
      {
        category: "Backend & Services",
        items: [
          { label: "Firebase Firestore", icon: "firebase" },
          { label: "Firebase Cloud Messaging", icon: "firebase" },
          { label: "Firebase Crashlytics", icon: "firebase" },
          { label: "Firebase Analytics", icon: "firebase" },
        ]
      }
    ],
    achievements: [
      {
        metric: "Active Users (with SaladBar)",
        value: "500+",
        change: 100
      },
      {
        metric: "Unauthorised Purchase Control",
        value: "100%",
        change: 100
      },
      {
        metric: "Parental Satisfaction",
        value: "4.7★",
        change: 94
      }
    ]
  },

  5: {
    id: 5,
    title: "Evision",
    company: "Evision – Freelance",
    overview: "An online platform helping students explore study-abroad opportunities by checking their eligibility for international university programs. Served as project manager and co-designer, creating a user-friendly experience that simplifies the path toward international education.",
    mainImage: "/portfolio/projects/evision.png",
    link: "https://evision-edu.com",
    features: [
      {
        title: "Eligibility Checker",
        description: "Students answer a guided questionnaire about their academic background; the system instantly evaluates eligibility for programs and countries that match their profile.",
        image: "/portfolio/projects/evision.png"
      },
      {
        title: "University & Program Explorer",
        description: "Browse a curated catalogue of international universities and degree programs, filterable by country, field of study, tuition range, and language of instruction.",
        image: "/portfolio/projects/evision.png"
      },
      {
        title: "Application Guidance Workflow",
        description: "Step-by-step checklist guides students through document preparation, application deadlines, and submission steps for their chosen programs.",
        image: "/portfolio/projects/evision.png"
      },
      {
        title: "Responsive UI (Tailwind CSS)",
        description: "Built with Tailwind CSS for a consistent, accessible experience across all screen sizes, with a design focused on reducing friction in the student journey.",
        image: "/portfolio/projects/evision.png"
      }
    ],
    techStack: [
      {
        category: "Frontend",
        items: [
          { label: "Tailwind CSS", icon: "tailwindcss" },
          { label: "Blade Templates", icon: "php" },
        ]
      },
      {
        category: "Backend",
        items: [
          { label: "Laravel" },
          { label: "PHP" },
          { label: "MySQL" },
        ]
      },
      {
        category: "Project & Design",
        items: [
          { label: "Project Management", icon: "jira" },
          { label: "UI/UX Design", icon: "figma" },
          { label: "Figma" },
        ]
      }
    ],
    achievements: [
      {
        metric: "Student Onboarding Time",
        value: "-60%",
        change: 60
      },
      {
        metric: "Eligibility Check Accuracy",
        value: "95%",
        change: 95
      },
      {
        metric: "Mobile Responsiveness",
        value: "100%",
        change: 100
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
  return PROJECT_DATA[id];
}
