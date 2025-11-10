import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
// import { NavLink } from "react-router-dom";

import footerContact from "../../api/footerContact.json";

export const Footer = () => {

    const iconMap = {
        MdPlace: <MdPlace />,
        IoCallSharp: <IoCallSharp />,
        TbMailPlus: <TbMailPlus />
    }

    return (
        <footer className="footer-section">
         <div className="container">
            <div className="grid grid-three-cols">

                {
                    footerContact.map((curData, index) => {
                        const {icon, title, details} = curData;
                        return (
                            
                        <div className="footer-contact" key={index}>
                            <div className="icon">
                                {iconMap[icon]}
                            </div>
                            <div className="footer-contact-text">
                                <p>{title}</p>
                                <p>{details}</p>
                            </div>
                        </div>
                        );
                    })
                }  
        </div>
        <div className="footer-content">
            <p>Copyright © 2025. All right reserved MuktinathTech </p>
        </div>
        </div>
        </footer>
    );
};