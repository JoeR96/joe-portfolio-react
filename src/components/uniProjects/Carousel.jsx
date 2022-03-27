import React, { Component } from "react";
import Carousel from "react-simply-carousel";
import Image from '../project/projectImages/reactImage.jpg'
import Image2 from '../project/projectImages/reactNativeImage.png'
export default () => {


    const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);

        return (
            <Carousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                itemsToShow={1}
                itemsToScroll={1}
            >
                <div style={{ carouselImage }}><img src={Image}></img></div>
                <div style={{ carouselImage }}><img src={Image2}></img></div>
                <div style={{ carouselImage }}><img src={Image}></img></div>
                <div style={{ carouselImage }}><img src={Image2}></img></div>
                <div style={{ carouselImage }}><img src={Image}></img></div>
                <div style={{ carouselImage }}><img src={Image2}></img></div>
                <div style={{ carouselImage }}><img src={Image}></img></div>
                <div style={{ carouselImage }}><img src={Image2}></img></div>
            </Carousel>
        );
    }

const carouselImage = {
}
    
