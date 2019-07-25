import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actGetProductByIdRequest } from './reducer'

class ProductDetail extends Component {
    componentWillMount(){
         //lay id tren URl de show detail cua id do
        let id = this.props.match.params.id
        this.props.getProductIdFromStore(id);
    }
    render() {
        console.log('itemdetail',this.props)
        let element =  (<div>Loading post...</div>)
        const {itemDetail} = this.props
        if (itemDetail){
            element = ( <div className="product-detail">
            <div className="col-md-8">
                <img className="img-responsive" src={itemDetail.imageUrl} alt="" />
                <h2>{itemDetail.name}</h2>
                <p>{itemDetail.description}</p>
            </div>
            <div className="col-md-4">
               <div className=" cart-right">
               <table>
                    <tbody>
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
                    </tbody>
                </table>
               </div>
            </div>
            <button className="btn-order">Đặt hàng</button>
        </div>)
        }
        return (
            <div className="container">
                { element}
            </div>
        )
    }
    
}
const mapStateToProps = state => {
    console.log('state from store',state)
    //tham số là state
    return {
        // lấy dứ liệu từ trong store ra chuyển thành props ( store đã được reducer xử lý)
        itemDetail: state.ProductReducer.dataProductId || {}, // thêm cái này cho nó khỏi bị lỗi undefined
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