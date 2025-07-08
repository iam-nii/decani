import { useState } from "react";

function Menu() {
  const handleMenuChange = (item: string) => {
    console.log(item);
    setSelectedItem_(item);
  };
  const [selectedItem_, setSelectedItem_] = useState<string | null>(null);
  return (
    <ul className="flex justify-center [@media(max-width:853px)]:gap-5 items-center gap-10 text-white text-semibold font-semibold">
      <li
        className={`${
          selectedItem_ === "home" ? "underline" : ""
        } cursor-pointer`}
        onClick={() => handleMenuChange("home")}
      >
        Home
      </li>
      <li
        className={`${
          selectedItem_ === "services" ? "underline" : ""
        } cursor-pointer`}
        onClick={() => handleMenuChange("services")}
      >
        Services
      </li>
      <li
        className={`${
          selectedItem_ === "about" ? "underline" : ""
        } cursor-pointer`}
        onClick={() => handleMenuChange("about")}
      >
        About
      </li>
      <li
        className={`${
          selectedItem_ === "contact" ? "underline" : ""
        } cursor-pointer`}
        onClick={() => handleMenuChange("contact")}
      >
        Contact Us
      </li>
    </ul>
  );
}

export default Menu;
