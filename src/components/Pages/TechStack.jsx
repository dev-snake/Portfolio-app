import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
const TechStack = ({ techStack }) => {
    console.log(techStack);
    return (
        <section className="mt-[2rem] p-[1rem]">
            <div>
                <h1
                    className="text-[#fff] mt-[1rem] text-[2.2rem] font-museo 
                    text-center uppercase tracking-[1.4px]"
                >
                    Teck Stack
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3">
                    {techStack.map(({ name, icon, color, des }) => {
                        return (
                            <div
                                key={name}
                                className="mx-auto mt-[1.2rem]
                                     p-[1rem] rounded-md"
                            >
                                <div
                                    className="text-[#fff] text-center backdrop-blur-2xl 
                                                rounded-md p-[1rem] h-[265px] drop-shadow-lg border-[1px]
                                                border-[#eee3]"
                                >
                                    <FontAwesomeIcon
                                        icon={icon}
                                        className={`text-[3rem] block mx-auto text-[${color}]`}
                                    />
                                    <h3 className="text-[#fff] text-[1.2rem] font-semibold mt-[1rem]">
                                        {name}
                                    </h3>
                                    <p className="text-[#eee5] mt-[1rem]">{des}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
export default TechStack;
