import React from 'react';
import  ProductItem from './product-item';
import {Link} from 'react-router-dom'

class ProductList extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    componentWillMount() {
           this.props.getProductFromStore();
           //this.handleClick = this.handleClick.bind(this);

    }
    
  //lên store lấy dữ liệu về
  //mà du liệu phải được map từ state sang props ( phần này đã làm bên index.jsx)
  render() {
        const PAGESIZE = 10 // set số lượng item hiển thị mặc định là 10
        const {data, pageIndex,totalPage } = this.props;

    // const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);


        // let max = 10
        let pagination = []
        for (let i = 0; i < totalPage/PAGESIZE; i++) {
            pagination.push(<li key={i} className={pageIndex === i ? "active" : "inactive"}>
                    <a onClick={() => this.props.getProductFromStore(i, PAGESIZE)}>{i+1}</a>
                </li>)
        }

        return (

           <div>
                <div className="container">
                    <div className="row-flex">
                        {this.showProducts(data)}
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

  showProducts(data=[]){
    let result = null;
    if(data.length > 0){
        return result = data.map((item, index) =>{
            //có props là items
            return <ProductItem  key={index} items ={item} />
        })
    }

    }
}

export default ProductList
