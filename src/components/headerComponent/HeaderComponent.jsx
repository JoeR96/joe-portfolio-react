import React from 'react'
import headshot from '../headerComponent/JoePortrait.png'
import { Grid, Button } from '@mui/material'
import { Link } from 'react-scroll'
import {
    FaLinkedin,
    FaGithub,

} from 'react-icons/fa';
import FadeIn from 'react-fade-in';

export default () => {
    return (
            <div id="header" style={landing}>
                <div style={landingContainer}>
                <div style={landingContainerLeft}>
                    <FadeIn >

                        <div style={lclContent}>
                            <a href="https://github.com/JoeR96"><FaGithub style={detailsIcon} /></a>
                            <a href="https://Linkedin.com/JoeR96"><FaLinkedin style={detailsIcon} /></a>
                        </div>
                    </FadeIn>

                    </div>
                    <img src={headshot} style={portraitImage} alt="" />
               

                <div style={landingContainerRight}>
                    <FadeIn  >
                        <div style={{...lcrContent,...landingContainerRight}}>
                            <h6 style={lcrh6}>Junior Full Stack Developer</h6>
                            <h1 style={lcrh1}>Joe Richardson</h1>
                            <p>His palms are sweaty, knees weak, arms are heavy
                                There's vomit on his sweater already, mom's spaghetti
                                He's nervous, but on the surface he looks calm and ready
                                To drop bombs, but he keeps on forgetting
                                What he wrote down, the whole crowd goes so loud
                                He opens his mouth, but the words won't come out
                                He's choking, how? Everybody's joking now</p>
                            <div style={lcrButtonContainer}>
                                <Button variant="outlined" style={lcrContactButton} >
                                    <Link to="contact" spy={true} smooth={true}><p>Contact Me</p></Link>
                                </Button>
                                <Button variant="contained" style={lcrProjectButton}>
                                    <Link to="projects" spy={true} smooth={true}><p style={projectText}>Download CV</p></Link>
                                </Button>
                            </div>
                        
                       
                       
                        </div>         
                    </FadeIn> 
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
    marginLeft: '25rem',
    marginRight: '25rem'
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

