import React from "react";
function ContactForm() {
    return (
        <div className='contact'>
            <h1>CONTACT</h1>

            <form action="https://formsubmit.co/017d60356378d6bb1b16323985f505fd" method="POST">
                <input type="text" name="Name" placeholder="Full Name" required></input>
                <input type="email" name="Email" placeholder="Email" required></input>
                <input type="text" name="Subject" placeholder="Subject"></input>
                <textarea name="Message" placeholder="Message" required></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default ContactForm;