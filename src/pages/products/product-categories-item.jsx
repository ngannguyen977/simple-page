import React, { Component } from 'React';
import { connect } from 'react-redux'
import ProductItem from './product-item';
import { actGetProductsByCategoriesRequest } from './reducer'

class ProductCetegoriesItem extends Component{
    componentWillMount(){
        let id = this.props.match.params.id
        this.getProductCategoryFromStore(id);
       
    }
    render() {
        const PAGESIZE=5
        const {data, pageIndex, totalPage} = this.props;
        console.log̣̣̣('this props', this.props)
        let pagination = []
        for (let i = 0; i < totalPage/PAGESIZE; i++) {
            pagination.push(<li key={i} className={pageIndex === i ? "active" : "inactive"}>
                    <a onClick={() => this.props.getProductCategoryFromStore(i, PAGESIZE)}>{i+1}</a>
                </li>)
        }

        return(
            <div>
                <div className="container">
                    <div className="row-flex">
                        {this.showProductByCategory(data)}
                    </div>
                </div>

                <div>
                    <nav aria-label="Page navigation">
                        <ul className="pagination">
                            {pagination}
                        </ul>
                    </nav>

                </div>
            </div>
        )
    }
    showProductByCategory(data=[], index){
        let result = null;
        if( data.length > 0){
            return result = data.map((item, index) =>{
                //có props là items
                return <ProductItem key={index} items ={item} />
            })
        }
    }
}
const mapStateToProps = state =>{
    // lấy dứ liệu từ trong store ra chuyển thành props ( store đã được reducer xử lý)
    return{
        itemList : state.ProductReducer.dataProductCA || [],
        totalPage: state.ProductReducer.totalPage
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        getProductCategoryFromStore: (pageIndex, PageSize) => dispatch(actGetProductsByCategoriesRequest(pageIndex, PageSize))
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductCetegoriesItem)