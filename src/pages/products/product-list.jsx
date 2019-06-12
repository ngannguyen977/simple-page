import React from 'react';
import  ProductItem from './product-item';
import callApi from '../../util/apiCall';

class ProductList extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    componentDidMount() {
        //this.props.getProductFromStore()
       
           this.props.getProductFromStore();
        
    }

  //lên store lấy dữ liệu về
  //mà du liệu phải được map từ state sang props ( phần này đã làm bên index.jsx)
  render() {
      
        const  data = this.props.productData;
        // var {data} = this.state;
        return (
            <div className="container">
                {this.showProducts(data)}
            </div>
        )
    }

  showProducts(data){
   // const PAGESIZE = 10 // set số lượng item hiển thị mặc định là 10
    //const { total, pageIndex } = this.props.productData // kiểu khai báo biến mới trong ES6
    let result = null;
    if(data.length > 0){
        return result = data.map((item, index) =>{
            //có props là items
            return <ProductItem  key={index} items ={item} />
        })
    }

    // let max = total / PAGESIZE
    // let pagination = []
    // for (let i = 1; i < max; i++) {
    //   pagination.push(<li className={pageIndex === i ? "active" : "inactive"}><a href="javascript:void(0)" alt="" onClick={() => this.props.getProductFromStore(i, PAGESIZE)}>{i}</a></li>)
    // }
    // return (
    //   <div>
    //     <div className="list">
    //       {result}
    //     </div>
    //     <nav aria-label="Page navigation">
    //       <ul className="pagination">
    //         {pagination}
    //       </ul>
    //     </nav>
    //   </div>
    // )
    }
}

export default ProductList
