import React from "react";

import Contact from "./Contact";

function ContactList(props) {
    return (
        <div>
            {props.contacts.map(c => <Contact key={c.id} name={c.name} email={c.email} phone={c.phone} city={c.city} />)}
        </div>
    );
}

export default ContactList;