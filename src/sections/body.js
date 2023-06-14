import React, { useEffect, useRef } from "react";
import gsap from "gsap";
// import Boxsets from "./boxsets";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Body = () => {
  const scrollContainer = useRef(null);
  const bodyCopy1Ref = useRef(null);
  const bodyCopy2Ref = useRef(null);
  const clientLogosRef = useRef(null);
  const iconCopyRef = useRef(null);
  const iconsRef = useRef(null);
  const boxRef1_1 = useRef(null);
  const boxRef1_2 = useRef(null);
  const boxRef1_3 = useRef(null);
  const boxRef1_4 = useRef(null);
  const acrossRef = useRef(null);
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

    gsap.set(bodyCopy2Ref.current, { scale: 0 });

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
      tl.to(bodyCopy1Ref.current, { opacity: 1, duration: 0.5 });
      tl.to(bodyCopy2Ref.current, { opacity: 1, scale: 1, duration: 0.5 });
      tl.to([bodyCopy1Ref.current, bodyCopy2Ref.current], { opacity: 0, scale: 1, duration: 0.1 });
      tl.to(clientLogosRef.current, { opacity: 1, scale: 1, top: -200, duration: 0.5 });
      tl.to(clientLogosRef.current, { opacity: 0, scale: 1, top: -400, duration: 0.5 });
      tl.to([acrossRef.current, entertainmentRef.current], { opacity: 1, top: 0, duration: 0.25 });
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

      // ScrollTrigger.create({
      //   trigger: bodyCopy1Ref.current,
      //   start: "-20% 50%",
      //   end: "50% 50%",
      //   // markers: true,
      //   scrub: true,
      //   onUpdate: (self) => {
      //     const progress = self.progress;
      //     gsap.to(bodyCopy1Ref.current, { duration: 0, opacity: progress });
      //   },
      // });

      // ScrollTrigger.create({
      //   trigger: bodyCopy2Ref.current,
      //   start: "-20% 50%",
      //   end: "50% 50%",
      //   // markers: true,
      //   scrub: true,
      //   onUpdate: (self) => {
      //     const progress = self.progress;
      //     gsap.to(bodyCopy2Ref.current, { duration: 0, opacity: progress, scale: progress });
      //   },
      // });

      ScrollTrigger.create({
        trigger: clientLogosRef.current,
        start: "-50% 50%",
        end: "140% 50%",
        // markers: true,
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(clientLogosRef.current, { duration: 0, y: -progress * 200 });
        },
      });

      ScrollTrigger.create({
        trigger: iconCopyRef.current,
        start: "-20% 50%",
        end: "100% 50%",
        // markers: true,
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(iconCopyRef.current, { duration: 0, opacity: progress, scale: progress, transformOrigin: "50% 100%" });
        },
      });

      ScrollTrigger.create({
        trigger: iconsRef.current,
        start: "-20% 50%",
        end: "50% 50%",
        // markers: true,
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(iconsRef.current, { duration: 0, opacity: progress });
        },
      });
    });

    mm.add("(max-width: 768px)", () => {});

    return () => {
      ScrollTrigger.killAll();
      console.log("killing all");
      gsap.matchMediaRefresh();
      mm.revert();
    };
  }, []);

  return (
    <div ref={scrollContainer}>
      <div className="relative w-full h-[100vh]">
        <img src="../images/mainBg.jpg" alt="stary background" className="object-cover w-full h-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h2 ref={bodyCopy1Ref} className="text-white text-[5.813rem] leading-[5.813rem] bison font-bold mb-4 opacity-0">
              with unprecedented<br></br> global scale
            </h2>
            <h3 ref={bodyCopy2Ref} className="text-[#9984BE] text-[15rem] leading-[15rem] bison font-bold mb-4 opacity-0">
              1 billion
            </h3>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <img ref={clientLogosRef} src="../images/Brand-logos.png" alt="Brand logos" className="relative top-[300px] opacity-0" />
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col items-top justify-center w-full">
          <div className="text-center pb-20">
            <h2 ref={acrossRef} className="text-white text-[5.25rem] leading-[5.25rem] bison font-bold mb-4 opacity-0">
              across
            </h2>
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
      {/* <Boxsets /> */}
      <div className="relative w-full h-[95vh] min-h-[700px]">
        <img src="../images/premiumAdBg.jpg" alt="stary background" className="object-cover w-full h-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div ref={iconCopyRef} className="text-center pb-16 opacity-0">
            <h2 className="text-white text-[5.25rem] leading-[5.25rem] bison font-bold mb-4">DELIVERING A FULL SUITE OF</h2>
            <h3 className="text-[#6EA5CC] text-[5.25rem] leading-[5.25rem] bison font-bold mb-4">PREMIUM ADVERTISING SOLUTIONS</h3>
          </div>
          <div ref={iconsRef} className="opacity-0">
            <div className="flex flex-wrap justify-center ">
              {/* First Row */}
              <div className="p-2 flex flex-col items-center w-[300px] mx-auto justify-center">
                <img src="../images/iconFooter1.svg" alt="Brand icon" className="w-[100px]" />
                <span className="text-center grand text-white uppercase">
                  Brand<br></br> Strategy
                </span>
              </div>
              <div className="p-2 flex flex-col items-center w-[300px] mx-auto justify-center">
                <img src="../images/iconFooter2.svg" alt="Data icon" className="w-[100px]" />
                <span className="text-center grand text-white uppercase">
                  Data &<br></br> insights
                </span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              {/* Second Row */}
              <div className="p-2 flex flex-col items-center w-[300px] mx-auto justify-center">
                <img src="../images/iconFooter3.svg" alt="Sponsor icon" className="w-[100px]" />
                <span className="text-center grand text-white uppercase">
                  Sponsorships<br></br> & Integrations
                </span>
              </div>
              <div className="p-2 flex flex-col items-center w-[300px] mx-auto justify-center">
                <img src="../images/iconFooter4.svg" alt="Branded icon" className="w-[100px]" />
                <span className="text-center grand text-white uppercase">
                  Branded<br></br> Entertainment
                </span>
              </div>
              <div className="p-2 flex flex-col items-center w-[300px] mx-auto justify-center">
                <img src="../images/iconFooter5.svg" alt="Events icon" className="w-[100px]" />
                <span className="text-center grand text-white uppercase">
                  Events &<br></br> Experiences
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
