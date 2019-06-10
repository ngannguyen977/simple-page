import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
        //tham số là state
        console.log('STATE', state)

        return {
            // todo: state.todos[ownProps.id]
            // lấy dứ liệu từ trong store ra chuyển thành props ( store đã được reducer xử lý)
            displayData: state.mocHuong.dulieu,
            productData: state.mocHuong.dataProducts || {} // thêm cái này cho nó khỏi bị lỗi undefined

        }
    }
    //chuyển ham thành props để thực thi action getProduct
const mapDispatchToProps = dispatch => {
    return {
        // getDataFromStore: () => dispatch(getData()),
        getProductFromStore: (pageIndex, pageSize) => dispatch(getProduct(pageIndex, pageSize)) // them param cho no'
            // dispatching plain actions
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MocHuong)