import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actGetProductByIdRequest } from './reducer'

class ProductDetail extends Component {
    componentWillMount(){
        this.props.getProductIdFromStore();
    }
    render() {
        console.log("adjkfkjd",this.props);
        let { itemDetail } = this.props ? (
            
            <div className="product-detail">
                <div className="list--item col-md-8">
                    <img src={this.itemDetail.imageUrl} alt="" />
                    <h2>{this.itemDetail.name}</h2>
                    <p>{this.itemDetail.description}</p>
                </div>
                <div classname="col-md-4">
                    <table>
                        <tr>
                            <td>Mã sản phẩm</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Đặc tính</td>
                            <td>Ưa nắng</td>
                        </tr>
                        <tr>
                            <td>Giá bán</td>
                            <td>20000</td>
                        </tr>
                        <tr>
                            <td>Chiều cao</td>
                            <td>16cm</td>
                        </tr>
                        <tr>
                            <td>Tình trạng</td>
                            <td>3 cây</td>
                        </tr>
                    </table>
                </div>
                <button className="btn-order">Đặt hàng</button>
            </div>
        ):(
            <div>Loading post...</div>
        )
        
        return (
            <div className="container">
                { itemDetail}
            </div>
        )
    }
    
}
const mapStateToProps = state => {
    //tham số là state
    return {
        // lấy dứ liệu từ trong store ra chuyển thành props ( store đã được reducer xử lý)
        data: state.ProductReducer.dataProductId || {}, // thêm cái này cho nó khỏi bị lỗi undefined
    }

}
const mapDispatchToProps = dispatch => {
    //let id = ownProps.match.params.id;
    return {
        getProductIdFromStore: (id) => dispatch(actGetProductByIdRequest(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductDetail)