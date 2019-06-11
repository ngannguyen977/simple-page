import products from './products.json'

const getProducts = (pageIndex, pageSize) => {
    if (pageIndex < 0) {
        pageIndex = 0
    }
    let temp = {}
    Object.assign(temp, products)
    temp.data = temp.data.slice((pageIndex) * pageSize, (pageIndex) * pageSize + pageSize)
    temp.pageIndex = pageIndex
    console.log(temp.data, pageIndex, (pageIndex) * pageSize, (pageIndex) * pageSize + pageSize)
    return temp
}
export default { getProducts }