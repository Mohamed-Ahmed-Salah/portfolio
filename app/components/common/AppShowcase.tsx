'use client'

// Stacked, tilted app icons that straighten and fan out on hover.
// Tailwind needs literal class names, so per-icon transforms are spelled out here.
const APPS = [
  {
    name: "Marcom Attend",
    tagline: "Attendance & HR",
    icon: "/portfolio/apps/marcom-attend.jpg",
    link: "https://apps.apple.com/sa/app/marcom-attend/id6756225584",
    transform: "sm:-rotate-6 sm:translate-x-2 sm:group-hover:translate-x-0 z-10",
  },
  {
    name: "Esri MENA UC",
    tagline: "Conference app",
    icon: "/portfolio/apps/esri.jpg",
    link: "https://apps.apple.com/sa/app/esri-mena-user-conference-2026/id6754825295",
    transform: "sm:rotate-3 sm:group-hover:translate-x-2 z-20",
  },
  {
    name: "Clean Life",
    tagline: "Home services booking",
    icon: "/portfolio/apps/cleanlife.jpg",
    link: "https://apps.apple.com/sa/app/id6762178871",
    transform: "sm:-rotate-6 sm:-translate-x-4 sm:group-hover:translate-x-4 z-30",
  },
  {
    name: "Oriflame SA",
    tagline: "Beauty shopping",
    icon: "/portfolio/apps/oriflame.jpg",
    link: "https://apps.apple.com/sa/app/oriflame-sa/id6800407415",
    transform: "sm:rotate-6 sm:-translate-x-8 sm:group-hover:translate-x-6 z-40",
  },
  {
    name: "Fushati",
    tagline: "School canteen wallet",
    icon: "/portfolio/apps/fushati.png",
    link: "https://fushati.com/",
    transform: "sm:-rotate-3 sm:-translate-x-12 sm:group-hover:translate-x-8 z-50 bg-white p-1",
  },
  {
    name: "SaladBar",
    tagline: "Meal subscriptions",
    icon: "/portfolio/apps/saladbar.png",
    link: "https://saladbar.sa",
    transform: "sm:rotate-3 sm:-translate-x-16 sm:group-hover:translate-x-10 z-[55]",
  },
]

export default function AppShowcase({ label = "I build mobile apps" }: { label?: string }) {
  return (
    <span className="inline-flex relative group items-start flex-col sm:flex-row sm:items-center gap-2">
      {label}
      <span className="inline-flex relative gap-2 sm:gap-0">
        {APPS.map((app) => (
          <a
            key={app.name}
            className="relative group/app"
            href={app.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={app.icon}
              alt={app.name}
              className={`w-10 h-10 object-cover rounded-xl cursor-pointer border border-gray-200 dark:border-white/20 shadow-xs relative transition-all duration-200 sm:group-hover:rotate-0 ${app.transform}`}
            />
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 z-[60] bg-black/80 text-white px-2.5 py-1 rounded-xl text-xs whitespace-nowrap opacity-0 sm:group-hover/app:opacity-100 transition-opacity pointer-events-none hidden sm:block">
              {app.name} - {app.tagline}
            </span>
          </a>
        ))}
      </span>
    </span>
  )
}
