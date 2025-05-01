import React from "react";
import githubLogo from '../assets/github-white-icon.png';
import LinkedinLogo from '../assets/linkedin-white-icon.png';


const Footer = () => {
    return (
        <footer>
            <div className="github-icon">

            <a
                    href="https://www.linkedin.com/in/neshad-mahmud/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={LinkedinLogo}
                        alt="Github Logo"
                    />
                </a>

                <a
                    href="https://github.com/neshadx"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={githubLogo}
                        alt="Github Logo"
                    />
                </a>

            </div>

            <p className="credit">
                Created By
                <a
                    href="https://github.com/neshadx"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Neshad Mahmud
                </a>
            </p>
        </footer>
    );
};

export default Footer;






