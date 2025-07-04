import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useState } from 'react';
import 'remixicon/fonts/remixicon.css';

const App = () => {
  const [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to('.vi-mask-group', {
      rotate: 10,
      ease: 'power4.inOut',
      transformOrigin: '50% 50%',
      duration: 2,
    }).to('.vi-mask-group', {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: 'expo.inOut',
      transformOrigin: '50% 50%',
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector('.svg')?.remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  }, []);

  return (
    <>
      <div className="svg fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-black">
        <svg
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
        >
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {showContent && (
        <div className="main w-full">
          <div className="landing w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 w-full py-10 px-10  z-[30] ">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[4px]">
                  <div className="line w-10 h-2 bg-white"></div>
                  <div className="line w-8 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>
                </div>

                <h3 className="text-3xl -mt-[10px] leading-none text-white">
                  RockStar
                </h3>
              </div>
            </div>
            <div className="imagesdiv relative w-full h-screen bg-black overflow-hidden">
              <img
                src="./sky.png"
                alt="Sky"
                className="absolute top-0 left-0 w-full h-full object-cover z-10"
              />
              <img
                src="./bg.png"
                alt="Background"
                className="absolute top-0 left-0 w-full h-full object-cover z-20"
              />
              <img
                src="./girlbg.png"
                alt="Girl"
                className="absolute bottom-[-70%] left-[50%] -translate-x-1/2 scale-[0.8] z-30"
              />
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line z-[50]"></i>
                <h3 className="text-xl font-[Helvetica_Now_Display] z-[50]">
                  Scroll Down
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
