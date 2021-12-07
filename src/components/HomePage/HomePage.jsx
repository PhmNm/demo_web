import React from 'react';
import './style.css';
import fTest from './dat_short.json';

const getdata = fTest.collection.map((data) => {
    return (
        <>
            <tr>
                <td rowSpan="2" className="col-id">{data.id}</td>
                <td className="col-sentence">{data.eng}</td>
            </tr>

            <tr>
                <td className="col-sentence">{data.vie}</td>
            </tr>
        </>
    )

})
function HomePage(props) {
    return (
        <>
            <div>
                <header className="header">
                    <h2>English-VietNam Parallel Corpus</h2>
                </header>
                {/* <TestNe /> */}
                <div className="nav-menu">
                    <a href="about.html">ABOUT </a>
                    <a href="search.html">SEARCH</a>
                    <a href="statistic.html">STATISTICS</a>
                    <a href="index.html">HOME</a>
                </div>
                <div className="main_table">
                    <div id="root" /><table className="table">
                        <thead>
                            <tr>
                                <th className="col-id">ID</th>
                                <th className="col-sentence">Sentence</th>
                            </tr>
                        </thead>
                        <tbody className="table-cont">

                            {getdata}
                            {/* <tr>
                                <td rowSpan="2" className="col-id">1</td>
                                <td className="col-sentence">Lorem ipsum dolor sit amet, consectetur.</td>
                            </tr> */}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default HomePage;