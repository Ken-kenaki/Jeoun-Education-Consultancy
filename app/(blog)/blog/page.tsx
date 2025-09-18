// app/blog/page.tsx
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
}

const blogPosts: BlogPost[] = [

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
