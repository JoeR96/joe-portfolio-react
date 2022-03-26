import Carousel from 'react-material-ui-carousel'
import Image from '../project/projectImages/reactImage.jpg'
import Image2 from '../project/projectImages/reactNativeImage.png'
import { Paper, Button } from '@mui/material'

var items = [Image,Image2
]


export default () => {
    return (
        <div style={container}>
            <div style={header}>
                <h1 style={headerText}>University Projects</h1>
            </div>
            <div style={body}>
                    <Carousel>
                        {
                            items.map((item, i) => <Item key={i} item={item} />)
                        }
                    </Carousel>
            </div>
        </div>
    )
}

function Item(props) {
    console.log(props.item)
    return (
        <Paper>
           <img src={props.item}></img>
        </Paper>
    )
}

const container = {
    backgroundColor: '#F56539',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
}

const header = {

}

const headerText = {
    color: '#212121',
    fontWeight: '700',
    fontSize: '3.5rem'
}

const body = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: '95%',
    marginTop: '1rem',
    position: 'relative'
}

const slider = {

}