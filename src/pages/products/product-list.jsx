import React from 'react'

class ProductList extends React.Component {
  //lên store lấy dữ liệu về
  //mà du liệu phải được map từ state sang props ( phần này đã làm bên index.jsx)
  render() {
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
    }
    return (
      <div>
        <div className="list">
          {elements}
        </div>
        {/* <nav aria-label="Page navigation">

				</nav> */}
        {/* a lam cái phân trang don gian  */}
        <nav aria-label="Page navigation">
          <ul className="pagination">
            {pagination}
          </ul>
        </nav>
      </div>
    )
  }
}
export default ProductList
