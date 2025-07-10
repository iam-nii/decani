import { Avatar, Button } from "@mui/material";
import Header from "./components/Header";
import { sections, teamMembers, services } from "./Constansts";
import divider from "./assets/devider.svg";
import decaniLogo from "./assets/images/decani-white.svg";
import DecaniYellowLogo from "./assets/images/decani-yellow.svg";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import DividerYellow from "./assets/divider-yellow.svg";

function App() {
  return (
    <main className="bg-pblack overflow-x-hidden">
      <Header />
      {sections.map((section, index) => (
        <section
          key={index}
          id={`section-${index + 1}`}
          className={`relative overflow-x-hidden w-full 
            ${index !== 0 ? "bg-pblack" : ""} 
            ${index === 4 ? "h-[60dvh]" : ""}
            h-[100vh]`}
        >
          {/* Section 1 */}
          {index === 0 && (
            <>
              {/* Image layer */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('./decani-bg.png')",
                  zIndex: 0,
                }}
              />
              {/* Gradient layer */}
              <div
                className="absolute inset-0 bg-gradient-to-b from-white/40 to-black/40"
                style={{ zIndex: 1 }}
              />
              {/* Content layer */}
              <div className="relative z-10">
                <h1 className="font-sans text-white lg:text-[90px] font-extrabold lg:w-[650px] lg:h-[203px] leading-none relative lg:top-44 lg:left-36">
                  {section.header}
                </h1>
                <p className="text-gray-50 text-3xl font-thin relative lg:top-44 lg:left-40">
                  Your Partner for all your Creative Solutions
                </p>
                <Button
                  className="relative lg:top-48 lg:left-40 w-44"
                  sx={{
                    background: "#F4A950",
                    paddingX: "10px",
                    fontSize: 20,
                    color: "black",
                    fontWeight: 800,
                  }}
                >
                  Explore
                </Button>
              </div>
              <img
                src={decaniLogo}
                alt="decani logo"
                className="absolute bottom-8 right-14"
              />
            </>
          )}

          {/* Section 2 */}
          {index === 1 && (
            <>
              <h1 className="font-sans font-bold lg:text-[50px] text-white relative lg:top-28 lg:left-36">
                {section.header}
              </h1>
              <h2 className="relative lg:top-28 lg:left-36 text-pyellow text-[30px]">
                {section.content}
              </h2>
              <div className="relative lg:top-28 lg:left-36 [@media(max-width:1024px)]:flex-col lg:flex lg:mt-10 lg:gap-5">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`${
                      index % 2 === 0
                        ? "bg-pyellow"
                        : "bg-pblack border-pyellow border"
                    } px-8 py-20 w-64`}
                  >
                    <img
                      src={service.icon}
                      alt={`${service.header} icon`}
                      className="mb-5 w-7 h-7"
                    />
                    <h1 className="text-white font-bold text-xl mb-2">
                      {service.header}
                    </h1>
                    <p className="text-gray-200 text-[16px] font-thin w-[165px]">
                      {service.body}
                    </p>
                  </div>
                ))}
              </div>
              <img src={divider} alt="" className="absolute bottom-0" />
            </>
          )}

          {/* Section 3 */}
          {index === 2 && (
            <>
              <div>
                <div className="flex justify-around gap-40 relative lg:top-28">
                  <h1 className="text-white font-bold text-[64px] lg:left-0">
                    {section.header}
                  </h1>
                  <img
                    src={DecaniYellowLogo}
                    alt="Yellow Decani Logo"
                    className="w-[100px] h-[100px] relative lg:right-0"
                  />
                </div>
                <div className="flex justify-center gap-16 relative lg:top-28 lg:left-14 mt-20">
                  {teamMembers.map((member, index) => (
                    <div key={index}>
                      <Avatar
                        src={member.image}
                        className="flex justify-center items-center"
                        sx={{
                          width: 150,
                          height: 150,
                          marginBottom: 2,
                          marginTop: 2,
                          marginX: "auto",
                        }}
                      />
                      <div className="text-center">
                        <h1 className="text-white font-bold text-[24px] w-[280px] mb-2">
                          {member.name}
                        </h1>
                        <p className="text-gray-200 text-[14px] w-[280px] font-thin text-justify">
                          {member.about}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <img src={divider} alt="" className="absolute bottom-0" />
              </div>
            </>
          )}

          {/* Section 4 */}
          {index === 3 && (
            <>
              <div>
                <div className="flex justify-around gap-80 mt-20">
                  <h1 className="text-white font-bold text-[64px]">
                    {section.header}
                  </h1>
                  <img
                    src={DecaniYellowLogo}
                    alt="Yellow Decani Logo"
                    className="w-[100px] h-[100px] lg:right-0"
                  />
                </div>
                <div className="relative lg:left-52">
                  <p className="text-white w-[500px] leading-7 text-sm font-thin text-justify">
                    Welcome to a world of boundless creativity and innovation.
                    At DECANI Creative Agency, we are more than just a company;
                    we are a collective of dreamers, thinkers, and doers who are
                    passionate about turning ideas into reality. Our journey
                    began with a vision to redefine the creative landscape.
                    Today, we stand at the forefront of innovation, delivering
                    cutting-edge solutions to our clients worldwide. We are a
                    team of experts who thrive on challenges and embrace change,
                    dedicated to transforming your visions into awe-inspiring
                    realities. With a portfolio that spans across various
                    industries, we have a proven track record of excellence in
                    design, development, and innovation. Our commitment to
                    quality, ingenuity, and client satisfaction drives us to
                    explore new horizons and push boundaries every day. Join us
                    on this exciting journey, and let's create, innovate, and
                    succeed together. DECANI CREATIVE AGENCY : Where Creativity
                    Knows No Bounds innovation.
                  </p>
                  <p className="text-white text-sm w-[500px] leading-7 font-thin text-justify mt-6">
                    {" "}
                    Our commitment to quality, ingenuity, and client
                    satisfaction drives us to explore new horizons and push
                    boundaries every day. Join us on this exciting journey, and
                    let's create, innovate, and succeed together. DECANI
                    CREATIVE AGENCY : Where Creativity Knows No Bounds
                  </p>
                </div>
                <img src={divider} alt="" className="absolute bottom-0" />
              </div>
            </>
          )}
          {/* Section 5 */}
          {index === 4 && (
            <div className="relative lg:top-28 lg:left-36">
              <h1 className="text-white text-8xl w-[1000px] mb-5">
                {section.header}
              </h1>
              <Link
                to={{ pathname: "/contact" }}
                className="text-pyellow underline text-3xl"
              >
                Reach out to us
              </Link>
            </div>
          )}
        </section>
      ))}
      <Footer />
      <img src={DividerYellow} alt="Yellow divider" />
    </main>
  );
}

export default App;
