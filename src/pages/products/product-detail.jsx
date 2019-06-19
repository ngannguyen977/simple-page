import React from 'react'
import { connect } from 'react-redux'


class ProductDetail extends React.Component {
    constructor() {
    }
    render() {
        const itemDetail = this.props.items ?(
            <div>
            <section className="profil  py-5 ">
                <div className="container">
                        <div className="col-md-8">
                           <div className="product-img">
                            <img src={this.props.items.imageUrl} alt="" />
                           </div>
                            <div className="product-des">
                                <div className="product-tittle">
                                    <h4 className="">{this.props.title}</h4>
                                </div>
                                <div className="product-description">
                                    <p>
                                        {this.props.description}
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
           {itemDetail}
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