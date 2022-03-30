import React, {useEffect, useState} from 'react'
import headshot from '../headerComponent/JoePortrait.png'
import { Button, Slider, Stack,Box } from '@mui/material'
import { Link } from 'react-scroll'
import {
    FaLinkedin,
    FaGithub,

} from 'react-icons/fa';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox'; import { motion } from 'framer-motion';
export default () => {
    const [value, setValue] = React.useState(100);
    const [scale, setScale] = React.useState(0.000121);
    const [rotationSpeed, setRotationrotationSpeed] = React.useState(36);
    const handleChange = (event, newValue) => {
        console.log(newValue)
        setValue(newValue);
        setScale(newValue / 50)
        setRotationrotationSpeed(newValue)
    };

    return (
        <div id="header" style={landing}>
                <div style={landingContainer}>
                <div style={landingContainerLeft}>

                    <motion.div
                        initial={{ x: "-125vh" }}
                        transition={{
                            delay: 0.125,
                            default: { duration: 0.8 },
                            type: "spring",
                            stiffness: 100
                        }}
                        animate={{ x: 0 }}
                        style={lclContent}>
                            <a href="https://github.com/"><FaGithub style={detailsIcon} /></a>
                            <a href="https://Linkedin.com/"><FaLinkedin style={detailsIcon} /></a>
                        <Box sx={{
                            width: 250,
                            padding: '2rem'
                        }}>
                            <h2 style={{
                                textAlign: 'center',
                            color:'#EAEAEA'}}>Zoom!</h2>
                            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                                <IndeterminateCheckBoxIcon />
                                <Slider style={sliderStyle}
                                    aria-label="Volume" value={value}
                                    onChange={handleChange} />
                                <AddBoxIcon />
                            </Stack>
                        </Box>
                    </motion.div>
                    
                    
                </div>
                <motion.img
                    initial={{ y: "-125vh" }}
                    transition={{
                        delay: 0.125,
                        default: { duration: 0.8 },
                        type: "spring",
                        stiffness: 100
                    }}
                    animate={{ y: 0 }}
                    whileHover={{
                        scale: scale,
                        rotate: rotationSpeed
}}
                  

                    src={headshot} style={portraitImage} alt="" />
               
               
                <div style={landingContainerRight}>
                    <motion.div
                        initial={{ x: "125vh" }}
                        transition={{
                            delay: 0.125,
                            default: { duration: 0.8 },
                            type: "spring",
                            stiffness: 100
                        }}
                        animate={{ x: 0 }}
                        style={{ ...lcrContent, ...landingContainerRight }}>
                        
  
                            <h6 style={lcrh6}>Junior Full Stack Developer</h6>
                            <h1 style={lcrh1}>Joe Richardson</h1>
                        <p>Hi I'm Joe, by day I am coding with C# for a manufacturing product, 
                            by night I am creating websites with React and Javascript!
                            </p>
                            <div style={lcrButtonContainer}>
                                <Button variant="outlined" style={lcrContactButton} >
                                    <Link to="contact" spy={true} smooth={true}><p>Contact Me</p></Link>
                                </Button>
                                <Button variant="contained" style={lcrProjectButton}>
                                    <Link to="projects" spy={true} smooth={true}><p style={projectText}>Download CV</p></Link>
                                </Button>
                            </div>          
                        </motion.div>         
                    </div>
                
                </div>
            </div>
            
    )
}

const landing = {
    alignItems: 'center',
    height: '100vh',

}
const landingContainer = {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    position: 'relative'
}

const landingContainerLeft = {
    flex: '35%',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    backgroundColor: '#F56539'
}

const landingContainerRight = {
    flex: '65%',
    height: '100%',
    backgroundColor: '#212121',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-End',
    justifyContent: 'center'
}
const portraitImage = {
    position: 'absolute',
    width: '22.5%',
    left: '22.5%',

    
}

const lcrContent = {
    color: 'white',
    width: '45%',
    marginRight: '15rem'
}

const lclContent = {
    alignItems: 'center',
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-start',
    margin:'3rem'
}

const icon = {
    margin: '16px'
}
const lcrh1 = {
    fontSize: '3.25rem',
    fontWeight: '600',
    lineHeight: '110%',
    margin:'1rem'
}

const lcrh6 = {
    fontSize: '1.25rem',
    fontWeight: '500',
    marginBotton: '-0.85rem',
    opacity: '0.8'
}

const lcrButtonContainer = {
    width: '350px',
    marginTop: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}

const lcrContactButton = {
    borderRadius: 28,
    color: '#F56539',
    borderColor: '#F56539'
}


const lcrProjectButton = {
    borderRadius: 28,
    backgroundColor: '#F56539'
}

const projectText = { color: 'black', fontWeight: '500' }

const detailsIcon = {
    color: '#212121',
    borderRadius: '50%',
    width: '45px',
    height: '45px',
    display: 'flex',
    margin: '0 1rem',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '23px',
    transition: '250ms ease-in-out',
    flexShrink: 0,
    '&:hover': {
        transform: 'scale(1.1)',
        color: '#212121',
        backgroundColor: '#EFEFEF',
    }
}


const sliderStyle = {
    color: '#212121',
}
