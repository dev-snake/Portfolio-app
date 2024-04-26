import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AboutMe from "./About";
import Footer from "../Footer";
import TechStack from "./TechStack";
import {
    faReact,
    faHtml5,
    faCss3,
    faJs,
    faPhp,
    faNodeJs,
    faGithub,
    faFacebook,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const HomePage = () => {
    const listTechStack = [
        {
            name: "React",
            icon: faReact,
            color: "#61dafb",
            des: "React is a JavaScript library for building user interfaces",
        },
        {
            name: "Html5",
            icon: faHtml5,
            color: "#e54d26",
            des: "Html5 is a markup language used for structuring and presenting content on the World Wide Web.",
        },
        {
            name: "Css3",
            icon: faCss3,
            color: "#3d8fc6",
            des: "Css3 is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
        },
        {
            name: "Javascript",
            icon: faJs,
            color: "#f0db4f",
            des: "JavaScript is a high-level, often just-in-time compiled, and multi-paradigm programming language.",
        },
        {
            name: "Php",
            icon: faPhp,
            color: "#6181b6",
            des: "PHP is a popular general-purpose scripting language that is especially suited to web development.",
        },
        {
            name: "Nodejs",
            icon: faNodeJs,
            color: "#4e9b43",
            des: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
        },
    ];
    const [techStack] = useState(listTechStack);
    const [aboutMe] = useState([
        {
            name: "Github",
            icon: faGithub,
        },
        {
            name: "Facebook",
            icon: faFacebook,
        },
        {
            name: "Instagram",
            icon: faInstagram,
        },
    ]);
    return (
        <>
            <section className="w-full grid grid-cols-1 sm:grid-cols-2   pt-[100px] gap-[1rem]">
                <div>
                    <div
                        className="w-[400px] h-[600px] overflow-hidden mx-auto
                     hover:shadow-xxxl transition-all ease-linear"
                    >
                        <img
                            src="./src/assets/images/vegeta.jpg"
                            alt="avatar"
                            className="w-full h-full object-cover hover:scale-125 
                        cursor-pointer ease-linear duration-300 hover:saturate-150
                         transform transition-all  hover:rotate-12"
                        />
                    </div>
                </div>
                <div className="p-[1.2rem]">
                    <div className="text-[#fff]">
                        <p className="p-[1rem] uppercase tracking-[1.2px] font-semibold text-[2.2rem] text-center font-museo">
                            My name is
                        </p>
                        <h1
                            className="text-[2.5rem] 
                     decoration-pink-500 uppercase tracking-[1.5px] text-center  font-museo"
                        >
                            Dang van hau
                        </h1>
                    </div>
                    <div className="text-[#eee5] border-l-[4px] pl-[1rem] tracking-[1.2px] mt-2 border-[#e945e3]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit autem sunt
                        accusamus nemo totam laborum voluptatem iure nobis tempore repellat, ut
                        porro facere magni, asperiores doloribus ipsa dolore optio officia!
                    </div>
                    <div>
                        <p className="text-[#fff] capitalize tracking-[1.4px] text-center font-semibold text-[2rem] font-museo">
                            My Skills
                        </p>
                        <div className="max-w-[300px] mx-auto flex justify-center gap-[1.3rem] flex-wrap items-center">
                            <FontAwesomeIcon
                                icon={faReact}
                                className="text-[#61dafb] text-[3rem] mt-[1rem] "
                            />
                            <FontAwesomeIcon
                                icon={faHtml5}
                                className="text-[#e54d26] text-[3rem] mt-[1rem] "
                            />{" "}
                            <FontAwesomeIcon
                                icon={faCss3}
                                className="text-[#3d8fc6] text-[3rem] mt-[1rem] "
                            />{" "}
                            <FontAwesomeIcon
                                icon={faJs}
                                className="text-[#f0db4f] text-[3rem] mt-[1rem] "
                            />{" "}
                            <FontAwesomeIcon
                                icon={faPhp}
                                className="text-[#6181b6] text-[3rem] mt-[1rem] font-bold"
                            />
                            <FontAwesomeIcon
                                icon={faNodeJs}
                                className="text-[#4e9b43] text-[3rem] mt-[1rem] font-bold"
                            />
                        </div>
                    </div>
                    <div>
                        <h3
                            className="text-[#fff] capitalize text-center mt-[1rem] 
                    font-semibold tracking-[1.4px] text-[1.2rem] font-museo"
                        >
                            Code Editor
                        </h3>
                        <FontAwesomeIcon
                            icon={faNodeJs}
                            className="text-[#4e9b43] text-[3rem] mt-[1rem] font-bold mx-auto block"
                        />
                    </div>
                </div>
            </section>
            <TechStack techStack={techStack} />
            <AboutMe aboutMe={aboutMe} />
            <Footer />
        </>
    );
};
export default HomePage;
