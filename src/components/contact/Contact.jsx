import React from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";
import { Link } from 'react-scroll'
import { FiPhone, FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

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
                                    variant='outlined'
                                ></input>
                            </div>
                            <div style={inputContainer}>
                                <label
                                    style={labelText}
                                    name="name"
                                    variant='outlined'
                                    >
                                        
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
                    <div style={detailGroup}>
                        <a style={personalDetails}>
                            <FiPhone style={detailsIcon} />
                            <p style={contactText}>
                                joeyrichardson96@gmail.com
                            </p>
                        </a>
                        <a style={personalDetails}>
                            <FiAtSign style={detailsIcon} />
                            <p style={contactText}>
                                07557987521@gmail.com
                            </p>
                        </a>
                        <a style={personalDetails}>
                            <HiOutlineLocationMarker style={detailsIcon} />
                            <p style={contactText}>
                                Suffolk, England
                            </p>
                        </a>
                    </div>
                </div>
                <Button style={sendButton} variant="contained" >
                    <Link to="header" spy={true} smooth={true}><p style={sendText}>Send</p></Link>
                </Button>
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
    padding: '6px',
    fontSize: '1rem',
    fontWeight: '700',
    transform: 'translate(50px,50%)',
    backgroundColor: '#212121'
}

const input = {
    boxSizing: 'border-box',
    borderRadius: '50px',
    outline: 'none',
    marginBottom: '2rem',
    padding: '0.7rem',
    width: '100%',
    backgroundColor: '#212121',
    border: '4px solid #F56539',

}

const formMessage = {
    height: '150px',
    color: '#EAEAEA',
    fontSize: '24px',
    lineHeight: '110%',
    wordBreak: 'word-break',
    fontWeight: '600'
}
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

const sendButton = {
    backgroundColor: '#f56539',
    width: '150px',
    height: '50px',
    borderRadius: 35
}

const sendText = {
    color: '#212121',
    fontSize: '16px',
    fontWeight: '600'
}

const detailsIcon = {
    backgroundColor: '#212121',
    color: '#EFEFEF',
    borderRadius: '50%',
    width: '45px',
    height: '45px',
    display: 'flex',
    margin: '0 1rem',
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

const detailGroup = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    flex: '0.6 1',
    boxSizing: 'border-box',
    paddingLeft: '7rem',
    marginTop: '1.2rem'
}

const personalDetails = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    marginBottom : '2.5rem'
}