// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import getProduct from '../../reducer/indexReducer';

// class ProductList extends Component {
//     constructor(props){
//         super(props);
//         this.state = {}
//     }
//     componentDidMount(){
//         this.props.getProductFromStore()
//     }
//     render() {
//         return(
//             <div className="container">
//                 {this.props.children}
//             </div>
//         )
//     }

// }
// const mapStateToProps = (state) =>{
//     return{
//         productData:state.dataProducts || {}
//     }
// }
// const mapDispatchToProps = dispatch =>{
//     return {
//         getProductFromStore: (pageIndex, pageSize)=>{
//             dispatch(getProduct(pageIndex,pageSize))
//         }
//     }
// }
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(ProductList)
