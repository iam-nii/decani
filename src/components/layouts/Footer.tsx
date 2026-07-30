import Twitter from "../../assets/icons/twitter-yellow.svg";
import LinkedIn from "../../assets/icons/linkedin-yellow.svg";
import Facebook from "../../assets/icons/facebook-yellow.svg";
import Instagram from "../../assets/icons/instagram-yellow.svg";
import DecaniLogo from "../../assets/images/decani-white.svg";
import { useEffect, useState } from "react";

function Footer() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    setYear(year);
  }, []);

  return (
    <footer className="h-fit bg-pblack pt-10 pb-2 px-10 sm:px-20 flex flex-col items-center">
      <div className="relative w-full h-fit lg:max-w-[1440px] 2xl:max-w-[1500px] border-[3px] border-white/50 rounded-[30px] p-6 md:p-20 bg-white/60 backdrop-blur-2xl overflow-hidden py-10">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className=" h-full w-full flex flex-col justify-between">
          <div className="grid grid-cols-2 lg:grid-rows-1 lg:grid-cols-10 w-full justify-between place-content-between  gap-y-8 gap-x-5">
            <div className="col-span-4 flex flex-col gap-10 items-start md:items-start h-fit w-full md:pr-10">
              <div className=" space-y-5">
                <img
                  src={DecaniLogo}
                  alt=""
                  width={150}
                  height={150}
                  className="w-30 sm:w-30 md:w-40"
                />
                <p className="text-[13px] md:text-sm text-gray-200/80 font-[70] md:font-thin">Our commitment to quality, ingenuity, and client satisfaction drives us to explore new horizons and push boundaries every day. Join us on this exciting journey, and let's create, innovate, and succeed together.</p>
              </div>
              <div className="flex gap-3 md:gap-5 ">
                <img
                  src={Twitter}
                  alt="Twitter icon"
                  className="w-7 cursor-pointer"
                />
                <img
                  src={LinkedIn}
                  alt="LinkedIn icon"
                  className="w-7 cursor-pointer"
                />
                <img
                  src={Facebook}
                  alt="Facebook icon"
                  className="w-7 cursor-pointer"
                />
                <img
                  src={Instagram}
                  alt="instagram icon"
                  className="w-7 cursor-pointer"
                />
              </div>
            </div>
            <div className="col-span-2 flex flex-col w-full space-y-1 md:space-y-3">
              <h1 className="text-pyellow text-[15px] md:text-xl">{("Navigation").toUpperCase()}</h1>
              <ul className="text-white text-[13px] sm:text-[15px] font-thin space-y-1 md:space-y-3">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">Service</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Sign Up</li>
                <li className="cursor-pointer">Team</li>
              </ul>
            </div>
            <div className="col-span-2 flex flex-col space-y-1 md:space-y-3 w-full">
              <h1 className="text-pyellow text-[15px] md:text-xl">{("Quick Links").toUpperCase()}</h1>
              <ul className="text-white text-[13px] sm:text-[15px] font-thin space-y-1 md:space-y-3">
                <li className="cursor-pointer">Contact Us</li>
                <li className="cursor-pointer">Our Journey</li>
                <li className="cursor-pointer">FAQs</li>
              </ul>
            </div>
            <div className="col-span-2 flex flex-col relative space-y-1 md:space-y-3">
              <h1 className="text-pyellow text-[15px] md:text-xl">{("Legal & Cookies").toUpperCase()}</h1>
              <ul className="text-white text-[13px] sm:text-[15px] font-thin space-y-1 md:space-y-3">
                <li className="cursor-pointer">Terms of Service</li>
                <li className="cursor-pointer">Privary Policy</li>
                <li className="cursor-pointer">Cookie Notice</li>
              </ul>
            </div>

          </div>
          <div className="w-full mt-10 mb-5 sm:mb-2 md:mb-0 flex flex-col-reverse gap-y-10 md:flex-row justify-around md:justify-between items-center">
            <p className="text-white text-[14px] font-thin">
              ©{year} Decani. All rights reserved.
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
