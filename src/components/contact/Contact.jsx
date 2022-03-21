import React from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";
import { Link } from 'react-scroll'
import {
    FontAwesomeIcon
} from "@fortawesome/react-fontawesome";

export default function Contact() {
    return (
        <div style={contacts}>
            <div>  
                <h1 style={h1Style}>Contacts</h1>
                <div style={contactsBody}>
                    <div style={contactsForm}>
                        <form>
                            <div style={inputContainer}>
                                <label
                                    style={labelText}
                                    name="name">
                                    Name
                                </label>
                                <input name="name"
                                    style={input}
                                ></input>
                            </div>
                            <div style={inputContainer}>
                                <label
                                    style={labelText}
                                    name="name">
                                    Email
                                </label>
                                <input name="name"
                                    style={input}
                                ></input>
                            </div>
                            <div style={inputContainer}>
                                <label
                                    style={labelText}
                                    name="name">
                                    Message
                                </label>
                                <input name="name"
                                    style={{...input,...formMessage}}
                                ></input>
                            </div>
                        </form>
                    </div>
                    <div style={contactDetails}>
                        <p style={contactText}>
                            07557987521
                        </p>
                        <p style={contactText}>
                            joeyrichardson96@gmail.com
                        </p>
                    </div>
                </div>
                <Button variant="contained" >
                    <Link to="header" spy={true} smooth={true}><p>Return</p></Link>
                </Button>
            </div>
            
       </div>
    );
}
const contacts = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    position: 'relative'
}

const contactsContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '80%',
    height: '100%',
    marginTop: '2rem'
}

const h1Style = {
    fontSize: '3.5rem',
    marginBottom: '2.5rem',
    color: '#F56539'
}

const contactsBody = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%'
}

const contactsForm = {
    display: 'flex',
    width: '100%'
}

const inputContainer = {
    width: '100%'
}

const labelText = {
    color: '#f56539',
    display: 'inline-flex',
    padding: '0.5px',
    fontSize: '0.9rem',
    fontWeight: '600'
}

const input = {
    boxSizing: 'border-box',
    borderRadius: '50px',
    outline: 'none',
    marginBottom: '2rem',
    padding: '0.7rem',
    width: '100%',
    backgroundColor: '#212121',
    borderColor: '#F56539',
    border: '4px solid'

}

const formMessage = { height: '150px' }
const contactText = {
    color: '#EAEAEA',
    width: '45%',
    marginLeft: '1.5rem',
    fontSize: '24px',
    lineHeight: '110%',
    wordBreak: 'word-break',
    fontWeight: '600'
}

const contactDetails = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'spaceEvenly',
    flex: '0.6 1',
    boxSizing: 'border-box',
    paddingLeft: '7rem',
    marginTop: '1.2rem'
}