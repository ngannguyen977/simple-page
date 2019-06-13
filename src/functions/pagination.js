import callApi from './../util/apiCall';

const getpagination = (pageIndex, pageSize) => {
    if (pageIndex < 0) {
        pageIndex = 0
    }
    let temp = {}
    Object.assign(temp, callApi)
    temp.data = temp.data.slice((pageIndex) * pageSize, (pageIndex) * pageSize + pageSize)
    temp.pageIndex = pageIndex
    return temp
}
export default { getpagination }