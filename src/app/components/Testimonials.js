"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      quote: "SWing Rope's innovative approach to wind energy is exactly what the renewable sector needs. Their rope-based technology offers significant advantages in efficiency and deployment flexibility.",
      author: "Dr. Anna Schmidt",
      title: "Professor of Renewable Energy, Berlin Technical University",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    {
      quote: "As an early investor in green technologies, I've seen many innovations come and go. SWing Rope's solution stands out for its elegant design, lower material costs, and impressive performance metrics.",
      author: "Martin Weber",
      title: "Green Energy Investor",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    {
      quote: "The adaptability of SWing Rope's technology to various environments makes it a game-changer for communities looking to transition to sustainable energy solutions.",
      author: "Sophia Müller",
      title: "Environmental Policy Consultant",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    },
  ];
  
  const partners = [
    {
      name: "GreenTech Innovation",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
    },
    {
      name: "EcoVentures",
      logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "RenewableFuture",
      logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      name: "WindForward",
      logo: "https://images.unsplash.com/photo-1570126646281-5ec88111777f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2041&q=80"
    },
  ];
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    setAutoplay(false);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    setAutoplay(false);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 8000);
    
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 opacity-80"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80')] bg-fixed opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Experts
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Hear what industry professionals and early supporters are saying about our revolutionary wind energy solution.
          </p>
        </div>
        
        {/* Mobile gallery */}
        <div className="flex md:hidden gap-4 overflow-x-auto pb-4 mb-10 snap-x">
          <div className="snap-center flex-shrink-0 relative h-48 w-72 rounded-xl overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Wind energy project"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-lg font-semibold">Innovative Projects</h3>
              <p className="text-xs text-white/80">Real-world applications</p>
            </div>
          </div>
          <div className="snap-center flex-shrink-0 relative h-48 w-72 rounded-xl overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
              alt="Green energy"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-lg font-semibold">Environmental Impact</h3>
              <p className="text-xs text-white/80">Sustainable solutions</p>
            </div>
          </div>
          <div className="snap-center flex-shrink-0 relative h-48 w-72 rounded-xl overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Wind power"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-lg font-semibold">Wind Technology</h3>
              <p className="text-xs text-white/80">Next-generation solutions</p>
            </div>
          </div>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="transition-transform duration-1000 ease-in-out flex"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-xl p-8 md:p-10 shadow-xl text-center relative overflow-hidden border border-gray-100">
                    <div className="absolute top-0 right-0 w-32 h-32 -mt-8 -mr-8 bg-emerald-50 rounded-full opacity-30"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 -mb-8 -ml-8 bg-teal-50 rounded-full opacity-30"></div>
                    
                    <div className="mx-auto w-24 h-24 mb-8 relative">
                      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-full"></div>
                      <div className="absolute inset-1 bg-white rounded-full overflow-hidden">
                        <Image 
                          src={testimonial.image} 
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    
                    <blockquote className="relative">
                      <svg 
                        className="absolute -top-6 -left-6 text-emerald-500 opacity-20 w-12 h-12 transform -scale-x-100"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      
                      <p className="text-xl md:text-2xl font-medium text-gray-800 mb-8">
                        "{testimonial.quote}"
                      </p>
                      
                      <div className="flex items-center justify-center">
                        <div className="text-left">
                          <p className="font-bold text-gray-900">{testimonial.author}</p>
                          <p className="text-sm text-emerald-600">{testimonial.title}</p>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setAutoplay(false);
                }} 
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-emerald-600 w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Mobile navigation buttons */}
          <div className="flex md:hidden justify-between mt-4">
            <button 
              onClick={prevTestimonial}
              className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 hidden md:flex items-center justify-center group"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-700 group-hover:text-emerald-600 transition-colors">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 hidden md:flex items-center justify-center group"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-700 group-hover:text-emerald-600 transition-colors">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
        
        <div className="mt-20 text-center">
          <h3 className="text-xl font-semibold mb-10">Trusted By Leading Organizations</h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {/* Partner logos with custom background containers */}
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="relative w-36 h-20 md:w-40 md:h-24 grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100 bg-white p-4 rounded-lg shadow-sm hover:shadow-md"
              >
                <div className="relative w-full h-full">
                  <Image 
                    src={partner.logo} 
                    alt={partner.name} 
                    fill 
                    className="object-contain"
                  />
                </div>
                <div className="absolute inset-0 flex items-end justify-center pb-1">
                  <span className="text-xs text-gray-500 font-medium">{partner.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 