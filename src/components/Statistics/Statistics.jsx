import { React, useState } from 'react';
import './Statistics.css';
import { useForm } from 'react-hook-form';
import engwords from '../../data/engWordList.json';
import viewords from '../../data/vietWordList.json';

const eng_sort_by_letter = [...engwords].sort(function (a, b) {
    let wordA = a.word.toUpperCase();
    let wordB = b.word.toUpperCase();
    if (wordA < wordB) {
        return -1;
    }
    else if (wordA > wordB) {
        return 1;
    }
    else return 0;
});
const vie_sort_by_letter = [...viewords].sort(function (a, b) {
    let wordA = a.word.toUpperCase();
    let wordB = b.word.toUpperCase();
    if (wordA < wordB) {
        return -1;
    }
    else if (wordA > wordB) {
        return 1;
    }
    else return 0;
});


function MatchFilter({ values }) {
    var dat = [];
    if (values.lang === "eng" && values.type === "top") {
        dat = engwords.slice(0, 50);
    }
    if (values.lang === "eng" && values.type === "all") {
        dat = eng_sort_by_letter;
    }
    else if (values.lang === "vie" && values.type === "top") {
        dat = viewords.slice(0, 50);
    }
    else if (values.lang === "vie" && values.type === "all") {
        dat = vie_sort_by_letter;
    }
    return (
        dat.map((val, idx) => {
            if (val !== undefined) {
                return (
                    <>
                        <tr>
                            <td className="col-0">{idx + 1}</td>
                            <td className="col-w">{val.word}</td>
                            <td className="col-c">{val.count}</td>
                        </tr>
                    </>
                )
            }
            return "";
        })
    )
}

const defaultValues = {
    type: "top",
    lang: "eng"
}

function Statistic(props) {
    const [FilterTerm, setFitlerTerm] = useState(defaultValues);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        setFitlerTerm(data);
    }
    return (
        <>
            <form className="stat-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="option-lan">
                    <p>Language</p>
                    <label class="container-radio">English
                        <input type="radio" defaultValue="eng" defaultChecked {...register("lang")} />
                        <span class="checkmark"></span>
                    </label>
                    <label class="container-radio">Vietnamese
                        <input type="radio" defaultValue="vie"  {...register("lang")} />
                        <span class="checkmark"></span>
                    </label>
                </div>
                <br />
                <div className="option-numbers">
                    <p>Numbers</p>
                    <label class="container-radio">Top
                        <input type="radio" defaultValue="top" defaultChecked {...register("type")} />
                        <span class="checkmark"></span>
                    </label>
                    <label class="container-radio">All
                        <input type="radio" defaultValue="all"  {...register("type")} />
                        <span class="checkmark"></span>
                    </label>
                </div>
                <input type="submit" className="button1" value="Filter" />
                <input type="submit" className="button" value="Reset" onClick={() => {
                    reset(defaultValues);
                }} />
            </form>
            <div>
                <table className="stat-table">
                    <thead class="stat-table-head">
                        <tr>
                            <th class="col-o">Ordinal</th>
                            <th class="col-w">Word</th>
                            <th class="col-c">Count</th>
                        </tr>
                    </thead>

                    <tbody className="stat-table-cont">
                        <MatchFilter values={FilterTerm} />
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Statistic;