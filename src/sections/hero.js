import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroCopyRef = useRef(null);
  const boxSetCopyRef = useRef(null);
  const boxSetRow1 = useRef(null);
  const boxSetRow2 = useRef(null);
  const boxSetRow3 = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      ScrollTrigger.create({
        trigger: boxSetCopyRef.current,
        start: "-20% 50%",
        end: "20% 50%",
        // markers: true,
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(boxSetCopyRef.current, { duration: 0, opacity: progress });
        },
      });
    });

    mm.add("(max-width: 768px)", () => {});

    const heroCopy = heroCopyRef.current;
    gsap.fromTo(heroCopy, { scale: 0, transformOrigin: "50% 70%" }, { scale: 1, delay: 1, duration: 1, ease: "power2.out" });

    const tl = gsap.timeline({ repeat: -1 });

    tl.to(boxSetRow1.current, {
      left: -375,
      duration: 6,
      ease: "linear",
    });

    const t2 = gsap.timeline({ repeat: -1 });

    t2.to(boxSetRow2.current, {
      left: 1083,
      duration: 5,
      ease: "linear",
    });

    const t3 = gsap.timeline({ repeat: -1 });

    t3.to(boxSetRow3.current, {
      left: -97,
      duration: 7,
      ease: "linear",
    });

    return () => {
      ScrollTrigger.killAll();
      console.log("killing all");
      gsap.matchMediaRefresh();
      mm.revert();
      tl.kill(); // Clean up the animation when the component unmounts
      t2.kill(); // Clean up the animation when the component unmounts
      t3.kill(); // Clean up the animation when the component unmounts
    };
  }, []);

  return (
    <div>
      <div className="relative w-full h-[95vh]">
        <video autoPlay muted loop className="object-cover w-full h-full">
          <source src="../videos/header.mp4" type="video/mp4" />
          {/* Add additional <source> elements for different video formats (e.g., WebM, Ogg) */}
          {/* Fallback content for browsers that don't support the <video> element */}
          <img src="../images/heroImage.jpg" alt="Earth" className="object-cover w-full h-full" />
        </video>
        <div className="absolute inset-0 flex items-center justify-center">
          <div ref={heroCopyRef} className="text-center">
            <h2 className="text-white text-[7.5rem] leading-[7.5rem] font-bold mb-4 bison">The global creative</h2>
            <h2 className="text-blue-500 text-[7.5rem] leading-[7.5rem] font-bold bison">Agency of NBCUniversal</h2>
          </div>
        </div>
      </div>
      <div className="relative w-full h-auto">
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div ref={boxSetRow1} class="boxSetRow1"></div>
          <div ref={boxSetRow2} class="boxSetRow2"></div>
          <div ref={boxSetRow3} class="boxSetRow3"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div ref={boxSetCopyRef} className="text-center opacity-0">
            <h2 className="text-white text-[7.5rem] leading-[7.5rem] bison font-bold mb-4">NBCUniversal’s in-house</h2>
            <h2 className="text-[#FEBB4E] text-[7.5rem] leading-[7.5rem] bison font-bold mb-4">full-service brand agency </h2>
            <h2 className="text-[#FEBB4E] text-[7.5rem] leading-[7.5rem] bison font-bold">for global marketers. </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
