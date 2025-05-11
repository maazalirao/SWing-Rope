import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: "Blog | SWingRope",
  description: "Explore the latest trends, innovations, and ideas in sustainable wind energy and environmental technology.",
};

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Evolution of Wind Energy Technologies",
      excerpt: "Exploring how wind energy solutions have evolved over the decades and where SWingRope fits in the innovation timeline.",
      date: "May 15, 2023",
      author: "Sophia Müller",
      category: "Technology",
      slug: "evolution-wind-energy-technologies"
    },
    {
      id: 2,
      title: "How Rope-Based Systems Transform Wind Energy Capture",
      excerpt: "A deep dive into the mechanics and physics behind rope-based wind energy systems and their environmental advantages.",
      date: "June 2, 2023",
      author: "Dr. Marcus Schmidt",
      category: "Innovation",
      slug: "rope-based-systems-transform-wind-energy"
    },
    {
      id: 3,
      title: "The Future of Urban Wind Energy Integration",
      excerpt: "Examining how flexible wind energy solutions like SWingRope can be integrated into urban environments and architecture.",
      date: "June 28, 2023",
      author: "Thomas Weber",
      category: "Urban Planning",
      slug: "future-urban-wind-energy-integration"
    },
    {
      id: 4,
      title: "Environmental Impact: Traditional vs. Rope-Based Wind Energy",
      excerpt: "Comparing the environmental footprint of conventional wind turbines with newer, more flexible rope-based solutions.",
      date: "July 10, 2023",
      author: "Dr. Anna Klein",
      category: "Environment",
      slug: "environmental-impact-traditional-vs-rope-based"
    },
    {
      id: 5,
      title: "Wind Energy Policy: Europe's Path to Sustainability",
      excerpt: "An overview of European energy policies and how innovative solutions like SWingRope align with sustainability goals.",
      date: "August 5, 2023",
      author: "Michael Bauer",
      category: "Policy",
      slug: "wind-energy-policy-europe-path-sustainability"
    },
    {
      id: 6,
      title: "Investing in Next-Generation Wind Energy Solutions",
      excerpt: "Understanding the investment landscape for innovative wind energy technologies and what makes SWingRope an attractive opportunity.",
      date: "September 12, 2023",
      author: "Julia Fischer",
      category: "Investment",
      slug: "investing-next-generation-wind-energy"
    }
  ];

  return (
    <>
      <Header />
      <div className="pt-28 pb-10 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Blog
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Explore the latest trends, innovations, and ideas in sustainable wind energy and environmental technology.
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <article 
                    key={post.id}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-shadow hover:shadow-lg"
                  >
                    <div className="aspect-video bg-gradient-to-tr from-emerald-100 to-teal-50 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-16 h-16 text-emerald-300">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm font-medium text-emerald-600">{post.category}</span>
                        <span className="text-sm text-gray-500">{post.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        <Link href={`/blog/${post.slug}`} className="text-gray-900 hover:text-emerald-600 transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                          By {post.author}
                        </span>
                        <Link 
                          href={`/blog/${post.slug}`}
                          className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors flex items-center gap-1"
                        >
                          Read more
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            
            <div className="md:w-1/4">
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors flex items-center gap-2">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                      Technology
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors flex items-center gap-2">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                      Innovation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors flex items-center gap-2">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                      Environment
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors flex items-center gap-2">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                      Urban Planning
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors flex items-center gap-2">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                      Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors flex items-center gap-2">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                      Investment
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="bg-emerald-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                <p className="text-gray-700 mb-4">
                  Stay updated with our latest news and articles.
                </p>
                <form>
                  <div className="mb-4">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-md transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
} 