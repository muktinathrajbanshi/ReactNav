import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
    return(
        <>
        <header>
            <div className="container">
             <div className="grid navbar-grid">
                <div className="logo">
                    <h1>Muktinath Tech</h1>
                </div>

                <nav>
                    <ul>
                        <li>
                         <a href="#">Home</a>
                        </li>
                        <li>
                        <a href="#">About</a>
                        </li>
                        <li>
                        <a href="#">Services</a>
                        </li>
                        <li>
                        <a href="https://muktinathrajbanshi.com/" target="blank">Contact</a>
                        </li>
                    </ul>
                </nav>

                <div className="ham-menu">
                <button>
                    <GiHamburgerMenu />
                </button>
                </div>

             </div>
            </div>
        </header>
        </>
    );
};