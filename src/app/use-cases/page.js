import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

export const metadata = {
  title: 'Use Cases | Wind Energy Technology',
  description: 'Explore how our revolutionary rope-based wind energy technology can be applied across various sectors and environments.',
};

export default function UseCases() {
  const useCases = [
    {
      id: 'urban',
      title: 'Urban Settings',
      description: 'Our compact design allows for installation in urban environments where traditional wind turbines cannot fit. Deploy on rooftops, alongside buildings, or in urban parks to generate clean energy within city limits.',
      benefits: [
        'Low visual impact and noise',
        'Works in turbulent urban wind conditions',
        'Retrofittable to existing structures',
        'Distributed energy generation'
      ],
      image: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80'
    },
    {
      id: 'coastal',
      title: 'Coastal Regions',
      description: "Take advantage of strong and consistent coastal winds with installations that have minimal environmental impact on sensitive coastal ecosystems and don't obstruct ocean views.",
      benefits: [
        'Salt-water resistant components',
        'Functions in variable wind speeds',
        'Lower height reduces visual impact on coastlines',
        'Can be integrated with existing coastal infrastructure'
      ],
      image: 'https://images.unsplash.com/photo-1566024287286-457247b70310?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
    },
    {
      id: 'rural',
      title: 'Rural & Agricultural',
      description: 'Provide renewable energy to farms and rural communities with installations that require minimal land use and can coexist with agricultural activities.',
      benefits: [
        'Distributed power generation for remote areas',
        'Minimal impact on farmable land',
        'Can power irrigation systems directly',
        'Low maintenance requirements'
      ],
      image: 'https://images.unsplash.com/photo-1472145246862-b24cf25c4a36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
    },
    {
      id: 'offgrid',
      title: 'Off-Grid & Remote Locations',
      description: "Bring renewable energy to remote or off-grid locations with a solution that's easy to transport, quick to deploy, and requires minimal maintenance.",
      benefits: [
        'Compact for easy transportation',
        'Quick installation with minimal equipment',
        'Pairs well with solar and battery storage',
        'Resilient in extreme weather conditions'
      ],
      image: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80'
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-b from-emerald-900 to-teal-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 bg-emerald-400/20 text-emerald-100 backdrop-blur-sm rounded-full text-sm font-medium mb-5 border border-emerald-400/20">
                Versatile Applications
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Use Cases for Our Wind Technology
              </h1>
              <p className="text-lg text-emerald-100 mb-8">
                Discover how our innovative rope-based wind energy solution can be deployed in a variety of environments, from urban settings to remote locations.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
              {useCases.map((useCase, index) => (
                <div 
                  key={useCase.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all hover:shadow-xl flex flex-col"
                >
                  <div className="h-64 relative overflow-hidden">
                    <Image 
                      src={useCase.image}
                      alt={useCase.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h2 className="text-2xl font-bold">{useCase.title}</h2>
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <p className="text-gray-700 mb-6">{useCase.description}</p>
                    <div>
                      <h3 className="text-lg font-semibold text-emerald-700 mb-3">Key Benefits:</h3>
                      <ul className="space-y-2">
                        {useCase.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-emerald-500 mr-2">✓</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <a 
                      href="#contact"
                      className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-500"
                    >
                      Learn more about this use case
                      <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-emerald-700 text-white" id="contact">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Interested in a Specific Use Case?</h2>
            <p className="text-emerald-100 mb-8 max-w-3xl mx-auto">
              Our team can provide detailed information about how our technology can be applied to your specific needs. Contact us to discuss your project requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/contact" 
                className="bg-white text-emerald-700 hover:bg-emerald-50 px-6 py-3 rounded-md font-medium shadow-lg"
              >
                Contact Our Team
              </a>
              <a 
                href="/technology" 
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-md font-medium shadow-lg"
              >
                Learn About Our Technology
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 