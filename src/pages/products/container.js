import { connect } from 'react-redux'
import ProductList from './product-list';
import { getProduct } from './reducer';

const mapStateToProps = (state) => {
    console.log('dam an banh cua cao', state.ProductReducer )

    return {
        data: state.ProductReducer.dataProducts || {}
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: 'INCREMENT' }),
        productFromStore: (pageIndex, pageSize) => dispatch(getProduct(pageIndex, pageSize))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
