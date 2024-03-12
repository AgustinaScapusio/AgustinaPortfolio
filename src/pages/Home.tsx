import './TypewriterHome.css';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import './Home.css';

export default function Home() {
    const navigate = useNavigate();
    const [textWork, setTextWork] = useState('');
    const [textAbout, setTextAbout] = useState('');
    const [textContact, setTextContact] = useState('');
    const fullTextWork = 'Work';
    const fullTextAbout = 'About';
    const fullTextContact = 'Contact';

    useEffect(() => {
        const intervalWork = startTyping(fullTextWork, setTextWork);
        const intervalAbout = startTyping(fullTextAbout, setTextAbout);
        const intervalContact = startTyping(fullTextContact, setTextContact);

        return () => {
            clearInterval(intervalWork);
            clearInterval(intervalAbout);
            clearInterval(intervalContact);
        };
    }, []);

    const startTyping = (fullText: string, setText: React.Dispatch<React.SetStateAction<string>>) => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.substring(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 100);

        return interval;
    };


    return (
        <>
        <div className='home'>
           <Paragraph className='paragraph-home' title="AGUSTINA SCAPUSIO">
            Full-stack developer with a passion for creating and developing web applications.
            <br />
            Currently working at <a href='https://www.academicwork.no/' target="_blank">Academic Work</a> as a consultant.
           </Paragraph>
           <div className='button-home'>
            <Button text={textWork} onClick={() => navigate('/work')} />
            <Button text={textAbout} onClick={() => navigate('/about')} />
            <Button text={textContact} onClick={() => navigate('/contact')} />
           </div>
           </div>
        </>
    );
}
