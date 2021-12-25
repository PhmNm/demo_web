import React from 'react';
import { Link } from 'react-router-dom';


function AboutVie(props) {
    return (
        <>
            <div className="about">
                <div className="about-title">
                    <h1>GIỚI THIỆU VỀ WEBSITE</h1>
                    <p>Website này được ra cho mục đích khai thác song ngữ Anh-Việt.</p>
                </div>
                <h2>Các chức năng chính</h2>
                <div className="about-column">
                    <div className="card">
                        <div className="container">
                            <h2>HIỂN THỊ SONG NGỮ</h2>
                            <p>Đây là trang chủ và dùng để hiển thị các ngữ liệu song ngữ Anh-Việt.
                                Nhấn vào từng câu để xem rõ gióng hàng.</p>
                        </div>
                        <Link to="/" className="About-button">Đi đến home page</Link>
                    </div>
                </div>
                <div className="about-column">
                    <div className="card">
                        <div className="container">
                            <h2>TÌM KIẾM TỪ</h2>
                            <p>Trong trang này, người dùng có thể tìm kiếm một từ trong thanh tìm kiếm.
                                <br></br>Bấm Enter hoặc nút "Search" để hiển thị kết quả ở dạng bảng chứa các câu tương ứng.
                            </p>
                        </div>
                        <Link to="/search" className="About-button">Đi đến trang tìm kiếm</Link>
                    </div>
                </div>
                <div className="about-column">
                    <div className="card">
                        <div className="container">
                            <h2>THỐNG KÊ</h2>
                            <p>Trong trang này, người dùng có thể nhìn thấy những từ phổ biến trong ngữ liệu.
                                <ul className="about-list">
                                    <li>Chọn "Top" để xem 50 từ phổ biến nhất.</li>
                                    <li>Chọn "All" để xem tất cả 500 từ.</li>
                                </ul>
                            </p>
                        </div>
                        <Link to="/statistics" className="About-button">Đi đến trang thống kê</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutVie;
