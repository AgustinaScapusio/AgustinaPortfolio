import Paragraph from "../components/Paragraph";
import Button from '../components/Button';
import './Work.css';
import { useState, useEffect } from "react";

export default function Work() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const delay = setTimeout(() => {
            setLoaded(true);
            clearTimeout(delay);
        }, 300);

        return () => clearTimeout(delay);
    }, []);

    return (
        <div className={`work ${loaded ? 'fade-in' : ''}`}>
            <Paragraph title="Work" className='paragraph-work'>
                I'm a full-stack developer, fresh from completing a rigorous bootcamp. While my portfolio may be modest since graduating just two months ago, it reflects my proficiency in React, ASP.NET, C#, SQL Server, and more. I'm excited to continue learning and expanding my skill set.
            </Paragraph>
            <div className='button-work'>
                <Button text='PitchMatch' onClick={() => window.open('https://youtu.be/4Ac3Hg_NCuQ', '_blank')} />
                <Button text='Tic-tac-toe' onClick={() => window.open('https://tic-tac-toe-tau-tawny.vercel.app/', '_blank')} />
                <Button text='TimeOut Game' onClick={() => window.open('https://time-out-game.vercel.app/', '_blank')} />
                <Button text='Portfolio' onClick={() => window.open('https://github.com/AgustinaScapusio/AgustinaPortfolio', '_blank')} />
                <Button text='Management App' onClick={() => window.open('https://management-project-six.vercel.app/', '_blank')} />
                <Button text='Quiz App' onClick={() => window.open('https://quiz-app-two-lovat.vercel.app/', '_blank')} />
                <Button text='Placepicker' onClick={() => window.open('https://placepicker-psi.vercel.app/', '_blank')} />
                <Button text='Challenge App' onClick={() => window.open('https://animating-framemotion.vercel.app/', '_blank')} />
            </div>
        </div>
    );
}
