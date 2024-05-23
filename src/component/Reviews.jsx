import React from "react";
function Reviews() {
    return (
        <div className="container-fluid">

            <div className="row text-center">
                <h1>CHÀO MỪNG (tên khách hàng)</h1>
                <h3>(slogan)</h3>
            </div>

            <div className="row align-self-center">
                <div className="col-lg-5 offset-lg-3">
                    <div className="card">
                        <div className="card-body">
                            <h3>Tên khách hàng</h3>
                            <p>Số sao</p>
                            <span>Đánh giá</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-1">
                    <img src="./assets/images/product.jpg" alt="product" />
                </div>
            </div>

            <div className="row align-self-center">
                <div className="col-lg-1 offset-lg-3">
                    <img src="./assets/images/product.jpg" alt="product" />
                </div>
                <div className="col-lg-5">
                    <div className="card">
                        <div className="card-body">
                            <h3>Tên khách hàng</h3>
                            <p>Số sao</p>
                            <span>Đánh giá</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row align-self-center">
                <div className="col-lg-5 offset-lg-3">
                    <div className="card">
                        <div className="card-body">
                            <h3>Tên khách hàng</h3>
                            <p>Số sao</p>
                            <span>Đánh giá</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-1">
                    <img src="./assets/images/product.jpg" alt="product" />
                </div>
            </div>  

        </div>
    )
}
export default Reviews