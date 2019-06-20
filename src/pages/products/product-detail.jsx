import React, { Component } from 'react'
import { connect } from 'react-redux'


class ProductDetail extends Component {
    
    render() {
     let { items } = this.props

            //    return (
            //     <div className="container">
            //         <div className="col-md-8">
            //             <div className="product-img">
            //                 <img src={items.imageUrl} alt=""/>
            //             </div>
            //             <div className="product-des">
            //                 <div className="product-tittle">
            //                     <h2>{items.name}</h2>
            //                 </div>
            //                 <div className="product-description">
            //                     <p>
            //                         {items.description}
            //                     </p>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            //    )
        const items = this.props.?(
            <div>
                <section className="profil  py-5 ">
                    <div className="container">
                        <div className="col-md-8">
                            <div className="product-img">
                                <img src={items.imageUrl} alt="" />
                            </div>
                            <div className="product-des">
                                <div className="product-tittle">
                                    <h2>{items.name}</h2>
                                </div>
                                <div className="product-description">
                                    <p>
                                        {items.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        ) : (
            <div classname="center">
                Loading...
            </div>
        )
        return (
           {items}
        )
        
    }
}
const mapStateToProps = (state, ownProps) => {
    console.log('STATE', state)
    let id = ownProps.match.params.product_id;
    return {
        productItem: state.dataProducts.find(productItem =>productItem.id ===id)

    }
}

export default connect(
    mapStateToProps,
)(ProductDetail)