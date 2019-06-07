
import { connect } from 'react-redux';
import ProductList from './product-list';
import { getProduct } from './reducer';

//lấy dữ liệu từ store chuyển sang props

const mapStateToProps = (state) => {
    return {
        productShow: state.ProductReducer || {}
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        productFromStore: (pageIndex, pageSize) => dispatch(getProduct(pageIndex, pageSize))
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps)(ProductList)
