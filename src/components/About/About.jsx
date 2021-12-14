import { React, useState } from 'react';
import AboutEng from './infos/AboutEng';
import AboutVie from './infos/AboutVie';
import './About.css';

function Showlang({ lang }) {
    console.log(lang)
    if (lang === 'eng') {
        return <AboutEng />
    }
    else {
        return <AboutVie />
    }
}

function About(props) {
    const [curLang, setLang] = useState('eng');
    const handlePageClick = () => {
        var change;
        if (curLang === 'eng') {
            change = 'vie';
        }
        else {
            change = 'eng'
        }
        setLang(change)
        console.log(curLang)
    }
    return (
        <div>
            <button className="Lang-button" onClick={handlePageClick}>{curLang}</button>
            <Showlang lang={curLang} />
        </div>
    );
}

export default About;