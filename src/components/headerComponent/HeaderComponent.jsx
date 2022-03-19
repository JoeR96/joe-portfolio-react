import React from 'react'
import headshot from '../headerComponent/headerImage.jpg'
import { Grid, Button } from '@mui/material'
import { Link } from 'react-scroll'
export default () => {
    return (
        
        <Grid style={styleOne}>
            <Grid item
                sm={12}>
            <div style={imageContainer}>
                    <img style={image} alt="headshot" src={headshot}></img>
                    <h1 style={name}>Joe Richardson</h1>
                    <Button variant="outlined" style={contactButton}>
                        <Link to="contact" spy={true} smooth={true}><p style={contactButtonText}>Contact Me</p></Link>
                    </Button>
                    <h3 style={introduction}>Junior .NET Developer</h3>
                    <p style={introductionText}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to.</p>
                    <Button variant="text" style={projectButton} >
                        <Link to="projects" spy={true} smooth={true}><p style={projectButtonText}>Projects</p></Link>
                    </Button>
                </div>

            </Grid>
        </Grid>
            
    )
}
const image = {
    width: '100%',
}

const text = {
    textAlign: "center",
    margin:0
}
const imageContainer = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
}

const styleOne = {
    backgroundColor: "#343a40"
}


const contactButton = {
    position: 'absolute',
    top: '25%',
    left: '10%',
    color: '#EDB91E',
    border: '2px solid'
}

const contactButtonText = {
        color: '#EDB91E',
        fontWeight: '16px',
        fontSize: '18px'
}

const projectButton = {
    position: 'absolute',
    top: '32.5%',
    left: '60%',
}

const projectButtonText = {
    color: '#EDB91E',
    fontWeight: '32px',
    fontSize: '36px'
}

const name = {
    fontWeight: '32px',
    fontSize: '48px',
    position: 'absolute',
    top: '15%',
    left: '10%',
    color: '#222222'
}

const introduction = {
    fontWeight: '24px',
    fontSize: '36px',
    position: 'absolute',
    top: '15%',
    left: '60%',
    color: '#222222'
}

const introductionText = {
    fontWeight: '24px',
    fontSize: '36px',
    position: 'absolute',
    top: '20%',
    left: '60%',
    color: '#222222'
}