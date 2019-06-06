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
        this.state={}
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
                        <ProductComponent
                        productDataCon={this.props.productData}
                        getProductFromStore={this.props.getProductFromStore}/>
                    </div>
                </div>
            </div>
        );
    }

}
const mapStateToProps = (state) => {
    //tham số là state
    console.log('STATE', state)

    return {
        // lấy dứ liệu từ trong store ra chuyển thành props ( store đã được reducer xử lý)
        productData: state.HomeReducer.dataProducts || {} // thêm cái này cho nó khỏi bị lỗi undefined

    }
}
//chuyển ham thành props để thực thi action getProduct
const mapDispatchToProps = dispatch => {
return {
    getProductFromStore: (pageIndex, pageSize) => dispatch(getProduct(pageIndex, pageSize)) // them param cho no'
    // dispatching plain actions
}
}

export default connect(
mapStateToProps,
mapDispatchToProps
)(Home)

