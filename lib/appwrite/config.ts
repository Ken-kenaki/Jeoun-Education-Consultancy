export const appwriteConfig = {
  endpoint: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!,
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT!,
  databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
  apiKey: process.env.APPWRITE_API_KEY!, // Changed to PUBLIC and standardized naming
  buckets: {
    gallery: process.env.NEXT_PUBLIC_APPWRITE_GALLERY_BUCKET!,
    resources: process.env.NEXT_PUBLIC_APPWRITE_RESOURCES_BUCKET!, // Fixed typo
    news: process.env.NEXT_PUBLIC_APPWRITE_NEWS_BUCKET!, // Fixed typo
    universities: process.env.NEXT_PUBLIC_APPWRITE_UNIVERSITIES_BUCKET!, // Fixed typo
    stories: process.env.NEXT_PUBLIC_APPWRITE_STORIES_BUCKET!, // Fixed typo
    teams: process.env.NEXT_PUBLIC_APPWRITE_TEAMS_BUCKET!, // Fixed typo
  },
  collections: {
    resources: "resources",
    stories: "stories",
    gallery: "gallery",
    forms: "forms",
    newsEvents: "news-events",
    countries: "countries",
    universities: "universities",
    teams: "teams",
    visaRequirements: "study-requirements",
    statistics: "statistics",
  },
};
