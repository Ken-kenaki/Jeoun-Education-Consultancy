// app/blog/page.tsx
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "why-choose-gurukul",
    title: "Why Choose Gurukul for Your Studies?",
    description:
      "Discover the benefits of studying with Gurukul Education Foundation",
    date: "May 15, 2025",
  },
  {
    id: "apply-for-march-intake",
    title: "How to Apply for March Intake",
    description:
      "Step-by-step guide to applying for the March intake at Gurukul",
    date: "July 29, 2025",
  },
  {
    id: "study-in-japan-april-2026",
    title: "How to Study in Japan - April 2025",
    description:
      "Comprehensive guide for students planning to study in Japan in April 2025",
    date: "August 15, 2025",
  },
  {
    id: "study-in-south-korea-march-intake-2026",
    title: "How to Study in South Korea - March 2026",
    description:
      "Comprehensive guide for students planning to study in South Korea in March 2026",
    date: "August 29, 2025",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#2C3C81] mb-4">Our Blog</h1>
          <p className="text-lg text-[#C73D43]">Latest Updates and Guidance</p>
        </div>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow border-l-4 border-[#C73D43] hover:border-[#2C3C81]"
            >
              <h2 className="text-xl font-semibold text-[#2C3C81] mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-3">{post.description}</p>
              <span className="text-sm text-[#C73D43]">{post.date}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
