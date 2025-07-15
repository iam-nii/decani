import { useState } from "react";

function Menu() {
  const handleMenuChange = (item: string) => {
    console.log(item);
    setSelectedItem_(item);
  };
  const [selectedItem_, setSelectedItem_] = useState<string | null>("home");
  
  return (
    <ul className="flex justify-center [@media(max-width:853px)]:gap-5 items-center gap-10 text-white text-semibold text-[17px] font-semibold">
      <li
        className={`hover:font-extrabold ${
          selectedItem_ === "home" ? "pb-2 border-b-4" : ""
        } cursor-pointer`}
        onClick={() => handleMenuChange("home")}
      >
        Home
      </li>
      <li
        className={`hover:font-extrabold ${
          selectedItem_ === "services" ? "pb-2 border-b-4" : ""
        } cursor-pointer`}
        onClick={() => handleMenuChange("services")}
      >
        Services
      </li>
      <li
        className={`hover:font-extrabold ${
          selectedItem_ === "about" ? "pb-2 border-b-4" : ""
        } cursor-pointer`}
        onClick={() => handleMenuChange("about")}
      >
        About
      </li>
      <li
        className={`hover:font-extrabold ${
          selectedItem_ === "contact" ? "pb-2 border-b-4" : ""
        } cursor-pointer`}
        onClick={() => handleMenuChange("contact")}
      >
        Contact Us
      </li>
    </ul>
  );
}

export default Menu;
