import { React, useState } from 'react';
import { useForm } from 'react-hook-form';

import fTest from '../../data/999dat.json';
import './Search.css';


function Matching({ Filter }) {
    console.log(Filter)
    let searchTerm = Filter.text
    if (Filter.case === "match") {
        if (searchTerm !== "")
            searchTerm = " " + searchTerm + " ";
    }
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
            return <></>;
        })
    )
}

const defaultValues = {
    text: "",
    case: "match"
}
function Search(props) {
    // const [searchTerm, setSearchTerm] = useState('');
    const [FilterTerm, setFitlerTerm] = useState(defaultValues);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        setFitlerTerm(data);
    }
    return (
        <div className="Search">
            <form className="form-search" onSubmit={handleSubmit(onSubmit)}>
                <div className="search-text">
                    <input type="text" placeholder="Search by word..." {...register("text")} />
                </div>
                <div className="option-case">
                    <label class="search-radio">Match cases
                        <input type="radio" defaultValue="match" defaultChecked {...register("case")} />
                        <span class="search-checkmark"></span>
                    </label>
                    <label class="search-radio">Included
                        <input type="radio" defaultValue="incl"  {...register("case")} />
                        <span class="search-checkmark"></span>
                    </label>
                </div>
                <div className="submit-search">
                    <input type="submit" className="button-search" value="Search" />

                </div>
            </form>
            <div>
                <table className="search-table">
                    <thead>
                        <tr>
                            <th className="col-id-head">ID</th>
                            <th className="col-sentence-head">SENTENCE</th>
                        </tr>
                    </thead>
                    <tbody className="table-cont">
                        <Matching Filter={FilterTerm} />
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Search;