import React from "react";

const Navbar = () => {
  return (
    <div className="fixed z-[999] w-full px-16 py-6 flex justify-between items-center backdrop-blur-xl bg-[#0f0f0f]/80 transition-all duration-300 shadow-lg">
      <div className="logo">
        <div className="logo text-white text-2xl font-semibold tracking-widest uppercase">
          TechSavvy
        </div>
      </div>
      <div className="links flex gap-10 ">
        {["Home", "Projects", "About Me", "Skills", "Contact"].map(
          (item, index) => (
            <a
              key={index}
              className={`text-md font-medium tracking-wide text-white hover:text-gray-300 transition ${
                index === 4 && "ml-20"
              }`}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
            >
              {item}
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default Navbar;
