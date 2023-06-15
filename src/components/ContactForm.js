import "./ContactForm.css"
import React from "react"
import { useState } from "react"

const ContactForm = () => {

    const[value,setValue] = useState({
        name : '',
        email: '',
        subject: '',
        message: ''
    })
    const updateName = (e) =>{
        setValue((previousState) =>({
            ...previousState,
            name: e.target.value
        }))  
    }
    const updateEmail = (e) =>{
        setValue((previousState) =>({
            ...previousState,
            email: e.target.value
        }))  
    }
    const updateSubject = (e) =>{
        setValue((previousState) =>({
            ...previousState,
            subject: e.target.value
        }))  
    }
    const updateMessage = (e) =>{
        setValue((previousState) =>({
            ...previousState,
            message: e.target.value
        }))  
    }
    const handleSubmit = (e) => {
        console.log(value)
        alert('The details are consoled');
        e.preventDefault()
    }
    return(
        <>
        <div className="form-container">
            <h1>Send a message to us!</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="Name" value={value.name} onChange={updateName}/>
                <input placeholder="Email" value={value.email} onChange={updateEmail}/>
                <input placeholder="Subject" value={value.subject} onChange={updateSubject}/>
                <textarea placeholder="Message" rows='4' value={value.message} onChange={updateMessage}></textarea>
                <button>Send Message</button>
            </form>
        </div>
        </>
    )
}

export default ContactForm