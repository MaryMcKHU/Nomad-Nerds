import React, {useState, useEffect} from 'react';
import up_arrow from "../images/up-arrow.png";


function ScrollTop() {

    const [showButton, setShowButton] = useState(false);

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    };

    useEffect(() => {
        const handleScrollButtonVisibility = () => {
            window.pageYOffset > 350 ? setShowButton(true) : setShowButton(false)
        };
        window.addEventListener("scroll", handleScrollButtonVisibility);

        return () => {
            window.removeEventListener('scroll', handleScrollButtonVisibility);
        };
    }, []);

    return (
      <>
        {showButton && (
            <div className={`scrollToTop`}>
                <button
                    style={{position:"fixed", right:50, bottom:110, border:"none", background:"none"}}
                    onClick={handleScrollToTop}
                >
                    <img src={up_arrow} alt="scroll-to-top" height={40} />
                </button>
            </div>
        )}
      </>
    );
};
export default ScrollTop;