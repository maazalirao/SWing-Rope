import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: "Technology | SWingRope",
  description: "Explore the innovative rope-based wind energy technology behind SWingRope's revolutionary approach to clean energy generation.",
};

export default function TechnologyPage() {
  return (
    <>
      <Header />
      
      <div className="pt-28 pb-10 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Technology
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Harnessing wind energy through innovative rope-based systems that redefine efficiency and adaptability.
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <div className="aspect-video bg-gradient-to-tr from-emerald-100 to-teal-50 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-20 h-20 text-emerald-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">How It Works</h2>
              <p className="text-lg text-gray-700 mb-6">
                SWingRope utilizes a revolutionary approach to capture wind energy using tensioned rope systems. Unlike conventional wind 
                turbines with rigid blades, our technology employs flexible, lightweight ropes that respond dynamically to wind forces.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The system consists of specially designed rope elements that oscillate in the wind, creating mechanical energy that is then 
                converted into electricity through our proprietary conversion mechanism. This approach allows for energy capture from a wider 
                range of wind speeds and directions.
              </p>
              <p className="text-lg text-gray-700">
                By eliminating the need for massive turbine structures, SWingRope offers a less invasive, more adaptable solution that can be 
                deployed in various environments from urban settings to remote locations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Technical Advantages</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Our rope-based system offers several significant technical advantages over conventional wind energy solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-emerald-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Enhanced Energy Efficiency</h3>
              <p className="text-gray-600 mb-6">
                Our technology can capture energy from a wider range of wind speeds (2-40 m/s) compared to conventional turbines (3-25 m/s), 
                resulting in up to 30% higher annual energy output in varied wind conditions.
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span>Conventional Turbines</span>
                <span>SWingRope</span>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-emerald-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Lower Material Usage</h3>
              <p className="text-gray-600 mb-6">
                SWingRope systems use 50% less raw materials than conventional wind turbines, significantly reducing the environmental 
                footprint and decreasing manufacturing and transportation costs.
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: '50%' }}></div>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span>SWingRope</span>
                <span>Conventional Turbines</span>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-emerald-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Adaptable Installation</h3>
              <p className="text-gray-600 mb-6">
                The flexibility of our rope-based system allows for installation in a wider variety of locations, including urban environments, 
                along highways, and in areas with variable terrain that would be unsuitable for conventional turbines.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Urban integration capability</li>
                <li>Highway corridor deployment</li>
                <li>Building-mounted configurations</li>
                <li>Rugged terrain adaptation</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-emerald-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Easier Maintenance</h3>
              <p className="text-gray-600 mb-6">
                Our modular design allows for simpler maintenance procedures with individual components that can be replaced without specialized 
                equipment, reducing downtime and maintenance costs by approximately 25%.
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-emerald-600 font-medium">Maintenance Cost Reduction:</span>
                <div className="flex">
                  {[1, 2, 3, 4].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-emerald-500">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-300">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Technical Specifications</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              SWingRope systems are available in different configurations to suit various installation environments and energy needs.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-emerald-50">
                  <th className="border border-gray-300 px-6 py-3 text-left">Specification</th>
                  <th className="border border-gray-300 px-6 py-3 text-left">SWingRope Compact</th>
                  <th className="border border-gray-300 px-6 py-3 text-left">SWingRope Standard</th>
                  <th className="border border-gray-300 px-6 py-3 text-left">SWingRope Extended</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-6 py-3 font-medium">Power Output</td>
                  <td className="border border-gray-300 px-6 py-3">5-10 kW</td>
                  <td className="border border-gray-300 px-6 py-3">20-50 kW</td>
                  <td className="border border-gray-300 px-6 py-3">75-150 kW</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-6 py-3 font-medium">Rope Length</td>
                  <td className="border border-gray-300 px-6 py-3">20-30 m</td>
                  <td className="border border-gray-300 px-6 py-3">50-80 m</td>
                  <td className="border border-gray-300 px-6 py-3">100-200 m</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-6 py-3 font-medium">Installation Footprint</td>
                  <td className="border border-gray-300 px-6 py-3">15 m²</td>
                  <td className="border border-gray-300 px-6 py-3">40 m²</td>
                  <td className="border border-gray-300 px-6 py-3">100 m²</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-6 py-3 font-medium">Operational Wind Speed</td>
                  <td className="border border-gray-300 px-6 py-3">2-35 m/s</td>
                  <td className="border border-gray-300 px-6 py-3">2-38 m/s</td>
                  <td className="border border-gray-300 px-6 py-3">2-40 m/s</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-6 py-3 font-medium">Optimal Efficiency Wind Speed</td>
                  <td className="border border-gray-300 px-6 py-3">8-15 m/s</td>
                  <td className="border border-gray-300 px-6 py-3">10-20 m/s</td>
                  <td className="border border-gray-300 px-6 py-3">12-25 m/s</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-6 py-3 font-medium">Installation Time</td>
                  <td className="border border-gray-300 px-6 py-3">1-2 days</td>
                  <td className="border border-gray-300 px-6 py-3">3-5 days</td>
                  <td className="border border-gray-300 px-6 py-3">7-10 days</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-6 py-3 font-medium">Ideal Application</td>
                  <td className="border border-gray-300 px-6 py-3">Residential, Small Business</td>
                  <td className="border border-gray-300 px-6 py-3">Commercial, Community</td>
                  <td className="border border-gray-300 px-6 py-3">Industrial, Utility Scale</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience the Future of Wind Energy?</h2>
            <p className="max-w-3xl mx-auto text-lg text-emerald-100 mb-8">
              Contact us to learn more about our technology or to discuss potential pilot installations.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-md font-medium hover:bg-emerald-50 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
} 