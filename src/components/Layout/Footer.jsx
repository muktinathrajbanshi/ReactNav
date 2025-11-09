import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";

import footerContact from "../../api/footerContact.json";

export const Footer = () => {
    return (
        <footer className="footer-section">
         <div className="container">
            <div className="grid grid-three-cols">


                {
                    footerContact.map((curData) => {
                        return (
                            <>
                                <div className="footer-contact">
                                <div className="icon">
                                    <IoCallSharp />
                                </div>
                                <div className="footer-contact-text">
                                    <p>Find us</p>
                                    <p>KTM, Putalisadak</p>
                                </div>
                               </div>
                       
                        </>
                        )
                    })
                }

                
        </div>
        </div>
        </footer>
    );
};