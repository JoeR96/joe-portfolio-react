import React from 'react'
import { Grid } from '@mui/material';
import ProjectCard from './ProjectCard';
import projects from './projects.js'

export default () => {
    return (
        
        <div
        id='projects'
            style={projectContainer}>
        <div style={about} id="about">
                <div style={lineStyling}>
                    <div style={circle}></div>
                    <div style={circle}></div>
                    <div style={styleLine}></div>
                </div> 
                <div style={aboutBody}>
                    
                <div            
                    style={aboutDescription}>
                    <h3 style = {h2text}>Projects</h3>
                    </div>       
                </div>
            </div>
            
            <Grid 
                container
                spacing={2}
              
            >
                {projects.map((project,index)  => {
                return(                
                        <Grid 
                        item
                        xs={3} 
                        md={3} 
                        xl={3} 
                        lg={3}
                        key={index}
                        >
                            <ProjectCard props={project}></ProjectCard>
                            
                        </Grid> 
                )
                })}
                </Grid>
        </div>
        
    )
}



const projectContainer = {
    backgroundColor: "#212121",

}

const project = {
    width: '304px',
    height: '360px',
    borderRadius: '10px',
    justifyContent: 'center',
    padding: '1.4rem 2rem ',
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
    backgroundColor: '#F56539'
}

const projectContent = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems:'center'
}

const projectHeader = {

}

const projectBody = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gridGap: '4.5rem',
    paddingBottom: '12.5rem'
}

const projectHeaderText = {
    fontWeight: '600',
    fontSize: '2rem',
    lineHeight: '110%',
    textAlign: 'center',
    color: '#EAEAEA'
}

const projectButtons = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
}

const button = {
    backgroundColor: '#f56539',
    width: '150px',
    borderRadius: 28,
    color: '#EAEAEA'
}

const projectDescription = {
    position: 'absolute',
    width: '95%',
    height: '160px',
    left: '0',
    top: '0',
    transform: 'translate(-110,40%)',
    padding: '15px',
    borderRadius: '0 20px 20px 0',
    transition: 'transform .9s,- webkit - transform .9s',
    lineHeight: '110%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const projectSkills = {
    position: 'relative'   
}

const projectSkillText = {
    fontWeight: '600',
    fontSize: '1.25rem',
    lineHeight: '110%',
    textAlign: 'center',
    color: '#EAEAEA'
}


const detailsIcon = {
    backgroundColor: '#212121',
    color: '#EFEFEF',
    borderRadius: '50%',
    width: '45px',
    height: '45px',
    display: 'flex',
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

const about = {
    position: 'relative',
    backgroundColor: '#212121',
    paddingBottom: '8rem'
}

const lineStyling = {
    position: 'absolute',
    top: '50px',
    left: '5%',
    height: '200px',
    width: '85%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-Between'
}

const circle = {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#F56539'
}

const styleLine = {
    width: '95%',
    height: '5px',
    borderRaidus: '10px',
    backgroundColor: '#F56539'
}

const aboutBody = {
    paddingTop: '16rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 'fit-content'
}

const aboutDescription = {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    flex: '0.5',
    width: '100%'
}

const aboutImage = {
    marginTop : '40px'
}

const h2text = {
    color: 'WHITE',
    fontSize: '6.6rem',
    marginBottom: '40px',
    textAlign:'center'
}

const descriptionText = {
    color: '#EAEAEA'
}