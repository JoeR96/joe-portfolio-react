import React from 'react'
import { motion } from 'framer-motion'

export default () => {
    return (
        <div style={about} id="about">
                <div style={lineStyling}>
                    <div style={circle}></div>
                    <div style={circle}></div>
                    <div style={styleLine}></div>
                </div> 
                <div style={aboutBody}>
                    
                <motion.div
                    initial={{
                        y: "-25vh",
                opacity:0    }}
                    whileInView={{
                        y: 0,
                        opacity:1
                    }}
                    transition={{
                        delay: 0.125,
                        default: { duration: 0.8 },
                        type: "spring",
                        stiffness: 100
                    }}
                    style={aboutDescription}>
                        <h2 style={h2text}>What I Do</h2>
                    <p style={descriptionText}>
                        During the day I am using C# to develop a manufacturing solution for Sage200,
                        by the night I have started developing my own solution for a fitness program that is stored on a spreadsheet. Project power consists of a workout creation dashboard, a react native mobile app and a .NET Backend. 
                        </p>
                    </motion.div>       
                    </div>
            </div>
    )
   
}

const about = {
    position: 'relative',
    backgroundColor: '#212121',
    paddingBottom: '8rem',
    minHeight: '50vh',

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
    color: '#F56539',
    fontSize: '3.3rem',
    marginBottom: '40px'
}

const descriptionText = {
    color: '#EAEAEA'
}