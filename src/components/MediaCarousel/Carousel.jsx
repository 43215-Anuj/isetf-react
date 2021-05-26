import React, { useEffect } from 'react'
import CarouselSlider from "react-carousel-slider"

const Carousel = (props) => {

    useEffect (() => {
        // let accEleSetting;
        // let mobileRegx = /Mobi|Tablet|iPad|iPhone/;
        // if (mobileRegx.test(navigator.userAgent)) {
        //     accEleSetting.button = true;
        // }
    }, [])

    const carouselItems = {
        autoSliding: {
            items: props.items
        }
    }

    let manner = {
        autoSliding: {interval: "3s"},
        duration: "2s"
    };

    let buttonSetting = {
        placeOn: "middle-inside",
        hoverEvent: true,
        style: {
            left: {
                height: "40px",
                width: "40px",
                color: "#313131",
                background: "#e7c012",
                borderRadius: "50%"
            },
            right: {
                height: "40px",
                width: "40px",
                color: "#313131",
                background: "#e7c012",
                borderRadius: "50%"
            }
        }
    };
    
    
    return (
        <div>
            <CarouselSlider slideItems = {carouselItems.autoSliding.items}
                manner = {manner} 
                buttonSetting = {buttonSetting}
                sliderBoxStyle = {{background: "transparent"}} />
        </div>
    )
}

export default Carousel
