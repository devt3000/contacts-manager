import React from "react";
import PropTypes from "prop-types";
import "./Contact.css";

function Contact(props) {
    return (
        <div className="contact">
            <span>Name: {props.name} <br/> Email: {props.email} <br/> Phone: {props.phone} <br/> City: {props.city}</span>
        </div>
    );
}

Contact.protoTypes = {
    name: PropTypes.string.isRequired
};

export default Contact;