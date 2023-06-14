const Hero = () => {
  return (
    <div>
      <div className="relative w-full h-[100vh]">
        <img src="../images/footerBg.jpg" alt="Earth" className="object-cover w-full h-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <img src="../images/catalystLogoFooter.svg" alt="Catalyst logo" className="w-[300px] pb-20" />
          <div className="text-center">
            <h2 className="text-white text-[8.75rem] leading-[8.75rem] font-bold mb-4 bison pb-20">
              our story is <span className="text-[#E8B561]">your story</span>
            </h2>
          </div>
          <button className="text-[#ffffff] border solid px-10 py-2 bison text-[2.25rem] mb-20">Get in touch now</button>
          <div className="flex flex-row space-x-10">
            <a href="https://www.google.com">
              <img src="../images/youtube-icon.svg" alt="youtube logo"></img>
            </a>
            <a href="https://www.google.com">
              <img src="../images/instagram-icon.svg" alt="instgram logo"></img>
            </a>
            <a href="https://www.google.com">
              <img src="../images/twitter-icon.svg" alt="twitter logo"></img>
            </a>
          </div>
        </div>
      </div>
      <footer className=" text-white py-4 w-full">
        <div className="container mx-auto flex justify-between items-center w-[90%]">
          <div className="left-items">
            <ul className="flex space-x-10">
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-of-use">Terms of Use</a>
              </li>
              <li>
                <a href="/supple-chain-values">Supple Chain Values</a>
              </li>
            </ul>
          </div>
          <div className="right-items">
            <p className="text-white text-sm">&copy; Catalyst 2023. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hero;
