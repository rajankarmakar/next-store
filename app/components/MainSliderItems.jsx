import Image from "next/image";
import React from "react";
import ShopNowButton from "./ShopNowButton";

const MainSliderItems = ({ sliderItem }) => {
    // let imageurl = sliderItem.banner_image
    //     ? `https://v3.nagadhat.com/${sliderItem.banner_image.split("public/")[1]
    //     }`
    //     : "";
    let imageurl = `https://v3.nagadhat.com/${sliderItem.banner_image}`;
    const {
        title: altText,
        title: title,
        short_title: subtitle,
        btn_text: btnText,
        btn_text: btnAltText,
        btn_link: path,
    } = sliderItem;
    return (
        <div className="hero-slider-item">
            <div className="hero-slider-photo">
                <Image
                    src={imageurl}
                    className="img-fluid"
                    alt={altText}
                    fill={true}
                />
            </div>
            <div className="hero-slider-content">
                <h1>{title ? title : ""}</h1>
                <h2>{subtitle ? subtitle : ""}</h2>
                {
                    btnText ? (<ShopNowButton
                        path={path}
                        btnText={btnText}
                        btnAltText={btnAltText}
                    />) : ""
                }

            </div>
        </div>
    );
};

export default MainSliderItems;
