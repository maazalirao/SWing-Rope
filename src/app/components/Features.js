import Image from 'next/image';

export default function Features() {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-emerald-500">
          <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.75 6.75 0 1113.5 0v4.661c0 .326.277.585.6.544.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
          <path fillRule="evenodd" d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Innovative Technology',
      description: 'Our patented rope-based design captures wind energy with unprecedented efficiency, allowing for installation in locations where traditional turbines are impractical.',
      image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-emerald-500">
          <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Environmentally Friendly',
      description: 'With minimal visual impact and lower material usage than conventional turbines, our solution preserves natural landscapes while generating clean energy.',
      image: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-emerald-500">
          <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Cost Effective',
      description: 'Lower installation and maintenance costs than traditional wind turbines, resulting in faster ROI and making renewable energy more accessible.',
      image: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-emerald-500">
          <path fillRule="evenodd" d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Versatile Deployment',
      description: 'Adaptable to various environments, from urban settings to remote locations, with minimal site preparation required.',
      image: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80'
    },
  ];

  return (
    <section id="learn-more" className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
            Our Advantages
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Revolutionizing Wind Energy
          </h2>
          <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-600">
            Our innovative rope-based technology transforms how we harness wind power, 
            making clean energy more accessible, efficient, and environmentally friendly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1 group"
            >
              <div className="h-40 sm:h-48 relative overflow-hidden">
                <Image 
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{feature.title}</h3>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-emerald-50 p-2 rounded-lg">{feature.icon}</div>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 md:mt-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl overflow-hidden shadow-xl">
          <div className="p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center relative">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <Image 
                src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
                alt="Wind Pattern" 
                fill
                className="object-cover"
              />
            </div>
            
            <div className="md:w-1/2 mb-8 md:mb-0 relative z-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
                Impressive Energy Production Metrics
              </h3>
              <p className="text-emerald-50 mb-6">
                Our revolutionary design delivers exceptional performance metrics 
                compared to traditional wind energy solutions.
              </p>
            </div>
            
            <div className="w-full md:w-1/2 md:pl-12 relative z-10">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-5 rounded-lg text-center border border-white/20 hover:bg-white/20 transition-colors">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">30%</div>
                  <p className="text-emerald-50 text-sm">Higher Energy Output</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-5 rounded-lg text-center border border-white/20 hover:bg-white/20 transition-colors">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">50%</div>
                  <p className="text-emerald-50 text-sm">Lower Material Usage</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-5 rounded-lg text-center border border-white/20 hover:bg-white/20 transition-colors">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">40%</div>
                  <p className="text-emerald-50 text-sm">Reduced Installation Cost</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-5 rounded-lg text-center border border-white/20 hover:bg-white/20 transition-colors">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">25%</div>
                  <p className="text-emerald-50 text-sm">Less Maintenance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 