import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
const Footer = () => {
    const [listSocial] = useState([
        { name: "Facebook", icon: faFacebook },
        { name: "Instagram", icon: faInstagram },
        { name: "Github", icon: faGithub },
    ]);
    return (
        <footer className="mt-[4rem]">
            <hr />
            <p className="text-[#fff] text-[1.8rem] tracking-[1.4px] text-center font-museo p-[1rem]">
                haud<span className="uppercase font-museo text-[#fff]">g</span>.Fe
            </p>
            <div>
                <ul className="flex justify-center gap-3">
                    {listSocial.map(({ name, icon }) => {
                        return (
                            <li
                                key={name}
                                className="border-2 pt-[0.8rem] pb-[0.8rem] pl-[1rem] pr-[1rem] border-white rounded-2xl"
                            >
                                <a href="" target="_blank">
                                    <FontAwesomeIcon
                                        icon={icon}
                                        className="text-white text-[1.2rem] mt-1"
                                    />
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <p className="text-center text-white tracking-[1.2px] p-[.9rem]">© 2024 haudangFE</p>
        </footer>
    );
};
export default Footer;
