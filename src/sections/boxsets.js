import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Boxsets = () => {
  const scrollContainer = useRef(null);
  const boxRef1_1 = useRef(null);
  const boxRef1_2 = useRef(null);
  const boxRef1_3 = useRef(null);
  const boxRef1_4 = useRef(null);
  const entertainmentRef = useRef(null);
  const newsRef = useRef(null);
  const sportRef = useRef(null);
  const boxRef2_1 = useRef(null);
  const boxRef2_2 = useRef(null);
  const boxRef2_3 = useRef(null);
  const boxRef2_4 = useRef(null);
  const boxRef3_1 = useRef(null);
  const boxRef3_2 = useRef(null);
  const boxRef3_3 = useRef(null);
  const boxRef3_4 = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollContainer.current,
          start: "top top",
          invalidateOnRefresh: true,
          end: "+=1000",
          scrub: 1,
          pin: true,
          //   markers: true,
        },
      });

      tl.to(entertainmentRef.current, { opacity: 1, top: 0, duration: 0.25 });
      tl.to(boxRef1_1.current, { opacity: 1, top: 0, duration: 0.25 });
      tl.to(boxRef1_2.current, { opacity: 1, top: 0, duration: 0.25 });
      tl.to(boxRef1_3.current, { opacity: 1, top: 0, duration: 0.25 });
      tl.to(boxRef1_4.current, { opacity: 1, top: 0, duration: 0.25 });
      tl.to([entertainmentRef.current, boxRef1_1.current, boxRef1_2.current, boxRef1_3.current, boxRef1_4.current], { opacity: 0, top: 0, duration: 0.25 });
      tl.to([entertainmentRef.current, boxRef1_1.current, boxRef1_2.current, boxRef1_3.current, boxRef1_4.current], { display: "none" });
      tl.to([newsRef.current, boxRef2_1.current, boxRef2_2.current, boxRef2_3.current, boxRef2_4.current], { display: "block" });
      tl.to(newsRef.current, { opacity: 1, top: 0, duration: 0.25 });
      tl.to(boxRef2_1.current, { opacity: 1, top: 0, duration: 0.25 });
      tl.to(boxRef2_2.current, { opacity: 1, top: 0, duration: 0.25 });
      tl.to(boxRef2_3.current, { opacity: 1, top: 0, duration: 0.25 });
      tl.to(boxRef2_4.current, { opacity: 1, top: 0, duration: 0.25 });
      tl.to([newsRef.current, boxRef2_1.current, boxRef2_2.current, boxRef2_3.current, boxRef2_4.current], { display: "none" });
      tl.to([sportRef.current, boxRef3_1.current, boxRef3_2.current, boxRef3_3.current, boxRef3_4.current], { display: "block" });
      tl.to(sportRef.current, { opacity: 1, top: 0, duration: 0.25 });
      tl.to(boxRef3_1.current, { opacity: 1, top: 0, duration: 0.25 });
      tl.to(boxRef3_2.current, { opacity: 1, top: 0, duration: 0.25 });
      tl.to(boxRef3_3.current, { opacity: 1, top: 0, duration: 0.25 });
      tl.to(boxRef3_4.current, { opacity: 1, top: 0, duration: 0.25 });
    });

    mm.add("(max-width: 768px)", () => {
      // Media query specific code
    });

    return () => {
      ScrollTrigger.killAll();
      console.log("killing all");
      gsap.matchMediaRefresh();
      mm.revert();
    };
  }, []);

  return (
    <>
      <div ref={scrollContainer} className="relative w-full h-[100vh]">
        <div className="absolute inset-0 flex flex-col items-top justify-center w-full">
          <div className="text-center pb-20">
            <h2 className="text-white text-[5.25rem] leading-[5.25rem] bison font-bold mb-4">across</h2>
            <h3 ref={entertainmentRef} className="text-[#6EA5CC] text-[7.5rem] leading-[7.5rem] bison font-bold mb-4 opacity-0 relative top-[50px]">
              entertainment
            </h3>
            <h3 ref={newsRef} className="text-[#E8B561] text-[7.5rem] leading-[7.5rem] bison font-bold mb-4 opacity-0 relative top-[50px] hidden">
              news
            </h3>
            <h3 ref={sportRef} className="text-[#9984BE] text-[7.5rem] leading-[7.5rem] bison font-bold mb-4 opacity-0 relative top-[50px] hidden">
              sport
            </h3>
          </div>
          <div className="flex flex-row justify-center items-center w-[1000px] mx-auto">
            <img ref={boxRef1_1} src="../images/boxSetBig1_1.jpg" alt="NBC Box sets" className=" mx-auto pb-10 opacity-0 top-[50px] relative" />
            <img ref={boxRef1_2} src="../images/boxSetBig1_2.jpg" alt="NBC Box sets" className=" mx-auto pb-10 opacity-0 top-[50px] relative" />
            <img ref={boxRef1_3} src="../images/boxSetBig1_3.jpg" alt="NBC Box sets" className=" mx-auto pb-10 opacity-0 top-[50px] relative" />
            <img ref={boxRef1_4} src="../images/boxSetBig1_4.jpg" alt="NBC Box sets" className=" mx-auto pb-10 opacity-0 top-[50px] relative" />
            <img ref={boxRef2_1} src="../images/boxSetBig2_1.jpg" alt="NBC Box sets" className=" mx-auto pb-10 opacity-0 top-[50px] relative hidden" />
            <img ref={boxRef2_2} src="../images/boxSetBig2_2.jpg" alt="NBC Box sets" className=" mx-auto pb-10 opacity-0 top-[50px] relative hidden" />
            <img ref={boxRef2_3} src="../images/boxSetBig2_3.jpg" alt="NBC Box sets" className=" mx-auto pb-10 opacity-0 top-[50px] relative hidden" />
            <img ref={boxRef2_4} src="../images/boxSetBig2_4.jpg" alt="NBC Box sets" className=" mx-auto pb-10 opacity-0 top-[50px] relative hidden" />
            <img ref={boxRef3_1} src="../images/boxSetBig3_1.jpg" alt="NBC Box sets" className=" mx-auto pb-10 opacity-0 top-[50px] relative hidden" />
            <img ref={boxRef3_2} src="../images/boxSetBig3_2.jpg" alt="NBC Box sets" className=" mx-auto pb-10 opacity-0 top-[50px] relative hidden" />
            <img ref={boxRef3_3} src="../images/boxSetBig3_3.jpg" alt="NBC Box sets" className=" mx-auto pb-10 opacity-0 top-[50px] relative hidden" />
            <img ref={boxRef3_4} src="../images/boxSetBig3_4.jpg" alt="NBC Box sets" className=" mx-auto pb-10 opacity-0 top-[50px] relative hidden" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Boxsets;
