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
    <footer className="h-[50vh] bg-pblack">
      <div className="flex  gap-44">
        <div className="flex flex-col relative lg:top-28 lg:left-36">
          <h1 className="text-pyellow text-xl">Navigation</h1>
          <ul className="text-white">
            <li>Home</li>
            <li>Service</li>
            <li>About</li>
            <li>Sign Up</li>
            <li>Team</li>
          </ul>
        </div>
        <div className="flex flex-col relative lg:top-28 lg:left-36">
          <h1 className="text-pyellow text-xl">Quick Links</h1>
          <ul className="text-white">
            <li>Contact Us</li>
            <li>Our Journey</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="flex flex-col relative lg:top-28 lg:left-36">
          <h1 className="text-pyellow text-xl">Legal & Cookies</h1>
          <ul className="text-white">
            <li>Terms of Service</li>
            <li>Privary Policy</li>
            <li>Cookie Notice</li>
          </ul>
        </div>
        <div className="flex gap-5 relative lg:top-28 lg:left-80">
          <img
            src={Twitter}
            alt="Twitter icon"
            className="w-10 h-10 cursor-pointer"
          />
          <img
            src={LinkedIn}
            alt="LinkedIn icon"
            className="w-10 h-10 cursor-pointer"
          />
          <img
            src={Facebook}
            alt="Facebook icon"
            className="w-10 h-10 cursor-pointer"
          />
          <img
            src={Instagram}
            alt="instagram icon"
            className="w-10 h-10 cursor-pointer"
          />
        </div>
      </div>
      <div className="relative lg:top-28 lg:left-36 mt-10 flex gap-96">
        <p className="text-white font-thin">
          ©decani. All rights reserved {year}
        </p>
        <img
          src={DecaniLogo}
          alt=""
          width={100}
          height={100}
          className="ml-[33rem]"
        />
      </div>
    </footer>
  );
}

export default Footer;
