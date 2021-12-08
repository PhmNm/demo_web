import React, {
    useEffect,
    useState
} from 'react';
import ReactPaginate from 'react-paginate';
import './style.css';
import fTest from './dat_short.json';
const data = fTest.collection
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
console.log(getdata);


function Items({ currentItems }) {
    return (
        <>
            {currentItems && currentItems.map((item) => (
                <>
                    <tr>
                        <td rowSpan="2" className="col-id">{item.id}</td>
                        <td className="col-sentence">{item.eng}</td>
                    </tr>

                    <tr>
                        <td className="col-sentence">{item.vie}</td>
                    </tr>
                </>
            ))}
        </>
    );
}

// function PaginatedItems({ itemsPerPage }) {
//     // We start with an empty list of items.
//     const [currentItems, setCurrentItems] = useState(null);
//     const [pageCount, setPageCount] = useState(0);
//     // Here we use item offsets; we could also use page offsets
//     // following the API or data you're working with.
//     const [itemOffset, setItemOffset] = useState(0);

//     useEffect(() => {
//         // Fetch items from another resources.
//         const endOffset = itemOffset + itemsPerPage;
//         setCurrentItems(data.slice(itemOffset, endOffset));
//         setPageCount(Math.ceil(data.length / itemsPerPage));
//     }, [itemOffset, itemsPerPage]);

//     // Invoke when user click to request another page.
//     const handlePageClick = (event) => {
//         const newOffset = event.selected * itemsPerPage % items.length;
//         console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
//         setItemOffset(newOffset);
//     };

//     return (
//         <>
//             <Items currentItems={currentItems} />
//             <ReactPaginate
//                 nextLabel="next >"
//                 onPageChange={handlePageClick}
//                 pageRangeDisplayed={3}
//                 marginPagesDisplayed={2}
//                 pageCount={pageCount}
//                 previousLabel="< previous"
//                 pageClassName="page-item"
//                 pageLinkClassName="page-link"
//                 previousClassName="page-item"
//                 previousLinkClassName="page-link"
//                 nextClassName="page-item"
//                 nextLinkClassName="page-link"
//                 breakLabel="..."
//                 breakClassName="page-item"
//                 breakLinkClassName="page-link"
//                 containerClassName="pagination"
//                 activeClassName="active"
//                 renderOnZeroPageCount={null}
//             />
//         </>
//     );
// }

// Add a <div id="container"> to your HTML to see the componend rendered.
// ReactDOM.render(
//   <PaginatedItems itemsPerPage={4} />,
//   document.getElementById("container")
// );
function HomePage({ itemsPerPage }) {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);
    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage % data.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };

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

                            <Items currentItems={currentItems} />
                            {/* <tr>
                                <td rowSpan="2" className="col-id">1</td>
                                <td className="col-sentence">Lorem ipsum dolor sit amet, consectetur.</td>
                            </tr> */}

                        </tbody>
                        <ReactPaginate
                            nextLabel=">>"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={0}
                            marginPagesDisplayed={0}
                            pageCount={pageCount}
                            previousLabel="<<"
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakLabel=""
                            // breakClassName="page-item"
                            // breakLinkClassName="page-link"
                            containerClassName="pagination"
                            activeClassName="active"
                            renderOnZeroPageCount={null}
                        />
                    </table>
                </div>
            </div>
        </>
    );
}

export default HomePage;