import React from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

import {
    FontAwesomeIcon
} from "@fortawesome/react-fontawesome";

export default function Contact() {
    return (
        <div>
            <div style={contact}>
                <h3>Contact Me</h3>
            </div>
            
            <div style={contact}>

                <Grid container spacing={2}>
                    <Grid item xs={6} md={6} style={rightCard}>
                        <Card style={card} sx={{ minWidth: 250 }}>
                            <CardContent>
                                <p style={text}>joeyrichardson96@gmail.com</p>
                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid item xs={6} md={6} style={leftCard}>
                        <Card style={card} sx={{ minWidth: 250 }}>
                            <CardContent>
                                <p style={text}>07557987521</p>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Button variant="contained" >
                    Send
                </Button>
            </div>
            
       </div>
    );
}
const hr = {
    margin: '32'
}

const contact = {
    display: 'flex',
    justifyContent: 'center',
}

const leftCard = {
    display: 'flex',
    justifyContent: 'left',
}

const rightCard = {
    display: 'flex',
    justifyContent: 'right',
}

const card = {
    padding: '16',
    backgroundColor: '#5C5B58'
}

const text = {
    textAlign: "center",
    color: "#EDB91E"
}