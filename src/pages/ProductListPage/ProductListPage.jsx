import React, {Component} from 'react';
import ProductList from './../../component/ProductList/ProductList';
import ProductItem from '../../component/ProductItem/ProductItem';
import {connect} from 'react-redux'

class ProductListPage extends Component {
  render(){
    let products= [];
    return (
      <div className="container">
        <ProductList>
          {this.showProducts(products)}
        </ProductList>
      </div>
    );
  }
  showProducts(products){
    let result = null;
    if(products.length > 0){
      result = products.map((product, index)=>{
        return (
          <ProductItem 
            key={index}
            product = {product}
            index = {index}
          />
        )
      })
    }
    return null;
  }
}
//kết nối với productReducer để lấy data product và render
const mapStateToProps = state =>{
  return{
    products: state.productReducer
  }
}
export default connect(mapStateToProps, null)(ProductListPage)