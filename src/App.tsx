import { Button } from "@mui/material";
import Header from "./components/Header";
import { sections, teamMembers, services } from "./Constansts";
import divider from "./assets/devider.svg";
function App() {
  return (
    <>
      <Header />
      {sections.map((section, index) => (
        <section
          key={index}
          className={`relative overflow-x-hidden ${
            index !== 0 ? "bg-pblack h-[100dvh]" : ""
          } w-full h-[90vh]
        `}
        >
          {/* Section 1 */}
          {index === 0 && (
            <>
              {/* Image layer */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('../src/assets/images/decani-bg.png')",
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
        </section>
      ))}
    </>
  );
}

export default App;
