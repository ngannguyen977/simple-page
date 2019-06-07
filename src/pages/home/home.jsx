import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductComponent from '../products/index';
import Categories from '../products/product-categories';
import { getProduct } from '../products/reducer';
import HomeReducer from '../../pages/home/reducer';
import './home.scss';

class Home extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div className="home-page">

                <div className="container">
                    <div className="row">
                        <div className="col-md-6 short-intro">
                            <h3>YÊU TẤT CẢ VẺ ĐẸP MỘC MẠC ĐẾN TỪ THIÊN NHIÊN</h3>
                            <p>Chắc hẳn bạn đã từng biết đến hoặc đã từng được nghe tới NOTH Garden, một không gian tràn ngập cây giữa những ngóc ngách của Hà Nội. </p>
                        </div>
                        <div className="col-md-6"><img className="img-responsive" alt="" src="http://noth.garden/wp-content/uploads/2018/01/noth-garden-blog-trai-nghiem-khong-gian-cua-vuon-noth-5-1100x733.jpg" /></div>
                    </div>
                    <Categories />

                    <div className="container">
                        <ProductComponent />
                    </div>
                </div>
            </div>
        );
    }

}


export default Home

