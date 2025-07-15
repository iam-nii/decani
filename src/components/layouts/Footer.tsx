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
      <div className=" w-full h-fit lg:max-w-[1440px] 2xl:max-w-[1500px]">
        <div className=" h-full w-full flex flex-col justify-between">
          <div className="grid grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 w-full justify-between place-content-between  gap-y-8 gap-x-5">
            <div className="flex flex-col w-full space-y-1 md:space-y-3">
              <h1 className="text-pyellow md:text-xl">{("Navigation").toUpperCase()}</h1>
              <ul className="text-white text-[14px] sm:text-[15px] font-thin space-y-1 md:space-y-3">
                <li>Home</li>
                <li>Service</li>
                <li>About</li>
                <li>Sign Up</li>
                <li>Team</li>
              </ul>
            </div>
            <div className="flex flex-col space-y-1 md:space-y-3 w-full">
              <h1 className="text-pyellow md:text-xl">{("Quick Links").toUpperCase()}</h1>
              <ul className="text-white text-[14px] sm:text-[15px] font-thin space-y-1 md:space-y-3">
                <li>Contact Us</li>
                <li>Our Journey</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div className="flex flex-col relative space-y-1 md:space-y-3">
              <h1 className="text-pyellow md:text-xl">{("Legal & Cookies").toUpperCase()}</h1>
              <ul className="text-white text-[14px] sm:text-[15px] font-thin space-y-1 md:space-y-3">
                <li>Terms of Service</li>
                <li>Privary Policy</li>
                <li>Cookie Notice</li>
              </ul>
            </div>
            <div className="flex flex-col items-start md:items-center h-fit w-full">
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
          </div>
          <div className="w-full mt-10 mb-5 sm:mb-2 md:mb-0 flex flex-col-reverse gap-y-10 md:flex-row justify-around md:justify-between items-center"> 
            <p className="text-white text-[14px] font-thin">
              ©Decani. All rights reserved {year}
            </p>
            <img
              src={DecaniLogo}
              alt=""
              width={100}
              height={100}
              className="w-20 sm:w-30"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
