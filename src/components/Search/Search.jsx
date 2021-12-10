import { React, useState } from 'react';
import fTest from '../../../src/999dat.json';
import './style.css';

// const data = fTest.collection;
// function

function Matching({ searchTerm }) {
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
        })

    )
}

function Search(props) {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div className="Search">
            <input type="text" placeholder="Search..." onChange={e => setSearchTerm(e.target.value)} />
            <div className="main_table">
                <div id="root" /><table className="table">
                    <thead>
                        <tr>
                            <th className="col-id">ID</th>
                            <th className="col-sentence">Sentence</th>
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