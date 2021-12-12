import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

// About.propTypes = {

// };

function About(props) {
    return (
        <>
            <div>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>About</title>
                <div className="about">
                    <h1 className="About-title">ABOUT THIS WEBSITE</h1>
                    <p>This website is created for mining English-VietNam parallel corpus</p>
                </div>
                <div className="column">
                    <div className="card">
                        <div className="container">
                            <h2>Parralel corpus</h2>
                            <p>See some of our parallel corpus here</p>
                            <Link to="/" className="About-button">Go to homepage</Link>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <div className="container">
                            <h2>Search by word</h2>
                            <p>This provide search by word feature</p>
                            <Link to="/search" className="About-button">Go to search page</Link>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <div className="container">
                            <h2>Statistics</h2>
                            <p>This give you a list of word and its count</p>
                            <Link to="/statistics" className="About-button">Go to statistic page</Link>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
{/* <Link to="/statistics" className="About-button">Go to statistic page</Link> */ }

export default About;
