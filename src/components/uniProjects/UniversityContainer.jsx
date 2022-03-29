import React, {  useRef } from 'react';
import Image from '../project/projectImages/reactImage.jpg'
import Image2 from '../project/projectImages/reactNativeImage.png'
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import {  FaArrowRight, FaArrowLeft } from 'react-icons/fa';
var items = [{
    id: 1,
    text: 'React',
    name: 'Project Power',
    title: 'Project Power',
    image: Image
},
    {
        id:  2,
        text: 'React Native',
        name: 'Project Power',
        title: 'Project Power',
        image: Image2
    }
]


export default () => {

    const sliderRef = useRef();

    const settings = {
        dots: true,
        adaptiveHeight: true,
        infinite: true,
        speed: 800,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        margin: 3,
        loop: true,
        autoplaySpeed: 3000,
        draggable: true,
        swipeToSlide: true,
        swipe: true,
    };

    const gotoNext = () => {
        sliderRef.current.slickNext();
    };

    const gotoPrev = () => {
        sliderRef.current.slickPrev();
    };
    
    return (
        <div style={container}>
            <div style={header}>
                <motion.h1
                    initial={{ x: -400 }}
                    whileInView={{
                        x: 0,
                    }}
                    transition={{
                        delay: 0,
                        default: { duration: 1 },
                        type: "spring",
                        stiffness: 100
                    }}
                    style={headerText}>University Projects</motion.h1>
            </div>
            <div style={body}>

                <div style={slider}>
                    <motion.div
                        initial={{ x: 400 }}
                        whileInView={{
                            x: 0,
                        }}
                        transition={{
                            delay: 0,
                            default: { duration: 1 },
                            type: "spring",
                            stiffness: 100
                        }}
                    >
                        <iframe
                            width="1200"
                            height="720"
                            src={`https://www.youtube.com/embed/9RIftJz8cKQ`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}



const container = {
    backgroundColor: '#F56539',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
}

const header = {

}

const headerText = {
    color: '#212121',
    fontWeight: '700',
    fontSize: '3.5rem'
}

const body = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: '95%',
    marginTop: '1rem',
    position: 'relative'
}

const slider = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: '70%'
}
