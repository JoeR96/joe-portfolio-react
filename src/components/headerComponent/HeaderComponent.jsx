import React from 'react'
import headshot from '../headerComponent/JoePortrait.png'
import { Grid, Button } from '@mui/material'
import { Link } from 'react-scroll'
import { GoMarkGithub } from "react-icons/go";
import { SiLinkedin } from "react-icons/si";
import { slide as Menu } from 'react-burger-menu'

export default () => {
    return (
        <div id="header" style={landing}>
            <div style={landingContainer}>
                <div style={landingContainerLeft}>
                    <div style={lclContent}>
                        <a style={icon} href="https://github.com/JoeR96"><GoMarkGithub /></a>
                        <a style={icon} href="https://Linkedin.com/JoeR96"><SiLinkedin /></a>
                    </div>
                </div>
                <img src={headshot} style={portraitImage} alt="" />
                
                <div style={landingContainerRight}>
                    <div style={lcrContent}>
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
    marginRight: '14rem'
}

const lclContent = {
    alignItems:'center',
    width: '100%',
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