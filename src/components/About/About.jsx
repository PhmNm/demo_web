import React from 'react';

About.propTypes = {

};

function About(props) {
    return (
        <>
            <div>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>About</title>
                <link rel="stylesheet" href="about.css" />
                <div className="about">
                    <h1>ABOUT THIS WEBSITE</h1>
                    <p>This website is created for mining English-VietNam parallel corpus</p>
                </div>
                <h2 style={{ textAlign: 'center' }}>Two features</h2>
                {/* SAVE ONE COLUMN FOR FUTURE FEATURE */}
                <div className="column">
                    <div className="card">
                        <div className="container">
                            <h2>Show parralel corpus</h2>
                            <p>This is the home page default, you can see some of our parallel corpus here</p>
                            <a href="index.html" className="button">Go to homepage</a>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <div className="container">
                            <h2>Search by word</h2>
                            <p>This provide search by word feature</p>
                            <a href="seach.html" className="button">Go to seach page</a>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <div className="container">
                            <h2>Statistics</h2>
                            <p>This give you a list of word and its count</p>
                            <a href="statictics.html" className="button">Go to seach page</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;