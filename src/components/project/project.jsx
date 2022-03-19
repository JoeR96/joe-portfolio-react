import React from 'react'
import { Grid } from '@mui/material'
import { Card,CardContent } from '@mui/material'
const isEven = (d) => {
    console.log(d)
    if (d % 2 == 0) {
        return true
    }

    return false

}

export default (props, index) => {

    if (isEven(props.i))
    {
        return (
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Card style={ styleTwo }sx={{ minWidth: 275 }}>
                        <CardContent>
                            <h2 style={text}>{props.props.title}</h2>
                            <p style={text}>{props.props.description}</p>
                        </CardContent>

                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card style={styleOne} sx={{ minWidth: 275 }}>
                        <CardContent>
                            < div style={imageContainer} >
                                <img style={image} src={props.props.image}></img>
                            </div >

                        </CardContent>

                    </Card>
                </Grid>
            </Grid>
        )
    }
    else
    {
        return (
            <Grid  container spacing={2}>
                <Grid item xs={12} md = {6}>
                    <Card style={styleOne} sx={{ minWidth: 275 }}>
                        <CardContent>
                            < div style={imageContainer} >
                                <img style={image} src={props.props.image}></img>
                            </div >
                        </CardContent>

                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card style={styleTwo} sx={{ minWidth: 275 }}>
                        <CardContent>
                            <h2 style={text}>{props.props.title}</h2>
                            <p style={text}>{props.props.description}</p>
                        </CardContent>

                    </Card>
                </Grid>
            </Grid>
        )
        }
    
}

const text = {
    textAlign: "center",
    color: "#999999"
}

const image = {
    width: '100%',
    height: '75%'
}
    
const imageContainer = {
    display: 'flex',
    justifyContent: 'center',
}

const styleOne = {
    backgroundColor: "#212529"
}

const styleTwo = {
    backgroundColor: "#212529",
    height: '32.5vw'

}