import React from 'react';
import  ProductItem from './product-item';

class ProductList extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    componentWillMount() {
           this.props.getProductFromStore();
           this.handleClick = this.handleClick.bind(this);
        
    }
    handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }


  //lên store lấy dữ liệu về
  //mà du liệu phải được map từ state sang props ( phần này đã làm bên index.jsx)
  render() {
    console.log('djashfdkjf',this.props.productData)
    const PAGESIZE = 10 // set số lượng item hiển thị mặc định là 10
    const {data,  total, pageIndex } = this.props;
        let max = total / PAGESIZE
        let pagination = []
        for (let i = 1; i < max; i++) {
            pagination.push(<li className={pageIndex === i ? "active" : "inactive"}><a href="" onClick={() => this.props.getProductFromStore(i, PAGESIZE)}>{i}</a></li>)
        }
        return (
           <div>
                <div className="container">
                    {this.showProducts(data)}
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
            console.log('xxxxxxxxxxxxxxxxxxxxxx')
            //có props là items
            return <ProductItem  key={index} items ={item} />
        })
    }
    
    }
}

export default ProductList
