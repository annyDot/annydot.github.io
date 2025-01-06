import React from 'react';
//icons
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

const Footer = () => {
    return (
    
        <footer>
            <a href='http://github.com/annydot' target='_blank' rel='noreferrer'><FaGithub style={{ color: "#FC5050", width: "25px", height: "25px"}}/></a>
            <a href='http://dribbble.com/annydot' target='blank' rel='noreferrer'><FaDribbble style={{ color: "#FC5050", width: "25px", height: "25px" }}/></a>
        </footer>
    
    )
}

export default Footer