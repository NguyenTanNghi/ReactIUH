import { useState } from "react"

function Contact({ contacts, onDelete }) {
    
    return (<>{contacts.map((contact) => (
        <div className="contact" key={contact.id}>
            <div className="info">
                <h2 className="firstName">{contact.firstName}</h2>
                <p className="lastName">{contact.lastName}</p>
            </div>
            <p className="phone">Phone: <span>{contact.phone}</span></p>
            <p className="address">Address: <span>{contact.address}</span></p>
            <button className="delete" onClick={() => onDelete(contact.id)}>Delete</button>
        </div>
    ))}</>)




}
export default Contact