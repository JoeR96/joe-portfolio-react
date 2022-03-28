import React from 'react'
import FadeIn from 'react-fade-in';


export default () => {
    return (
        <div style={about} id="about">
            <FadeIn delay={360}>
                <div style={lineStyling}>
                    <div style={circle}></div>
                    <div style={circle}></div>
                    <div style={styleLine}></div>
                </div> 
                <div style={aboutBody}>
                    
                    <div style={aboutDescription}>
                        <h2 style={h2text}>What I do</h2>
                        <p style={descriptionText}>His palms are sweaty, knees weak, arms are heavy There's vomit on his sweater already, mom's spaghetti He's nervous, but on the surface he looks calm and ready To drop bombs, but he keeps on forgetting What he wrote down, the whole crowd goes so loud He opens his mouth, but the words won't come out He's choking, how? Everybody's joking now</p>
                    </div>       
                    </div>
            </FadeIn>
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