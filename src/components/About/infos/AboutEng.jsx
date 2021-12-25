import React from 'react';
import { Link } from 'react-router-dom';


function AboutEng(props) {
    return (
        <>
            <div className="about">
                <div className="about-title">
                    <h1>ABOUT THIS WEBSITE</h1>
                    <p>This website is created for mining English-Vietnamese parallel corpus purposes</p>
                </div>
                <h2>Main features</h2>
                <div className="about-column">
                    <div className="card">
                        <div className="container">
                            <h2>PARALLEL CORPUS</h2>
                            <p>A home page default which displays the English-Vietnamese Corpus. Click on each sentence to see its alignment.</p>
                        </div>
                        <Link to="/" className="About-button">Go to home page</Link>
                    </div>
                </div>
                <div className="about-column">
                    <div className="card">
                        <div className="container">
                            <h2>SEARCH BY WORD</h2>
                            <p>User can search a word in the search bar.
                                <br></br>Press Enter or button "Search" to display the result matched the case.</p>
                        </div>
                        <Link to="/search" className="About-button">Go to search page</Link>
                    </div>
                </div>
                <div className="about-column">
                    <div className="card">
                        <div className="container">
                            <h2>STATISTICS</h2>
                            <p>This give you a list of word and its count
                                <ul className="about-list">
                                    <li>Select "Top" to show top 50 words.</li>
                                    <li>Select "All" to show all 500 words </li>
                                </ul>
                            </p>
                        </div>
                        <Link to="/statistics" className="About-button">Go to statistic page</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutEng;
