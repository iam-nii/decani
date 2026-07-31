import { useState, useEffect } from "react";
import { motion } from "motion/react";

const menuItems = [
  {
    id: "home",
    label: "Home",
  },
  {
    id: "services",
    label: "Services",
  },
  {
    id: "team",
    label: "Team",
  },
  {
    id: "about",
    label: "About",
  },
  {
    id: "contact",
    label: "Contact Us",
  },
];

function Menu() {
  const [active, setActive] = useState("home");

  const scrollToSection = (id: string) => {
    setActive(id);

    const section = document.getElementById(id);

    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <ul className="
      flex 
      items-center 
      justify-center 
      gap-1 
      rounded-[30px] 
      border 
      border-white/40
      p-[4px]
      text-sm 
      font-normal 
      text-white 
      lg:gap-4
    ">
      {menuItems.map((item) => {
        const isActive = active === item.id;
        
        useEffect(() => {

          const observer = new IntersectionObserver(
            entries => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  setActive(entry.target.id);
                }
              })
            },
            {
              threshold: 0.5
            }
          );


          menuItems.forEach(item => {
            const section = document.getElementById(item.id);

            if (section) {
              observer.observe(section);
            }
          });


          return () => observer.disconnect();

        }, []);
        return (
          <li
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="
              relative
              cursor-pointer
              px-4
              py-2
            "
          >

            {isActive && (
              <motion.div
                layoutId="active-pill"
                className="
                  absolute
                  inset-0
                  rounded-[30px]
                  bg-white
                "
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}

            <span
              className={`
                relative z-10
                transition-colors duration-300
                ${isActive
                  ? "font-bold text-pblack"
                  : "text-white hover:text-pyellow"
                }
              `}
            >
              {item.label}
            </span>

          </li>
        );
      })}
    </ul>
  );
}

export default Menu;