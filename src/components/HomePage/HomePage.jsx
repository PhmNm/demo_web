import React, {
    useEffect,
    useState
} from 'react';
import ReactPaginate from 'react-paginate';
import './Home.css';
import fTest from '../../data/999dat.json';

const data = fTest.collection;

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


function HomePage() {
    const itemsPerPage = 10;
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
        <div>
            <table className="home-table">
                <thead>
                    <tr>
                        <th className="col-id-head">ID</th>
                        <th className="col-sentence-head">SENTENCE</th>
                    </tr>
                </thead>
                <tbody className="home-table-cont">
                    <Items currentItems={currentItems} />
                </tbody>
                <div className="pagination">
                    <ReactPaginate
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={0}
                        marginPagesDisplayed={0}
                        pageCount={pageCount}
                        previousLabel="<<"
                        breakLabel=""
                        nextLabel=">>"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        subContainerClassName="pages pagination"
                        containerClassName="pagination"
                        activeClassName="active"
                        renderOnZeroPageCount={null}

                    />
                </div>
            </table>
        </div>
    );
}

export default HomePage;