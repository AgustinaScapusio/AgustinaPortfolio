import { useState, useEffect } from 'react';
import Paragraph from "../components/Paragraph";
import AgustinaImage from '../assets/images/agustina.jpeg';
import './About.css';

export default function About() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const delay = setTimeout(() => {
            setLoaded(true);
            clearTimeout(delay);
        }, 300);

        return () => clearTimeout(delay);
    }, []);

    return (
        <div className={`about ${loaded ? 'fade-in' : ''}`}>
            <div className="title-about">About</div>
                <img src={AgustinaImage} alt="Picture of Agustina Scapusio" />
            <Paragraph title="About Me" className="paragraph-about-me">
                I'm originally from Buenos Aires but now living life in Norway since I was 20. Spent about five years working as a pastry chef/baker in Oslo and back home in Buenos Aires.
                <br/><br/>
                Decided to switch things up a bit and got into full-stack development. I went to a bootcamp led by Brights Learning and AW Academy, and now I'm all set to take on the tech world. I'm really into backend development, but I'm also interested in getting better at design.
                <br/><br/>
                Right now, I'm working at Academic Work as a consultant. I'm organized, highly motivated to get better, and open to learning new things. Plus, I'm really social and always down for a chat or a coffee.
                <br/>I speak Spanish, Norwegian, and English fluently.
            </Paragraph>
            <Paragraph title="Skills" className="paragraph-skills">
                C# · TypeScript · GitHub · Secure Coding · ADO.NET · Agile Project Management · ASP.NET MVC · Entity Framework (EF) Core · Azure · Visual Studio · HTML · CSS · JavaScript · Model-View-Controller (MVC) · React · Microsoft SQL Server · TailWind 
            </Paragraph>
        </div>
    );
}
