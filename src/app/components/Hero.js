"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
  const canvasRef = useRef(null);
  
  // Animation for rope-like wind flow
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = 600;
    
    class Rope {
      constructor(startX, segments, color, width) {
        this.segments = segments;
        this.points = [];
        this.stiffness = 0.08;
        this.dampening = 0.75;
        this.color = color;
        this.width = width;
        
        // Initialize rope points
        for (let i = 0; i < segments; i++) {
          this.points.push({
            x: startX + (i * (width / segments)),
            y: height / 2 + Math.sin(i * 0.3) * 30,
            oldX: startX + (i * (width / segments)),
            oldY: height / 2 + Math.sin(i * 0.3) * 30
          });
        }
      }
      
      update() {
        // First point remains fixed at its x position
        this.points[0].y = height / 2 + Math.sin(Date.now() * 0.002) * 40;
        
        // Update all other points
        for (let i = 1; i < this.points.length; i++) {
          const p = this.points[i];
          const prevP = this.points[i - 1];
          
          // Verlet integration
          const vx = (p.x - p.oldX) * this.dampening;
          const vy = (p.y - p.oldY) * this.dampening;
          
          p.oldX = p.x;
          p.oldY = p.y;
          
          p.x += vx;
          p.y += vy;
          
          // Constraint with previous point
          const dx = p.x - prevP.x;
          const dy = p.y - prevP.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const targetDist = width / this.segments;
          const diff = (targetDist - dist) / dist;
          
          const offsetX = dx * diff * this.stiffness;
          const offsetY = dy * diff * this.stiffness;
          
          // Only move the current point, not the previous one
          p.x += offsetX;
          p.y += offsetY;
        }
      }
      
      draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);
        
        for (let i = 1; i < this.points.length - 1; i++) {
          const xc = (this.points[i].x + this.points[i + 1].x) / 2;
          const yc = (this.points[i].y + this.points[i + 1].y) / 2;
          ctx.quadraticCurveTo(this.points[i].x, this.points[i].y, xc, yc);
        }
        
        ctx.quadraticCurveTo(
          this.points[this.points.length - 1].x,
          this.points[this.points.length - 1].y,
          this.points[this.points.length - 1].x,
          this.points[this.points.length - 1].y
        );
        
        ctx.lineWidth = this.width;
        ctx.strokeStyle = this.color;
        ctx.stroke();
      }
    }
    
    const ropes = [
      new Rope(0, 18, 'rgba(52, 211, 153, 0.5)', 5),
      new Rope(0, 18, 'rgba(20, 184, 166, 0.4)', 4),
      new Rope(0, 18, 'rgba(6, 148, 162, 0.3)', 3),
      new Rope(0, 18, 'rgba(56, 178, 172, 0.2)', 2)
    ];
    
    function animate() {
      ctx.clearRect(0, 0, width, height);
      
      ropes.forEach(rope => {
        rope.update();
        rope.draw(ctx);
      });
      
      requestAnimationFrame(animate);
    }
    
    animate();
    
    function handleResize() {
      canvas.width = window.innerWidth;
    }
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900 via-teal-800 to-emerald-800 opacity-90 z-0"></div>
      
      {/* Abstract pattern background */}
      <div className="absolute inset-0 opacity-10 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" 
          alt="Abstract Pattern"
          fill
          className="object-cover"
        />
      </div>
      
      {/* Animated rope canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 right-0 z-10 opacity-60" 
        width="1000"
        height="600"
      />
      
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <span className="inline-block px-3 py-1 bg-emerald-400/20 text-emerald-100 backdrop-blur-sm rounded-full text-sm font-medium mb-5 border border-emerald-400/20">
            Innovative Wind Energy
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            The Future of <span className="bg-gradient-to-r from-emerald-300 to-teal-200 bg-clip-text text-transparent">Wind Energy</span> is Here
          </h1>
          <p className="text-lg text-emerald-100 mb-8">
            SWingRope harnesses the power of wind with our revolutionary rope-based technology. 
            Elegant, efficient, and environmentally friendly.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="/contact" 
              className="bg-emerald-500 hover:bg-emerald-400 text-emerald-900 font-medium px-8 py-3 rounded-md shadow-lg hover:shadow-xl transition-all"
            >
              Become a Pilot User
            </a>
            <a 
              href="#learn-more" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-3 rounded-md font-medium transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
        
        <div className="lg:w-1/2 lg:pl-12">
          <div className="relative bg-gradient-to-br from-emerald-900/50 to-teal-800/50 p-1 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/10 overflow-hidden group">
            <div className="aspect-video rounded-xl overflow-hidden relative">
              <Image 
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Wind Energy Concept"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                <div className="bg-emerald-500 rounded-full p-4 shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm">
              Watch: SWingRope Technology in Action
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 