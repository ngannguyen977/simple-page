import { connect } from 'react-redux';
import ProductList from './product-list';
import { actGetProductsRequest } from './reducer'

const mapStateToProps = (state) => {
    //tham số là state
    console.log('dam ko co cua cao', state.ProductReducer.dataProducts)
    return {
        // lấy dứ liệu từ trong store ra chuyển thành props ( store đã được reducer xử lý)
        data: state.ProductReducer.dataProducts || {}, // thêm cái này cho nó khỏi bị lỗi undefined
        totalPage : state.ProductReducer.totalPage
    }

}

//chuyển ham thành props để thực thi action getProduct


const mapDispatchToProps = dispatch => {
    return {
        // getDataFromStore: () => dispatch(getData()),
        getProductFromStore: (pageIndex, PageSize) => dispatch(actGetProductsRequest(pageIndex, PageSize)) // them param cho no'
            // dispatching plain actions
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList)