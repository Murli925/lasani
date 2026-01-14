import React from "react";

import Background from '../images/banner1.png';

export default function Banner (){
    
    return(
<section id="banner" className="">
    <div className="main-banner-area">
        <div className="container-fluid">
            <div className="main-banner-content">
                <h1 data-aos="fade-up">Aesthetix: Redefining Spaces with <span>Architectural Magic</span></h1>
                <p data-aos="fade-up">Welcome to Esta Architects, where innovation meets elegance. We are a leading architecture firm dedicated to creating visionary designs that transcend expectations.</p>
                <div className="banner-btn" data-aos="fade-up">
                    <a className="default-btn" href="/contact-us/">Contact Us</a>
                    </div>
                    </div>
                    </div>
                    <div style={{backgroundImage:`url(${Background})`}} className="main-banner-image aos-init aos-animate" data-aos="fade-up"></div>
                    <div className="main-banner-wrap-shape">
                        <img alt="Shape" loading="lazy" width="502" height="287" decoding="async" data-nimg="1" src="images/banner-shape.png"/>
                    </div>
                    <div className="main-banner-video">
                        <img alt="Text Shape" loading="lazy" width="182" height="182" decoding="async" data-nimg="1" src='images/text.png' />
                        <div className="video-btn">
                        <i className="ri-play-fill"></i>
                        </div>
                        </div>
                        <ul className="main-banner-social">
                            <li>
                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                <i className="ri-facebook-line"></i>
                                </a>
                                </li>
                                <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="ri-instagram-line"></i></a></li>
                                <li><a href="https://www.twitter.com/" target="_blank" rel="noreferrer"><i className="ri-twitter-line"></i></a></li>
                                </ul>
                                <div className="main-banner-arrow">
                                    <a href="/contact-us/">
                                    <img alt="arrow right" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src="/images/arrow-right-755f72a8.svg"/>
                                    </a>
                                    </div>
                                    <ul className="main-banner-info">
                                        <li><span>CALL:</span><a href="tel:3214264567">+321 426 4567</a></li>
                                        <li><span>MAIL:</span><a href="mailto:trazteam@gmail.com">trazteam@gmail.com</a></li>
                                        </ul>
                                    </div>
</section>

    );

}

