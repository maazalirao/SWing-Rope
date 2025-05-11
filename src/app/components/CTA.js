import Image from 'next/image';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-teal-800 z-10"></div>
      <div className="absolute inset-0 opacity-20 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
          alt="Wind Energy Background"
          fill
          className="object-cover"
        />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 w-full h-12 bg-gradient-to-r from-emerald-500/30 via-teal-400/20 to-emerald-500/30 blur-2xl z-10 transform -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="lg:w-2/3 mb-10 lg:mb-0">
            <span className="inline-block px-3 py-1 bg-emerald-400/20 text-emerald-100 backdrop-blur-sm rounded-full text-sm font-medium mb-5 border border-emerald-400/20">
              Join the Movement
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join the Wind Energy Revolution?
            </h2>
            <p className="text-emerald-100 text-lg max-w-3xl">
              Whether you're interested in becoming a pilot user, exploring investment opportunities, or forming a partnership, 
              we're excited to collaborate with forward-thinking individuals and organizations.
            </p>
          </div>
          
          <div className="lg:w-1/3 space-y-4">
            <a 
              href="/contact" 
              className="w-full block bg-white hover:bg-gray-50 text-emerald-700 font-medium py-3 px-6 rounded-md shadow-lg transition-all hover:shadow-xl text-center group"
            >
              <span className="flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 transition-transform group-hover:translate-x-1">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
                Become a Pilot User
              </span>
            </a>
            <a 
              href="/investors" 
              className="w-full block bg-emerald-700 hover:bg-emerald-800 text-white font-medium py-3 px-6 rounded-md shadow-lg transition-all hover:shadow-xl text-center border border-emerald-600 group"
            >
              <span className="flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 transition-transform group-hover:translate-x-1">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6 5.75A.75.75 0 016.75 5h6.5a.75.75 0 010 1.5h-2.127c.4.5.683 1.096.807 1.75h1.32a.75.75 0 010 1.5h-1.32a4.003 4.003 0 01-3.404 3.216l1.754 1.754a.75.75 0 01-1.06 1.06l-3-3a.75.75 0 01.53-1.28H8c1.12 0 2.067-.736 2.386-1.75H6.75a.75.75 0 010-1.5h3.636A2.501 2.501 0 008 6.5H6.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                </svg>
                Investor Information
              </span>
            </a>
            <a 
              href="/partnerships" 
              className="w-full block bg-transparent text-white font-medium py-3 px-6 rounded-md shadow-lg transition-all hover:shadow-xl text-center border border-white/30 hover:bg-white/10 group"
            >
              <span className="flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 transition-transform group-hover:translate-x-1">
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
                </svg>
                Partnership Opportunities
              </span>
            </a>
          </div>
        </div>
        
        <div className="mt-20 pt-16 border-t border-emerald-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-white text-4xl font-bold mb-2">100+</div>
              <p className="text-emerald-100">Potential Installation Sites</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-white text-4xl font-bold mb-2">30%</div>
              <p className="text-emerald-100">Higher Energy Output</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-white text-4xl font-bold mb-2">5</div>
              <p className="text-emerald-100">Pilot Projects Launching Soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 