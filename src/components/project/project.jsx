import React from 'react'
import {
    FaGithub,
    FaYoutube
} from 'react-icons/fa';
import { motion } from "framer-motion"

export default () => {
    return (
        <div
            style={projectContainer}>
            <div style={projectHeader}>
            </div>
            <motion.div
                initial={{ x: "-50vh" }}
                animate={{
                    x: 0,
                }}
                transition={{
                    delay: 0,
                    default: { duration: 1.25 },
                    type: "spring",
                    stiffness: 100
                }}

                style={projectBody} >
                     <div style={project}>
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
                        <div style={projectDescription}>

                        </div>
                        <h2 style={projectHeaderText}>Recipe App</h2>
                        <p style={projectSkillText}></p>
                            <p style={projectSkillText}>.Net 6</p>       
                            <p style={projectSkillText}>Entity Framework</p>       
                            <p style={projectSkillText}>N Unit</p>       
                        <div style={projectButtons}>
                            <div >
                                <a style={detailsIcon} href="https://github.com/JoeR96/RecipeMateGeneric"><FaGithub aria-label='GitHub' /></a>

                            </div>

                        </div>
                    </motion.div>
                </div>
                <div style={project}>
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
                        <div style={projectDescription}>
                         
                        </div>
                        <h2 style={projectHeaderText}>Project Power</h2>
                            <p style={projectSkillText}></p>
                            <p style={projectSkillText}>Hosted on Ubuntu VPS</p>
                            <p style={projectSkillText}>.NET 6 Web API</p>
                            <p style={projectSkillText}>Entity Framework</p>
                        <div style={projectButtons}>
                            <div >
                                <a style={detailsIcon} href="https://github.com/JoeR96/ProjectPower"><FaGithub /></a>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div style={project}>
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
                        <h2 style={projectHeaderText}>Project Power Web Dashboard</h2>
                            <p style={projectSkillText}>React</p>
                            <p style={projectSkillText}>Material UI</p>
                            <p style={projectSkillText}>React DnD</p>
                       
                        <div style={projectButtons}>
                            <div >
                                <a style={detailsIcon} href="https://github.com/JoeR96/ProjectPowerReact"><FaGithub /></a>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div style={project}>
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
                        <div style={projectDescription}>

                        </div>
                        <h2 style={projectHeaderText}>Login System</h2>
                            <p style={projectSkillText}></p>
                            <p style={projectSkillText}>Intergration and Unit tested</p>
                            <p style={projectSkillText}>.NET 6 Web API</p>
                            <p style={projectSkillText}>Entity Framework</p>
                        <div style={projectButtons}>
                            <div >
                                <a style={detailsIcon} href="https://github.com/JoeR96/LoginSystem"><FaGithub /></a>
                            </div>
                        </div>
                    </motion.div>
                </div>
               
            </motion.div>
        </div>
        
    )
}



const projectContainer = {
    backgroundColor: "#212121",
    minHeight: '50vh',

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

