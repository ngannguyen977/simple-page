import React from 'react';
import  ProductItem from './product-item';

class ProductList extends React.Component {
    constructor(props){
        super(props);

    }
    componentDidMount() {
        this.props.productFromStore()
    }

  //lên store lấy dữ liệu về
  //mà du liệu phải được map từ state sang props ( phần này đã làm bên index.jsx)
  render() {
<<<<<<< HEAD
    const PAGESIZE = 10 // set số lượng item hiển thị mặc định là 10
    const { data, total, pageIndex } = this.props.productDataCon // kiểu khai báo biến mới trong ES6
   
    // sửa lại UI xíu để nó support phân trang
    let elements = (data || []).map(item => {
      return (

        <div className="list--item col-md-4" key={item.name}>
          <figure>
            <img src={item.imageUrl} alt="" />
            <header>
              <div className="floater">
                {item.unit}
              </div>
              <h2>{item.name}</h2>
            </header>
            <figcaption>{item.description}</figcaption>
            <footer>
              <span>giá:{item.price}</span>
              <span>Trang Thái:{item.status}</span>
            </footer>
          </figure>
        </div>
      )
    })
    let max = total / PAGESIZE
    let pagination = []
    for (let i = 1; i < max; i++) {
      pagination.push(<li className={pageIndex === i ? "active" : "inactive"}><a href="javascript:void(0)" onClick={() => this.props.getProductFromStore(i, PAGESIZE)}>{i}</a></li>)
=======
        const  data = this.props.productShow
        return (
            <div className="container">
                {this.showProducts(data)}
            </div>
        )
>>>>>>> 4cf02c76ac92881f55484e7e2657cd7432ec97e6
    }

  showProducts(data){
    let result = null;
    if(data.length > 0){
        result = data.map((item, index) =>{
            //có props là items
            return <ProductItem  key={index} items ={item} />
        })
    }
    }
}

export default ProductList
