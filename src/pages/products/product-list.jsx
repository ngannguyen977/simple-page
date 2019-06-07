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
        const  data = this.props.productShow
        return (
            <div className="container">
                {this.showProducts(data)}
            </div>
        )
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
