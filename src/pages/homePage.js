import Nav from "../sections/nav";
import Hero from "../sections/hero";
import Body from "../sections/body";
import Carousel from "../sections/carousel";
import Footer from "../sections/footer";

function HomePage() {
  return (
    <div className="bg-[#000000]">
      <Nav />
      <Hero />
      <Body />
      <div className="h-[700px]">
        <div className="text-center pb-16">
          <h2 className="text-white text-[5.25rem] leading-[5.25rem] bison font-bold mb-4">with </h2>
          <h3 className="text-[#44A9AE] text-[5.25rem] leading-[5.25rem] bison font-bold mb-4">Proven success</h3>
        </div>
        <Carousel show={4} infiniteLoop>
          <div>
            <div style={{ padding: 8 }}>
              <img src="../images/Tourism-Australia-thumbnail.jpg" alt="placeholder" style={{ width: "100%" }} />
              <h2 className="text-[#ffffff] bison py-2">Tourism Australia 1</h2>
              <p className="text-[#ffffff] grand">Lorem ipsum dolor sit amet, con sec tetur adipiscing elit dispara.</p>
              <a className="bison text-[#D6534B] py-2" href="https://www.google.co.uk" target="_blank" rel="noopener noreferrer">
                View project
              </a>
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img src="../images/Tourism-Australia-thumbnail.jpg" alt="placeholder" style={{ width: "100%" }} />
              <h2 className="text-[#ffffff] bison py-2">Tourism Australia 2</h2>
              <p className="text-[#ffffff] grand">Lorem ipsum dolor sit amet, con sec tetur adipiscing elit dispara.</p>
              <a className="bison text-[#D6534B] py-2" href="https://www.google.co.uk" target="_blank" rel="noopener noreferrer">
                View project
              </a>
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img src="../images/Tourism-Australia-thumbnail.jpg" alt="placeholder" style={{ width: "100%" }} />
              <h2 className="text-[#ffffff] bison py-2">Tourism Australia 3</h2>
              <p className="text-[#ffffff] grand">Lorem ipsum dolor sit amet, con sec tetur adipiscing elit dispara.</p>
              <a className="bison text-[#D6534B] py-2" href="https://www.google.co.uk" target="_blank" rel="noopener noreferrer">
                View project
              </a>
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img src="../images/Tourism-Australia-thumbnail.jpg" alt="placeholder" style={{ width: "100%" }} />
              <h2 className="text-[#ffffff] bison py-2">Tourism Australia 4</h2>
              <p className="text-[#ffffff] grand">Lorem ipsum dolor sit amet, con sec tetur adipiscing elit dispara.</p>
              <a className="bison text-[#D6534B] py-2" href="https://www.google.co.uk" target="_blank" rel="noopener noreferrer">
                View project
              </a>
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img src="../images/Tourism-Australia-thumbnail.jpg" alt="placeholder" style={{ width: "100%" }} />
              <h2 className="text-[#ffffff] bison py-2">Tourism Australia 4</h2>
              <p className="text-[#ffffff] grand">Lorem ipsum dolor sit amet, con sec tetur adipiscing elit dispara.</p>
              <a className="bison text-[#D6534B] py-2" href="https://www.google.co.uk" target="_blank" rel="noopener noreferrer">
                View project
              </a>
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img src="../images/Tourism-Australia-thumbnail.jpg" alt="placeholder" style={{ width: "100%" }} />
              <h2 className="text-[#ffffff] bison py-2">Tourism Australia 5</h2>
              <p className="text-[#ffffff] grand">Lorem ipsum dolor sit amet, con sec tetur adipiscing elit dispara.</p>
              <a className="bison text-[#D6534B] py-2" href="https://www.google.co.uk" target="_blank" rel="noopener noreferrer">
                View project
              </a>
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img src="../images/Tourism-Australia-thumbnail.jpg" alt="placeholder" style={{ width: "100%" }} />
              <h2 className="text-[#ffffff] bison py-2">Tourism Australia 6</h2>
              <p className="text-[#ffffff] grand">Lorem ipsum dolor sit amet, con sec tetur adipiscing elit dispara.</p>
              <a className="bison text-[#D6534B] py-2" href="https://www.google.co.uk" target="_blank" rel="noopener noreferrer">
                View project
              </a>
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img src="../images/Tourism-Australia-thumbnail.jpg" alt="placeholder" style={{ width: "100%" }} />
              <h2 className="text-[#ffffff] bison py-2">Tourism Australia 7</h2>
              <p className="text-[#ffffff] grand">Lorem ipsum dolor sit amet, con sec tetur adipiscing elit dispara.</p>
              <a className="bison text-[#D6534B] py-2" href="https://www.google.co.uk" target="_blank" rel="noopener noreferrer">
                View project
              </a>
            </div>
          </div>
        </Carousel>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
