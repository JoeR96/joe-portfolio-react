import React from 'react'
import { motion } from 'framer-motion'

export default () => {
    return (
       <div></div>
    )
   
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