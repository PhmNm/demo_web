import React, {
    useEffect,
    useState
} from 'react';
import ReactPaginate from 'react-paginate';
import './Home.css';
import fTest from '../../data/999dat.json';
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';


const firebaseConfig = {
    apiKey: "AIzaSyB7QEPHqv1y2CAKhxX54tOxf2Cwi4i-IKE",
    authDomain: "mydb-43b09.firebaseapp.com",
    projectId: "mydb-43b09",
    storageBucket: "mydb-43b09.appspot.com",
    messagingSenderId: "1054014571813",
    appId: "1:1054014571813:web:1166004753c38a2cb906cc",
    measurementId: "G-HBVVJC7YYF"
};

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const storage = firebase.storage();
const data = fTest.collection;


function HomePage() {
    //Firebase
    const [open, setOpen] = useState(false);
    const [oneItem, setOneItem] = useState({});
    const handleClose = () => {
        setOneItem()
        setOpen(false);
    };
    const hanldeClickDialog = async (item) => {
        const itemId = Number(item.id);
        const fetchImages = async () => {
            let result = await storage.ref().listAll();

            let urlPromises = result.items.map((imageRef) =>
                imageRef.getDownloadURL()
            );

            return Promise.all(urlPromises);
        };
        const loadImages = async () => {
            setOpen(true);
            const urls = await fetchImages();
            item.img = urls[itemId - 1];
            setOneItem(item);
        };
        loadImages();
    }

    //Pagination
    const itemsPerPage = 10;
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);
    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage % data.length;
        setItemOffset(newOffset);
    };
    const fecthItem = () => {
        return (
            <>

                {currentItems && currentItems.map((item) => (
                    <>
                        <tr>
                            <td rowSpan="2" className="col-id">{item.id}</td>

                            <td className="col-sentence"><span onClick={() => hanldeClickDialog(item)}>{item.eng}</span></td>
                        </tr>

                        <tr>
                            <td className="col-sentence"><span onClick={() => hanldeClickDialog(item)}>{item.vie}</span></td>
                        </tr>
                    </>
                ))}
            </>
        )
    }
    return (
        <div>
            <Dialog
                disableEscapeKeyDown
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                maxWidth="1200px"
            >
                <DialogContent>
                    <>
                        {oneItem ?
                            <>
                                <img width="100%" src={oneItem.img} alt="" />
                            </>
                            : <></>}
                    </>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
            <table className="home-table">
                <thead>
                    <tr>
                        <th className="col-id-head">ID</th>
                        <th className="col-sentence-head">SENTENCE</th>
                    </tr>
                </thead>
                <tbody className="home-table-cont">
                    {fecthItem()}
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
        </div >
    );
}

export default HomePage;