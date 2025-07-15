import { Avatar, Button } from "@mui/material";
import Header from "../components/layouts/Header";
import { sections, teamMembers, services } from "../lib/Constants";
import divider from "../assets/divider.svg";
import stripes from "../assets/stripes.png"
import decaniLogo from "../assets/images/decani-white.svg";
import DecaniYellowLogo from "../assets/images/decani-yellow.svg";
import { Link } from "react-router-dom";
import Footer from "../components/layouts/Footer";
import DividerYellow from "../assets/divider-yellow.svg";
import Card from "../components/card";
import { ChevronRight} from "@mui/icons-material";

function LandingPage() {

  return (
    <main className="bg-pblack overflow-x-hidden">
      
      {sections.map((section, index) => (
        <section
          key={index}
          id={`section-${index + 1}`}
          className={`overflow-hidden w-full min-h-fit max-h-full
            ${index !== 0 ? "bg-pblack" : ""}
            ${index === 0 ? "h-[100dvh]" : ""}
            ${index === 1 ? "h-fit" : ""}
            ${index === 2 ? "h-fit" : ""}
            ${index === 3 ? "h-fit  2xl:h-[80dvh] overflow-x-visible overflow-y-visible" : ""}
            ${index === 4 ? "h-fit min-h-[50dvh] md:min-h-[43dvh]  flex items-center" : ""}
            `}
            
        >
          {/* Section 1 */}
          {index === 0 && (
            <>
              {/* Image layer */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  // backgroundImage: "url('./decani-bg.png')",
                  backgroundImage: "url('./decani-bg2.avif')",
                  zIndex: 0,
                  // position: "relative",
                }}
              />
              {/* Gradient layer */}
              <div
                className="absolute inset-0 bg-gradient-to-b from-white/20 to-black/80 bg-blend-darken"
                style={{ zIndex: 1 }}
              />
              {/* Content layer */}
              <div className="absolute flex flex-col h-[100%] w-screen z-10">
               <header className="z-40 w-full justify-center">
                  <Header />
               </header>
               <div className=" flex  items-center z-10 h-full justify-center">
                  <div className="w-full h-fit px-5 md:px-10 max-w-[1440px] flex items-center">
                     <div className="relative z-10 space-y-7 w-[80%]">
                        <h1 className="font-sans text-white text-[60px] sm:text-[73px] lg:text-[90px] font-extrabold lg:w-[650px] lg:h-[203px] leading-none  lg:top-44 lg:left-36">
                           {section.header}
                        </h1>
                        <p className="text-gray-50 text-2xl md:text-3xl font-thi lg:top-44 lg:left-40">
                           Your Partner for all your Creative Solutions
                        </p>
                        <Button
                           className=""
                           sx={{
                           background: "#F4A950",
                           paddingX: "15px",
                           fontSize: 20,
                           color: "black",
                           fontWeight: 800,
                           borderRadius: 0,
                           }}
                        >
                           Explore
                        </Button>
                     </div>
                  </div>
               </div>
               <img
                src={decaniLogo}
                alt="decani logo"
                className="absolute bottom-8 right-14 h-3 z-50"
              />
              </div>
            </>
          )}

          {/* Section 2 */}
          {index === 1 && (
            <>
            <div className="h-fit">
               <div className="h-fit w-full flex items-center justify-border md:justify-center my-[100px]">
                  <div className="w-full sm:w-full md:w-fit lg:w-fit 2xl:w-full lg:max-w-[1440px] 2xl:max-w-[1500px] items-center flex flex-col justify-center sm:mx-7 md:mx-0 lg:mx-0 gap-10 lg:p-10 lg:py-20">
                     <div className="flex flex-col justify-center items-center lg:items-start lg:justify-start w-full lg:mx-10">
                        <h1 className="font-sans font-bold text-[32px] md:text-[40px] lg:text-[40px] text-white lg:top-28 lg:left-36">
                           {section.header}
                        </h1>
                        <h2 className=" lg:top-28 lg:left-36 text-pyellow text-[20px] md:text-[30px]">
                           {section.content}
                        </h2>
                     </div>
                     <div className="w-fit justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 gap-5 2xl:gap-10 lg:mt-24 sm:mx-10 lg:mx-0 sm:p-0 w-full ">
                           {services.map((service, index) => (
                              <div
                              key={index}>
                                 <Card 
                                 index={index}
                                 icon={service.icon}
                                 header={service.header}
                                 body={service.body}
                                 alt={`${service.header} icon`}
                                 />
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
                  {/* <img src={divider} alt="" className="absolute bottom-0" /> */}
               </div></div>
            </>
          )}

          {/* Section 3 */}
          {index === 2 && (
            <>
              <div className="h-fit w-full flex items-center justify-center">
               <div className="w-full h-fit mx-10 my-40 space-y-20 lg:max-w-[1440px] px-10">
                  <div className="flex justify-start">
                     <h1 className="font-sans font-bold text-[32px] md:text-[40px] lg:text-[40px] text-white lg:left-0">
                     {section.header}
                     </h1>
                     {/* <img
                     src={DecaniYellowLogo}
                     alt="Yellow Decani Logo"
                     className="w-[100px] h-[100px] relative lg:right-0"
                     /> */}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 place-items-between gap-y-5 w-full md:space-x-5 lg:space-x-8 ">
                     {teamMembers.map((member, index) => (
                     <div key={index} className="w-fit max-w-[300px] min-h-[390px] flex flex-col">
                        <Avatar
                           src={member.image}
                           className=""
                           sx={{
                           width: 150,
                           height: 150,
                           marginBottom: 2,
                           marginTop: 2,
                           marginX: "auto",
                           }}
                        />
                        <div className="h-full flex flex-col justify-between">
                           <div className="mx-2 flex flex-col items-center text-center w-fit h-fit justify-between">
                              <div className="flex flex-col items-center justify-center min-h-[80px] w-fit">
                                 <h1 className="text-white font-semibold text-[22px] h-fit align-middle">
                                 {member.name}
                                 </h1>
                              </div>
                              <p className="text-gray-200 text-[14px]  font-thin text-center">
                              {member.about}
                              </p>
                           </div>
                        </div>
                     </div>
                     ))}
                  </div>
               </div>
                
                {/* <img src={divider} alt="" className="absolute bottom-0" /> */}
              </div>
            </>
          )}

          {/* Section 4 */}
          {index === 3 && (
            <>
              <div className="h-fit flex items-center align-middle justify-center w-full">
               <div className="flex flex-col md:flex-row justify-between w-full sm:w-full md:w-full lg:w-full 2xl:w-full lg:max-w-[1440px] 2xl:max-w-[1500px] h-fit my-40 gap-20">
                  <div className="flex flex-row w-full px-10 sm:px-20 ">
                     <div className="w-full h-fit space-y-10 2xl:space-y-20">
                        <div className="flex w-fit">
                           <h1 className="font-sans font-bold text-[32px] md:text-[40px] lg:text-[40px] text-white">
                           {section.header}
                           </h1>
                        </div>
                        <div className="w-full sm:w-fit lg:min-w-[80%] h-fit min-h-[calc(35dvh)] xl:max-w-[80%] font-medium space-y-6 text-[16px]">
                           <p className="text-white h-fit w-fill leading-6 md:leading-7 text-justify">
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
                           <p className="h-fit text-white text-sm  leading-6 md:leading-7">
                           {" "}
                           Our commitment to quality, ingenuity, and client
                           satisfaction drives us to explore new horizons and push
                           boundaries every day. Join us on this exciting journey, and
                           let's create, innovate, and succeed together. 
                           </p>
                           <p className="h-fit text-white text-sm  leading-6 md:leading-7">
                           DECANI
                           CREATIVE AGENCY : Where Creativity Knows No Bounds
                           </p>
                        </div>
                        <div className="hidden md:visible w-[100dvw] sm:w-full h-[80px] sm:h-[90px] overflow-hidden md:flex flex-col items-center object-bottom justify-center">
                           <img   
                           src={stripes}
                           className="object-bottom-left w-full sm:max-w-[900px] md:min-w-[650px] md:max-w-[1000px] bg-pyellow "
                           />
                        </div>
                     </div>
                     <div className="max-w-[300px] min-h-[100%] lg:px-10 invisible md:visible w-0 md:w-[100%] justify-center align-middle content-center flex">
                        <div className="mx-0 px-0 w-fit h-[100%]  content-center ">
                           <img
                           src={DecaniYellowLogo}
                           alt="Yellow Decani Logo"
                           className="rotate-90 min-w-[calc(50dvh)] h-fit "
                           />
                        </div>
                     </div>
                  </div>
                  <div className="flex md:hidden w-full h-[80px] sm:h-[90px] overflow-hidden items-center justify-center">
                     <img 
                     src={stripes}
                     className="object-bottom-left min-w-[1000px] sm:max-w-[1000px] bg-pyellow "
                     />
                  </div>
               </div>
              </div>
            </>
          )}
          {/* Section 5 */}
          {index === 4 && (
            <div className="mb-10 h-fit min-h-full w-full flex items-center justify-center">
               <div className="h-fit w-full flex flex-col justify-center items-center lg:max-w-[1440px] 2xl:max-w-[1500px] mx-10 sm:mx-20">
                  <div className="flex flex-col
                  gap-6 h-fit w-full lg:max-w-[1440px] 2xl:max-w-[1500px] my-20 ">
                     <h1 className="text-white text-[38px]  sm:text-6xl md:text-8xl md:w-[1000px]">
                        {section.header}
                     </h1>
                     <Link
                        to={{ pathname: "/contact" }}
                        className="text-pyellow text-[28px]"
                     >
                        <span>Reach out to us</span>
                        <ChevronRight className="text-3xl"/>
                     </Link>
                  </div>
               </div>
            </div>
          )}
        </section>
      ))}
      <div className="h-fit w-[100dvw] flex flex-col">
         <Footer />
         <img 
         className="z-[50] w-[1100px] sm:w-full"
         src={DividerYellow} 
         alt="Yellow divider" 
         />
      </div>
    </main>
  );
}

export default LandingPage;
