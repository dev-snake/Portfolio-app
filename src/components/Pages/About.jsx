import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
const AboutMe = ({ aboutMe }) => {
    return (
        <section>
            <div className="mt-[1rem]">
                <h1 className="text-[#fff] uppercase font-museo text-center text-[2.2rem] tracking-[1.6px]">
                    About me
                </h1>
                <p className="text-[#eee3] text-center tracking-[1.2px]">My introduce</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-[4rem] mb-[1rem]">
                <div className="justify-self-start pl-[2rem] hover:shadow-xxxl transition-all ease-linear">
                    <img
                        src="./src/assets/images/songokuC2.jpg"
                        alt=""
                        className="w-[400px] h-[500px] object-cover"
                    />
                </div>
                <div>
                    <div className="grid grid-cols-3 gap-3 p-[2rem] ">
                        {aboutMe.map(({ name, icon }) => {
                            return (
                                <div
                                    key={name}
                                    className="border-2 rounded-2xl text-center p-[1rem] cursor-pointer backdrop-blur-sm"
                                >
                                    <FontAwesomeIcon
                                        icon={icon}
                                        className="text-[#fff] text-[1.4rem]"
                                    />
                                    <p className="text-[#fff] tracking-[1.4px] overflow-hidden text-ellipsis">
                                        {name}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                    <p className="text-[#eee3] pl-[2rem] pr-[2rem] tracking-[1.6px] text-justify">
                        Front End Developer with 5 years of experience in designing and developing
                        user interfaces, testing, debugging, and training staff within eCommerce
                        technologies. Proven ability in optimizing web
                    </p>
                    <button
                        className="text-[#fff] m-[2rem] capitalize tracking-widest
                            text-[1.2rem] border-2 pt-[.8rem] pb-[.8rem] pl-[1.5rem]
                             pr-[1.5rem] rounded-2xl backdrop-blur-sm "
                    >
                        Dowload cv
                    </button>
                </div>
            </div>
        </section>
    );
};
export default AboutMe;
