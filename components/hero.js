"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const headingRef = useRef(null);
  const statsRef = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {

    gsap.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });

  
    gsap.from(statsRef.current, {
      y: 40,
      opacity: 0,
      stagger: 0.2,
      delay: 0.5,
      duration: 1,
      ease: "power2.out",
    });

 
    gsap.to(imageRef.current, {
      y: -200,
      scale: 1.2,
      ease: "none",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center bg-black text-white overflow-hidden">

      
      <h1
        ref={headingRef}
        className="text-5xl md:text-7xl tracking-[0.6em] font-light uppercase text-center"
      >
        W E L C O M E
      </h1>

     
      <div className="flex gap-12 mt-12 text-center">
        {[
          { value: "85%", label: "Customer Growth" },
          { value: "120%", label: "Engagement Rate" },
          { value: "95%", label: "Satisfaction" },
        ].map((item, index) => (
          <div
            key={index}
            ref={(el) => (statsRef.current[index] = el)}
          >
            <h2 className="text-3xl font-bold">{item.value}</h2>
            <p className="text-gray-400 mt-2">{item.label}</p>
          </div>
        ))}
      </div>

    
      <div className="absolute bottom-0">
        <img
          ref={imageRef}
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
          alt="Car"
          className="w-[600px] md:w-[800px] object-contain"
        />
      </div>
    </section>
  );
}