import { useState, useEffect } from "react";
import Paragraph from "../components/Paragraph";
import "./Contact.css";
export default function Contact() {
     const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const delay = setTimeout(() => {
            setIsLoaded(true);
            clearTimeout(delay);
        }, 250); 

        return () => clearTimeout(delay);
    }, []);

    return (
        <div className="contact">
            <Paragraph title="Hola." className={`paragraph-contact ${isLoaded ? 'fade-in' : ''}`}>
                 Would you like to contact me? Get in touch. 
                 <br/>
                 I'm always open to new opportunities and collaborations.
            </Paragraph>
            <div className={`adresses ${isLoaded ? 'fade-in' : ''}`}>
            Email: <a  href="mailto:agustina.scapusio.99@gmail.com">agustina.scapusio.99@gmail.com</a> 
            <br />
            On the internet:  <a href="https://www.linkedin.com/in/agustina-scapusio/">LinkedIn</a> · <a className="link-contact" href="https://www.instagram.com/agusscapusio/">Instagram</a> · <a className="link-contact" href="https://github.com/AgustinaScapusio">GitHub</a>
            </div>
        </div>
    );
}