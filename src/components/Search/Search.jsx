import { React, useState } from 'react';
import fTest from '../../data/999dat.json';
import './Search.css';


function Matching({ searchTerm }) {
    if (searchTerm !== "")
        searchTerm = " " + searchTerm + " ";
    return (
        fTest.collection.filter((val) => {
            if (searchTerm === "") {
                return val;
            }
            else if (val.eng.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val;
            }
            else if (val.vie.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val;
            }
            return "";
        }).map((val) => {
            if (searchTerm !== "") {
                return (
                    <>
                        <tr>
                            <td rowSpan="2" className="col-id">{val.id}</td>
                            <td className="col-sentence">{val.eng}</td>
                        </tr>

                        <tr>
                            <td className="col-sentence">{val.vie}</td>
                        </tr>
                    </>
                )
            }
            return "";
        })
    )
}

function Search(props) {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div className="Search">
            <input type="text" placeholder="Search by match word..." onChange={e => setSearchTerm(e.target.value)} />
            <div>
                <table className="search-table">
                    <thead>
                        <tr>
                            <th className="col-id-head">ID</th>
                            <th className="col-sentence-head">SENTENCE</th>
                        </tr>
                    </thead>
                    <tbody className="table-cont">
                        <Matching searchTerm={searchTerm} />
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Search;