export const HeroSection = () => {
    return (
        <>
            <div className="hero-section main">
                <div className="container">
                    <div className="banner-column">
                        <div className="banner-inner">
                            <h1 className="heading-xl">
                                All Your Files in One Secure Location.
                            </h1>
                            <p className="paragraph">
                                We stores all your most important files in one secure location.
                                Access them whenever needed, share and collaborate with your connections.
                            </p>
                            <button>
                                Get Started
                            </button>
                        </div>
                        <div className="imgage-div">
                            <image>
                                <img src="./navbar.png" alt="main hero image" />
                            </image>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};