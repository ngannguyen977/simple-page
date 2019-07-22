import React, { Component } from 'react'
import { connect } from 'react-redux'


class ProductDetail extends Component {
    
    render() {
        let { itemDetail } = this.props.itemDetail ? (
            <div className="product-detail">
                <div className="list--item col-md-8">
                    <img src={this.props.itemDetail.imageUrl} alt="" />
                    <h2>{this.props.itemDetail.name}</h2>
                    <p>{this.props.itemDetail.description}</p>
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
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id;
    return {
        itemDetail: state.items.find(itemDetail =>itemDetail.id ===id)
    }
}

export default connect(mapStateToProps)(ProductDetail)