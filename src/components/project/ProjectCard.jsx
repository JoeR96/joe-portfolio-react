import React from 'react'
import { motion } from "framer-motion"
import { FaGithub } from 'react-icons/fa';
export default (project) => {
    return(
        <div style={projectContainer}>
                    <motion.div
                        initial={{ y: -125 }}
                        animate={{
                            y: 0,
                        }}
                        transition={{
                            delay: 0,
                            default: { duration: 0.8 },
                            type: "spring",
                            stiffness: 100
                        }}
                        style={projectContent}>
                        <h2 style={projectHeaderText}>{project.props.title}</h2>
                        <p style={{...projectSkillText,padding:'0px 64px 0px 64px   '}}>{project.props.description}</p>
                        <ul style={projectSkillText}>
                        {
                             project.props.skills.map((skill) =>
                             <li style={skillListItem}>{skill}</li>
                             )
                        }
                       </ul>
                        <div style={projectButtons}>
                            <div >
                                <a style={detailsIcon} href={project.props.githubLink}><FaGithub aria-label='GitHub' /></a>
                            </div>

                        </div>
                    </motion.div>
                </div>
    )
}
const detailsIcon = {
    backgroundColor: '#212121',
    color: '#EFEFEF',
    borderRadius: '50%',
    width: '45px',
    height: '45px',
    display: 'flex',
    margin: '0 1rem 1rem 1rem',
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

const projectContainer = {
    
    height: '480px',
    borderRadius: '10px',
    justifyContent: 'center',
    position: 'relative',
    margin:'64px',
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


const projectHeaderText = {
    fontWeight: '900',
    fontSize: '2.25rem',
    lineHeight: '110%',
    textAlign: 'center',
    color: 'black',
}
const projectButtons = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
}

const skillListItem = {
    padding:'16px',
}

const projectSkillText = {
    fontWeight: '600',
    fontSize: '1.25rem',
    lineHeight: '110%',
    textAlign: 'center',
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
