import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
const Navbar = () => {
    const [listNavbar] = useState([
        { name: "Home", path: "/" },
        { name: "About", path: "/about-me" },
        { name: "My CV", path: "/mycv" },
        { name: "Projects", path: "/projects" },
    ]);
    const [type, setType] = useState("Home");
    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 100) {
    //             console.log("Hello");
    //         } else {
    //             document.querySelector("nav").classList.remove("bg-[#333]");
    //         }
    //     };
    //     window.addEventListener("scroll", handleScroll);
    // }, []);
    const handleNavbar = () => {
        document.querySelector("aside").classList.toggle("hidden");
    };
    return (
        <>
            <nav
                className="w-full flex  justify-between 
            items-center pt-[1.1rem] pb-[1.1rem] pr-[2rem] pl-[2rem] 
          "
            >
                <Link to="/" className="text-[#fff] text-[1.8rem] tracking-[1.4px]   font-museo">
                    haud<span className="uppercase">g</span>.Fe
                </Link>
                <div className="text-[#fff] text-[1.1rem] uppercase tracking-[1.2px] font-semibold">
                    <FontAwesomeIcon
                        icon={faBars}
                        className="block sm:hidden"
                        onClick={handleNavbar}
                    />
                </div>
                <ul className="hidden sm:flex">
                    {listNavbar.map(({ name, path }) => (
                        <li className="ml-[1.1rem]" key={name}>
                            <Link
                                to={path}
                                className="tracking-[1.8px] capitalize text-[#fff]"
                                {...(type === name && { style: { color: "#e945e3" } })}
                                onClick={() => setType(name)}
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <aside
                className="w-[80%] bg-[#fff] h-[100vh] hidden sm:hidden fixed 
                            top-0 left-0 transition-all duration-300 ease-in-out z-50"
            >
                <ul className="pt-[4rem] grid gap-3 justify-center">
                    {listNavbar.map(({ name, path }) => (
                        <li className="ml-[1.1rem]" key={name}>
                            <Link
                                to={path}
                                className="tracking-[1.8px] capitalize text-[#333] font-semibold text-center"
                                {...(type === name && { style: { color: "#e945e3" } })}
                                onClick={() => setType(name)}
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    );
};
export default Navbar;
