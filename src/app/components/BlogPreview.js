import Link from 'next/link';
import Image from 'next/image';

export default function BlogPreview() {
  const blogPosts = [
    {
      id: 1,
      title: "The Evolution of Wind Energy Technologies",
      excerpt: "Exploring how wind energy solutions have evolved over the decades and where SWingRope fits in the innovation timeline.",
      date: "May 15, 2023",
      author: "Sophia Müller",
      category: "Technology",
      slug: "evolution-wind-energy-technologies",
      image: "https://images.unsplash.com/photo-1448932252197-d19750584e56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
    },
    {
      id: 2,
      title: "How Rope-Based Systems Transform Wind Energy Capture",
      excerpt: "A deep dive into the mechanics and physics behind rope-based wind energy systems and their environmental advantages.",
      date: "June 2, 2023",
      author: "Dr. Marcus Schmidt",
      category: "Innovation",
      slug: "rope-based-systems-transform-wind-energy",
      image: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
    },
    {
      id: 3,
      title: "The Future of Urban Wind Energy Integration",
      excerpt: "Examining how flexible wind energy solutions like SWingRope can be integrated into urban environments and architecture.",
      date: "June 28, 2023",
      author: "Thomas Weber",
      category: "Urban Planning",
      slug: "future-urban-wind-energy-integration",
      image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-5">
            Latest Insights
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            From Our Blog
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Explore the latest trends, innovations, and ideas in sustainable wind energy and environmental technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1 group"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image 
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center bg-gradient-to-b from-black/70 via-black/40 to-transparent text-white">
                  <span className="px-2 py-1 bg-emerald-500/80 rounded text-xs font-medium">{post.category}</span>
                  <span className="text-xs font-medium">{post.date}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-600 transition-colors">
                  <Link href={`/blog/${post.slug}`} className="text-gray-900 hover:text-emerald-600 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-5 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-emerald-500">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" clipRule="evenodd" />
                    </svg>
                    {post.author}
                  </span>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-emerald-600 font-medium text-sm hover:text-emerald-700 transition-colors flex items-center gap-1"
                  >
                    Read more
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-md shadow-sm text-emerald-600 font-medium hover:text-emerald-700 hover:border-emerald-600 transition-colors"
          >
            View all articles
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 