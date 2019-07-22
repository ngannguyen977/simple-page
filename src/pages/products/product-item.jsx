import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class ProductItem extends Component {

    render() {
        let { items } = this.props
     
        console.log('icxbxcvbvcbncvtem',items)
        return (
                <div className="list--item col-md-4 ">
                     <Link to={'/productDetail/'+items.id}>
                        <figure>
                            <img src={items.imageUrl} alt="" />
                            <header>
                                <div className="floater">
                                    Ưa nắng
                                    {DataTransferItemList.unit}
                                </div>
                                <h2>{items.name}</h2>
                            </header>
                            <figcaption>{items.description}</figcaption>
                            <footer>
                                <span>giá:{items.price}</span>
                                <span>Trang Thái:{items.status}</span>
                            </footer>
                        </figure>
                    </Link>
                </div>
            
        )

    }

}
export default ProductItem;
