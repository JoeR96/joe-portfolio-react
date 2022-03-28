import React, { useContext, useRef } from 'react';
import Image from '../project/projectImages/reactImage.jpg'
import Image2 from '../project/projectImages/reactNativeImage.png'
import Slider from 'react-slick';
import { FaQuoteLeft, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Button } from '@mui/material';
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
                <h1 style={headerText}>University Projects</h1>
            </div>
            <div style={body}>

                <div style={slider}>
                    <button
                        onClick={gotoPrev}
                        style={{ backgroundColor: '#212121', left: '5%' }}
                    >
                        <FaArrowLeft
                            style={{ color: '#EFEFEF' }}
                        />
                    </button>
                    <Slider {...settings} ref={sliderRef}>
                        { items.map((test) => (
                            <div
                                className='single--testimony'
                                key={test.id}
                            >
                                <div className='testimonials--container'>
                                    <div
                                        className='review--img'
                                        style={{
                                            backgroundColor:
                                                '#212121',
                                        }}
                                    >
                                        <img
                                            src={test.image}
                                            alt={test.name}
                                        />
                                    </div>
                                    <div
                                        className='review--content'
                                        style={{
                                            backgroundColor:
                                                '#212121',
                                            color: '#EFEFEF'
                                        }}
                                    >
                                        <p>{test.text}</p>
                                        <h1>{test.name}</h1>
                                        <h4>{test.title}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <button
                        onClick={gotoNext}
                        style={{ backgroundColor: '#212121', left: '5%' }}
                    >
                        <FaArrowRight
                            style={{ color: '#EFEFEF' }}
                        />
                    </button>
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
const carouselContainer = {
    height: '50%',
    paddingBottom: '3.5rem'
}